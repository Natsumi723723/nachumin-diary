import { useState, useRef, useLayoutEffect } from "react";

/* 長押しで出す小さなメニュー。(先頭項目)/コピー/編集/(任意の追加項目)/削除。
   削除は onDelete を1回呼ぶ（確認は呼び出し側でダイアログ表示）。
   高さは項目数で変わるので、実際に測ってから位置を決める（画面下で見切れないように）。 */
export default function ContextMenu({ x, y, onCopy, onEdit, onDelete, onClose, top: topItems, extra }) {
  const W = 168;
  const M = 8; // 画面ふちの余白
  const ref = useRef(null);
  const [pos, setPos] = useState(null); // 測り終わるまでは非表示

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const h = el.offsetHeight;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const left = Math.max(M, Math.min(x - W / 2, vw - W - M));
    let top = y + M;                            // ふつうは指の下に出す
    if (top + h > vh - M) top = y - M - h;      // 下がはみ出すなら指の上に出す
    if (top < M) top = Math.max(M, vh - h - M); // 上下どちらも入らないなら画面内へ寄せる
    setPos({ left, top });
  }, [x, y, topItems, extra, onEdit, onDelete]);

  return (
    <div className="ctx-overlay" onClick={onClose} onContextMenu={(e) => e.preventDefault()}>
      <div
        ref={ref}
        className="ctx-menu"
        style={{
          left: pos ? pos.left : Math.max(M, Math.min(x - W / 2, window.innerWidth - W - M)),
          top: pos ? pos.top : y + M,
          width: W,
          maxHeight: `calc(100vh - ${M * 2}px)`,
          overflowY: "auto",
          visibility: pos ? "visible" : "hidden"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {(topItems || []).map((it, i) => (
          <button key={i} className="ctx-item ctx-top" onClick={it.onClick}>{it.label}</button>
        ))}
        <button className="ctx-item" onClick={onCopy}>📋 コピー</button>
        {onEdit && <button className="ctx-item" onClick={onEdit}>✏️ 編集</button>}
        {(extra || []).map((it, i) => (
          <button key={i} className="ctx-item" onClick={it.onClick}>{it.label}</button>
        ))}
        {onDelete && (
          <button className="ctx-item ctx-del" onClick={onDelete}>🗑 削除</button>
        )}
      </div>
    </div>
  );
}
