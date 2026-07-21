import { useState } from "react";

/* 長押しで出す小さなメニュー。コピー/編集/(任意の追加項目)/削除(2段階)。 */
export default function ContextMenu({ x, y, onCopy, onEdit, onDelete, onClose, extra }) {
  const [armDel, setArmDel] = useState(false);
  const W = 168;
  const left = Math.max(8, Math.min(x - W / 2, window.innerWidth - W - 8));
  const top = Math.max(8, Math.min(y + 8, window.innerHeight - 190));
  return (
    <div className="ctx-overlay" onClick={onClose} onContextMenu={(e) => e.preventDefault()}>
      <div className="ctx-menu" style={{ left, top, width: W }} onClick={(e) => e.stopPropagation()}>
        <button className="ctx-item" onClick={onCopy}>📋 コピー</button>
        {onEdit && <button className="ctx-item" onClick={onEdit}>✏️ 編集</button>}
        {(extra || []).map((it, i) => (
          <button key={i} className="ctx-item" onClick={it.onClick}>{it.label}</button>
        ))}
        {onDelete && (
          <button
            className={"ctx-item ctx-del" + (armDel ? " arm" : "")}
            onClick={() => { if (!armDel) { setArmDel(true); return; } onDelete(); }}
          >🗑 {armDel ? "ほんとに削除" : "削除"}</button>
        )}
      </div>
    </div>
  );
}
