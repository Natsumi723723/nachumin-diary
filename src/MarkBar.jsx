/* テキストエリアのカーソル位置に文字列を挿入し、カーソルを進める */
export function insertAtCursor(el, text, setValue) {
  if (!el) return;
  const s = el.selectionStart ?? el.value.length;
  const e = el.selectionEnd ?? el.value.length;
  const nv = el.value.slice(0, s) + text + el.value.slice(e);
  setValue(nv);
  requestAnimationFrame(() => {
    try {
      el.focus();
      const p = s + text.length;
      el.setSelectionRange(p, p);
    } catch (err) {
      /* ignore */
    }
  });
}

/* 箇条書きマークのワンタップ挿入バー */
export default function MarkBar({ marks, onInsert, onEdit }) {
  return (
    <div className="markbar">
      {marks.map((m, i) => (
        <button
          key={i}
          className="markchip"
          onMouseDown={(e) => e.preventDefault()} // フォーカスを奪わない
          onClick={() => onInsert(m)}
        >
          {m}
        </button>
      ))}
      <button
        className="markchip mark-edit"
        onMouseDown={(e) => e.preventDefault()}
        onClick={onEdit}
        aria-label="マークを編集"
      >⚙︎</button>
    </div>
  );
}
