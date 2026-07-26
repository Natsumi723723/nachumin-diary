import { useRef, useState, useEffect } from "react";

/* アイコングリッド用: タッチ長押し→ドラッグで並べ替え。縦横グリッド対応。
   - 動かして離す → onReorder(newItems)
   - 動かさず離す → onLongPress({item,x,y})（メニュー用）
   - タップ（長押し前に離す） → 子の onClick が発火
   footer は並べ替え対象外のセル（＋つくる 等）。 */
export default function IconGrid({ items, keyOf, onReorder, renderItem, onLongPress, longPress = 400, footer }) {
  const [work, setWork] = useState(null);
  const [dragKey, setDragKey] = useState(null);
  const cRef = useRef(null);
  const S = useRef({});
  S.current.items = items;
  S.current.keyOf = keyOf;
  S.current.onReorder = onReorder;
  S.current.onLongPress = onLongPress;

  const list = work || items;
  const sel = (key) => cRef.current?.querySelector(`[data-dk="${CSS.escape(String(key))}"]`);

  const applyTransform = () => {
    const c = cRef.current;
    if (!c || S.current.dragKey == null) return;
    const el = sel(S.current.dragKey);
    if (!el) return;
    const gr = c.getBoundingClientRect();
    const naturalLeft = gr.left + el.offsetLeft;
    const naturalTop = gr.top + el.offsetTop;
    const x = S.current.pointerX - S.current.grabX - naturalLeft;
    const y = S.current.pointerY - S.current.grabY - naturalTop;
    el.style.transform = `translate(${x}px, ${y}px) scale(1.08)`;
  };

  const startDrag = (key) => {
    const el = sel(key);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    S.current.dragKey = key;
    S.current.grabX = S.current.pointerX - rect.left;
    S.current.grabY = S.current.pointerY - rect.top;
    S.current.pickupX = S.current.pointerX;
    S.current.pickupY = S.current.pointerY;
    S.current.moved = false;
    S.current.order = S.current.items.slice();
    el.style.zIndex = "10";
    setWork(S.current.order);
    setDragKey(key);
    try { navigator.vibrate && navigator.vibrate(12); } catch (e) { /* noop */ }
    requestAnimationFrame(applyTransform);
  };

  const updateDrag = () => {
    const c = cRef.current;
    if (!c || S.current.dragKey == null) return;
    // 一番近いセルの中心を探して、そこへ差し込む
    const cells = [...c.querySelectorAll("[data-dk]")];
    let target = 0, best = Infinity;
    for (let i = 0; i < cells.length; i++) {
      const r = cells[i].getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const d = (S.current.pointerX - cx) ** 2 + (S.current.pointerY - cy) ** 2;
      if (d < best) { best = d; target = i; }
    }
    const arr = S.current.order;
    const from = arr.findIndex((it) => S.current.keyOf(it) === S.current.dragKey);
    if (from !== -1 && from !== target) {
      const [m] = arr.splice(from, 1);
      arr.splice(target, 0, m);
      setWork(arr.slice());
    }
    requestAnimationFrame(applyTransform);
  };

  const endDrag = () => {
    clearTimeout(S.current.timer);
    if (S.current.dragKey != null) {
      const el = sel(S.current.dragKey);
      if (el) { el.style.transform = ""; el.style.zIndex = ""; }
      if (S.current.moved) {
        S.current.onReorder(S.current.order.slice());
      } else if (S.current.onLongPress) {
        const item = S.current.items.find((it) => S.current.keyOf(it) === S.current.dragKey);
        S.current.onLongPress({ item, x: S.current.pointerX, y: S.current.pointerY });
      }
      S.current.suppress = Date.now() + 450; // 直後のクリック抑制
    }
    S.current.dragKey = null;
    setDragKey(null);
    setWork(null);
  };

  useEffect(() => {
    const c = cRef.current;
    if (!c) return;
    const onStart = (e) => {
      if (e.touches.length !== 1) return;
      const cell = e.target.closest("[data-dk]");
      if (!cell || !c.contains(cell)) return;
      const t = e.touches[0];
      S.current.startX = t.clientX; S.current.startY = t.clientY;
      S.current.pointerX = t.clientX; S.current.pointerY = t.clientY;
      S.current.moved = false;
      const key = cell.getAttribute("data-dk");
      clearTimeout(S.current.timer);
      S.current.timer = setTimeout(() => { if (!S.current.moved) startDrag(key); }, longPress);
    };
    const onMove = (e) => {
      const t = e.touches[0];
      S.current.pointerX = t.clientX; S.current.pointerY = t.clientY;
      if (S.current.dragKey == null) {
        if (Math.abs(t.clientX - S.current.startX) > 8 || Math.abs(t.clientY - S.current.startY) > 8) {
          S.current.moved = true;
          clearTimeout(S.current.timer); // スクロール意図
        }
        return;
      }
      if (Math.abs(t.clientX - S.current.pickupX) > 8 || Math.abs(t.clientY - S.current.pickupY) > 8) S.current.moved = true;
      e.preventDefault(); // ドラッグ中はスクロールさせない
      updateDrag();
    };
    const onEnd = () => {
      clearTimeout(S.current.timer);
      if (S.current.dragKey != null) endDrag();
    };
    c.addEventListener("touchstart", onStart, { passive: true });
    c.addEventListener("touchmove", onMove, { passive: false });
    c.addEventListener("touchend", onEnd, { passive: true });
    c.addEventListener("touchcancel", onEnd, { passive: true });
    return () => {
      c.removeEventListener("touchstart", onStart);
      c.removeEventListener("touchmove", onMove);
      c.removeEventListener("touchend", onEnd);
      c.removeEventListener("touchcancel", onEnd);
    };
  }, [longPress]);

  const onClickCapture = (e) => {
    if (S.current.suppress && Date.now() < S.current.suppress) {
      e.stopPropagation();
      e.preventDefault();
      S.current.suppress = 0;
    }
  };

  return (
    <div ref={cRef} className="ig-grid" onClickCapture={onClickCapture}>
      {list.map((item) => {
        const k = keyOf(item);
        return (
          <div key={k} data-dk={k} className={"ig-cell" + (dragKey === k ? " dragging" : "")}>
            {renderItem(item)}
          </div>
        );
      })}
      {footer}
    </div>
  );
}
