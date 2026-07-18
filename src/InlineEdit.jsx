import { useState, useRef, useEffect } from "react";
import MarkBar, { insertAtCursor } from "./MarkBar.jsx";

/* 吹き出しの中でそのまま編集するエディタ。
   bottomToolbar=true のとき、マークバー＋操作ボタンをキーボード直上に固定表示する。 */
export default function InlineEdit({
  initial, appendNewline, marks, onEditMarks,
  onSave, onCancel, onDelete, placeholder, bottomToolbar
}) {
  const [draft, setDraft] = useState(
    appendNewline ? (initial ? initial + "\n" : "") : (initial || "")
  );
  const [armDel, setArmDel] = useState(false);
  const [kbGap, setKbGap] = useState(0);
  const ref = useRef(null);

  const resize = () => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, Math.round(window.innerHeight * 0.42)) + "px";
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

  // キーボード直上に固定するためのオフセット（キーボードに隠れない）
  useEffect(() => {
    if (!bottomToolbar || !window.visualViewport) return;
    const vv = window.visualViewport;
    const update = () => setKbGap(Math.max(0, window.innerHeight - vv.height - vv.offsetTop));
    update();
    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);
    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
    };
  }, [bottomToolbar]);

  const insert = (m) =>
    insertAtCursor(ref.current, m + " ", (v) => {
      setDraft(v);
      requestAnimationFrame(resize);
    });

  const markbar = marks ? (
    <MarkBar marks={marks} onInsert={insert} onEdit={onEditMarks} />
  ) : null;

  const buttons = (
    <div className="inline-btns">
      {onDelete && (
        <button
          className={"ie-del" + (armDel ? " arm" : "")}
          onClick={() => { if (!armDel) { setArmDel(true); return; } onDelete(); }}
        >{armDel ? "ほんとに削除" : "削除"}</button>
      )}
      <button className="ie-cancel" onClick={onCancel}>キャンセル</button>
      <button className="ie-save" onClick={() => onSave(draft)} aria-label="保存">💌</button>
    </div>
  );

  return (
    <div className="inline-edit" onClick={(e) => e.stopPropagation()}>
      {!bottomToolbar && markbar}
      <textarea
        ref={ref}
        className="inline-ta"
        value={draft}
        placeholder={placeholder}
        onChange={(e) => { setDraft(e.target.value); resize(); }}
      />
      {bottomToolbar ? (
        <div className="edit-toolbar" style={{ bottom: kbGap }} onClick={(e) => e.stopPropagation()}>
          {markbar}
          {buttons}
        </div>
      ) : (
        buttons
      )}
    </div>
  );
}
