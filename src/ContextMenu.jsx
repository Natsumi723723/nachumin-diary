/* 長押しで出す小さなメニュー。(先頭項目)/コピー/編集/(任意の追加項目)/削除。
   削除は onDelete を1回呼ぶ（確認は呼び出し側でダイアログ表示）。 */
export default function ContextMenu({ x, y, onCopy, onEdit, onDelete, onClose, top: topItems, extra }) {
  const W = 168;
  const left = Math.max(8, Math.min(x - W / 2, window.innerWidth - W - 8));
  const posTop = Math.max(8, Math.min(y + 8, window.innerHeight - 190));
  return (
    <div className="ctx-overlay" onClick={onClose} onContextMenu={(e) => e.preventDefault()}>
      <div className="ctx-menu" style={{ left, top: posTop, width: W }} onClick={(e) => e.stopPropagation()}>
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
