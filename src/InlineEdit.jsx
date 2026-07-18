import { useState, useRef, useEffect } from "react";
import MarkBar, { insertAtCursor } from "./MarkBar.jsx";

/* 吹き出しの中でそのまま編集するエディタ。
   保存/キャンセル/削除(2段階) 付き。marks を渡すとマークバーも出す。 */
export default function InlineEdit({
  initial, appendNewline, marks, onEditMarks,
  onSave, onCancel, onDelete, placeholder
}) {
  const [draft, setDraft] = useState(
    appendNewline ? (initial ? initial + "\n" : "") : (initial || "")
  );
  const [armDel, setArmDel] = useState(false);
  const ref = useRef(null);

  const resize = () => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, Math.round(window.innerHeight * 0.5)) + "px";
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.focus();
    resize();
    const end = el.value.length;
    el.setSelectionRange(end, end);
    el.scrollTop = el.scrollHeight;
  }, []);

  return (
    <div className="inline-edit" onClick={(e) => e.stopPropagation()}>
      {marks && (
        <MarkBar
          marks={marks}
          onInsert={(m) =>
            insertAtCursor(ref.current, m + " ", (v) => {
              setDraft(v);
              requestAnimationFrame(resize);
            })
          }
          onEdit={onEditMarks}
        />
      )}
      <textarea
        ref={ref}
        className="inline-ta"
        value={draft}
        placeholder={placeholder}
        onChange={(e) => { setDraft(e.target.value); resize(); }}
      />
      <div className="inline-btns">
        <button className="ie-save" onClick={() => onSave(draft)}>保存</button>
        <button className="ie-cancel" onClick={onCancel}>キャンセル</button>
        {onDelete && (
          <button
            className={"ie-del" + (armDel ? " arm" : "")}
            onClick={() => { if (!armDel) { setArmDel(true); return; } onDelete(); }}
          >{armDel ? "ほんとに削除" : "削除"}</button>
        )}
      </div>
    </div>
  );
}
