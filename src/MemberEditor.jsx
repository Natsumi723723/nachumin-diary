import { useState } from "react";
import { uid } from "./format.js";
import { PALETTE } from "./theme.js";
import { MIcon } from "./TalkRoom.jsx";

/* メンバー（人格）の登録・編集モーダル。トーク型・だれログ型で共用 */
export default function MemberEditor({ members, onChange, onClose, showToast }) {
  const [page, setPage] = useState("list"); // 'list' | 'form'
  const [member, setMember] = useState(null);
  const [isNew, setIsNew] = useState(false);
  const [memDel, setMemDel] = useState(false);

  const openNew = () => {
    setMember({
      id: uid(), name: "",
      color: PALETTE[members.length % PALETTE.length],
      icon: { type: "emoji", value: "💗" },
      side: members.length % 2 === 0 ? "left" : "right"
    });
    setIsNew(true);
    setMemDel(false);
    setPage("form");
  };

  const openEdit = (m) => {
    setMember({ ...m });
    setIsNew(false);
    setMemDel(false);
    setPage("form");
  };

  const save = () => {
    if (!member.name.trim()) {
      showToast("名前を入れてね");
      return;
    }
    const cleaned = { ...member, name: member.name.trim() };
    onChange(isNew ? [...members, cleaned] : members.map((x) => (x.id === cleaned.id ? cleaned : x)));
    setPage("list");
  };

  const del = () => {
    if (!memDel) {
      setMemDel(true);
      return;
    }
    onChange(members.filter((x) => x.id !== member.id));
    setMemDel(false);
    setPage("list");
  };

  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= members.length) return;
    const next = [...members];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  const onIconFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const img = new Image();
    img.onload = () => {
      const S = 96;
      const c = document.createElement("canvas");
      c.width = S;
      c.height = S;
      const ctx = c.getContext("2d");
      const s = Math.max(S / img.width, S / img.height);
      ctx.drawImage(img, (S - img.width * s) / 2, (S - img.height * s) / 2, img.width * s, img.height * s);
      setMember((o) => ({ ...o, icon: { type: "image", value: c.toDataURL("image/jpeg", 0.85) } }));
      URL.revokeObjectURL(img.src);
    };
    img.onerror = () => showToast("画像を読み込めませんでした");
    img.src = URL.createObjectURL(f);
    e.target.value = "";
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="panel" onClick={(e) => e.stopPropagation()}>
        {page === "list" ? (
          <>
            <h3>👥 メンバー（{members.length}人）</h3>
            {members.length === 0 && <p className="panel-note">まだメンバーがいません。追加してね💗</p>}
            {members.map((m, i) => (
              <div className="mem-row" key={m.id}>
                <MIcon icon={m.icon} size={30} color={m.color} />
                <span className="mem-name">{m.name}</span>
                <span className="mem-dot" style={{ background: m.color }} />
                <button className="mem-btn" disabled={i === 0} onClick={() => move(i, -1)} aria-label="上へ">↑</button>
                <button className="mem-btn" disabled={i === members.length - 1} onClick={() => move(i, 1)} aria-label="下へ">↓</button>
                <button className="mem-btn" onClick={() => openEdit(m)} aria-label="編集">✏️</button>
              </div>
            ))}
            <div className="panel-btns">
              <button className="p-copy" onClick={openNew}>＋ 新しいメンバー</button>
              <button className="p-close" onClick={onClose}>閉じる</button>
            </div>
          </>
        ) : (
          <>
            <h3>{isNew ? "＋ メンバー追加" : "✏️ メンバー編集"}</h3>
            <div className="f-label">名前</div>
            <input
              className="f-input" autoFocus={isNew}
              placeholder="ヒカルくん" value={member.name}
              onChange={(e) => setMember((o) => ({ ...o, name: e.target.value }))}
            />
            <div className="f-label">アイコン</div>
            <div className="icon-preview">
              <MIcon icon={member.icon} size={44} color={member.color} />
              <input
                className="f-input" style={{ width: 90, textAlign: "center" }}
                maxLength={8} placeholder="絵文字"
                value={member.icon.type === "emoji" ? member.icon.value : ""}
                onChange={(e) => setMember((o) => ({ ...o, icon: { type: "emoji", value: e.target.value } }))}
              />
              <label className="upload-btn">
                📷 画像
                <input type="file" accept="image/*" onChange={onIconFile} />
              </label>
            </div>
            <div className="f-label">色</div>
            <div className="swatches">
              {PALETTE.map((c) => (
                <button
                  key={c}
                  className={"swatch" + (member.color === c ? " on" : "")}
                  style={{ background: c }}
                  onClick={() => setMember((o) => ({ ...o, color: c }))}
                  aria-label={c}
                />
              ))}
            </div>
            <div className="panel-btns">
              <button className="p-copy" onClick={save}>保存</button>
              {!isNew && (
                <button className={"p-del" + (memDel ? " arm" : "")} onClick={del}>
                  {memDel ? "ほんとに削除" : "削除"}
                </button>
              )}
              <button className="p-close" onClick={() => setPage("list")}>もどる</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
