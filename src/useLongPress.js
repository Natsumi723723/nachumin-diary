import { useRef } from "react";

/* スマホの長押し(既定500ms)でコールバック。スクロールでは誤発火しない。
   直後のクリックを抑制する onClickCapture 付き。右クリックにも対応。
   返り値をそのまま吹き出し要素へ spread する。 */
export default function useLongPress(onLongPress, ms = 500) {
  const s = useRef({});

  const start = (e) => {
    if (typeof onLongPress !== "function") return;
    if (e.touches && e.touches.length !== 1) return;
    const t = e.touches ? e.touches[0] : e;
    s.current.x = t.clientX;
    s.current.y = t.clientY;
    s.current.fired = false;
    clearTimeout(s.current.timer);
    s.current.timer = setTimeout(() => {
      s.current.fired = true;
      try { navigator.vibrate && navigator.vibrate(15); } catch (err) { /* noop */ }
      onLongPress({ x: s.current.x, y: s.current.y });
    }, ms);
  };

  const move = (e) => {
    const t = e.touches ? e.touches[0] : e;
    if (Math.abs(t.clientX - s.current.x) > 10 || Math.abs(t.clientY - s.current.y) > 10) {
      clearTimeout(s.current.timer);
    }
  };

  const end = () => clearTimeout(s.current.timer);

  return {
    onTouchStart: start,
    onTouchMove: move,
    onTouchEnd: end,
    onTouchCancel: end,
    onContextMenu: (e) => {
      if (typeof onLongPress !== "function") return;
      e.preventDefault();
      onLongPress({ x: e.clientX, y: e.clientY });
    },
    onClickCapture: (e) => {
      if (s.current.fired) { e.stopPropagation(); e.preventDefault(); s.current.fired = false; }
    }
  };
}
