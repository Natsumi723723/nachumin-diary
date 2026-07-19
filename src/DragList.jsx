import { useRef, useState, useEffect } from "react";

/* タッチ長押し→ドラッグで縦並び替え。
   items を渡し、並び替え確定時に onReorder(newItems) を呼ぶ。
   renderItem(item) が各行の中身。tap は通常どおり子の onClick に通す。 */
export default function DragList({ items, keyOf, onReorder, renderItem, disabled, onLongPress, longPress = 200 }) {
  const [work, setWork] = useState(null);      // ドラッグ中の作業配列
  const [dragKey, setDragKey] = useState(null);
  const cRef = useRef(null);
  const S = useRef({});
  // 最新の props をハンドラから参照できるよう保持
  S.current.items = items;
  S.current.keyOf = keyOf;
  S.current.onReorder = onReorder;
  S.current.onLongPress = onLongPress;
  S.current.disabled = disabled;

  const list = work || items;

  const sel = (key) => cRef.current?.querySelector(`[data-dk="${CSS.escape(String(key))}"]`);

  const applyTransform = () => {
    const c = cRef.current;
    if (!c || S.current.dragKey == null) return;
    const el = sel(S.current.dragKey);
    if (!el) return;
    const crect = c.getBoundingClientRect();
    const naturalTop = crect.top - c.scrollTop + el.offsetTop;
    el.style.transform = `translateY(${S.current.pointerY - S.current.grab - naturalTop}px)`;
  };

  const startDrag = (key) => {
    const el = sel(key);
    if (!el) return;
    S.current.dragKey = key;
    S.current.grab = S.current.pointerY - el.getBoundingClientRect().top;
    S.current.pickupY = S.current.pointerY;
    S.current.moved = false;
    S.current.order = S.current.items.slice();
    setWork(S.current.order);
    setDragKey(key);
    try { navigator.vibrate && navigator.vibrate(12); } catch (e) { /* noop */ }
    requestAnimationFrame(applyTransform);
  };

  const updateDrag = () => {
    const c = cRef.current;
    if (!c || S.current.dragKey == null) return;
    if (Math.abs(S.current.pointerY - S.current.pickupY) > 10) S.current.moved = true;
    const y = S.current.pointerY - c.getBoundingClientRect().top + c.scrollTop;
    const rows = [...c.querySelectorAll("[data-dk]")];
    let target = rows.length - 1;
    for (let i = 0; i < rows.length; i++) {
      if (y < rows[i].offsetTop + rows[i].offsetHeight / 2) { target = i; break; }
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
      if (el) el.style.transform = "";
      if (S.current.moved) {
        S.current.onReorder(S.current.order.slice());       // 動かした→並べ替え
      } else if (S.current.onLongPress) {
        const item = S.current.items.find((it) => S.current.keyOf(it) === S.current.dragKey);
        S.current.onLongPress({ item, x: S.current.startX, y: S.current.pointerY }); // 動かさず離した→メニュー
      }
      S.current.suppress = Date.now() + 450; // 直後のクリックを抑制
    }
    S.current.dragKey = null;
    setDragKey(null);
    setWork(null);
  };

  useEffect(() => {
    const c = cRef.current;
    if (!c) return;
    const onStart = (e) => {
      if (S.current.disabled || e.touches.length !== 1) return;
      const row = e.target.closest("[data-dk]");
      if (!row || !c.contains(row)) return;
      const t = e.touches[0];
      S.current.startY = t.clientY;
      S.current.startX = t.clientX;
      S.current.pointerY = t.clientY;
      S.current.moved = false;
      const key = row.getAttribute("data-dk");
      clearTimeout(S.current.timer);
      S.current.timer = setTimeout(() => { if (!S.current.moved) startDrag(key); }, longPress);
    };
    const onMove = (e) => {
      const t = e.touches[0];
      S.current.pointerY = t.clientY;
      if (S.current.dragKey == null) {
        if (Math.abs(t.clientY - S.current.startY) > 8 || Math.abs(t.clientX - S.current.startX) > 8) {
          S.current.moved = true;
          clearTimeout(S.current.timer); // スクロール意図
        }
        return;
      }
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
    <div ref={cRef} onClickCapture={onClickCapture} style={{ position: "relative" }}>
      {list.map((item) => {
        const k = keyOf(item);
        return (
          <div
            key={k}
            data-dk={k}
            className={"drag-row" + (dragKey === k ? " dragging" : "")}
          >
            {renderItem(item)}
          </div>
        );
      })}
    </div>
  );
}
