import { Fragment } from "react";

/* 本文中の http(s) URL をリンクにする（日記・TODOなどで共通利用）。
   - URL以外の部分は highlight（検索ハイライト）を通す
   - リンクのタップで吹き出しの編集モードが開かないよう stopPropagation する
   - URLの終わりは「日本語（かな・漢字・全角記号・。、）が来たら終了」。
     「https://example.com。つづきの文章」で後ろの本文まで飲み込まないため
   - 末尾に付きがちなASCIIの句読点・閉じカッコはリンクに含めない */
const URL_RE = /https?:\/\/[^\s　-〿぀-ヿ一-鿿＀-￯]+/g;
const TAIL_RE = /[.,;:、。）)\]】」』"'！？!?]+$/;

export default function linkify(text, highlight = (t) => t) {
  if (!text) return text;
  const out = [];
  let last = 0, key = 0, m;
  URL_RE.lastIndex = 0;
  while ((m = URL_RE.exec(text))) {
    let url = m[0];
    const tail = (url.match(TAIL_RE) || [""])[0];
    if (tail) url = url.slice(0, url.length - tail.length);
    if (!url) continue;
    if (m.index > last) out.push(<Fragment key={key++}>{highlight(text.slice(last, m.index))}</Fragment>);
    out.push(
      <a
        key={key++} className="body-link" href={url}
        target="_blank" rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
      >{url}</a>
    );
    last = m.index + url.length;
  }
  if (!out.length) return highlight(text);
  if (last < text.length) out.push(<Fragment key={key++}>{highlight(text.slice(last))}</Fragment>);
  return out;
}
