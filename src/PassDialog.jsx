import { useState } from "react";

/* AI機能の合言葉を聞くダイアログ。入れるのはこの端末で最初の1回だけ */
export default function PassDialog({ wrong, onSubmit, onCancel }) {
  const [value, setValue] = useState("");
  return (
    <div className="overlay" onClick={onCancel}>
      <div className="panel" onClick={(e) => e.stopPropagation()}>
        <h3>🔑 合言葉</h3>
        <div className="wd-bell-note">
          {wrong ? "合言葉がちがうみたい。もう一度入れてね。" : "AIを使う機能の合言葉を入れてね。"}<br />
          このスマホに覚えるので、入れるのは最初の1回だけ。
        </div>
        <input
          className="f-input" type="password" autoFocus autoComplete="off"
          value={value} onChange={(e) => setValue(e.target.value)}
        />
        <div className="panel-btns">
          <button className="p-copy" disabled={!value.trim()} onClick={() => onSubmit(value.trim())}>OK</button>
          <button className="p-close" onClick={onCancel}>もどる</button>
        </div>
      </div>
    </div>
  );
}
