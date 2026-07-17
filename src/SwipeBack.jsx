import { useRef, useState } from "react";

/* 左端からの右スワイプで戻る（LINE風）。
   指に追従してスライドし、一定量スワイプで onBack。 */
export default function SwipeBack({ onBack, children }) {
  const [dx, setDx] = useState(0);
  const [anim, setAnim] = useState(false);
  const start = useRef(null);
  const active = useRef(false);

  const onTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    if (document.querySelector(".overlay")) return; // モーダル表示中は無効
    const t = e.touches[0];
    if (t.clientX > 28) return; // 画面左端からのみ開始
    start.current = { x: t.clientX, y: t.clientY };
    active.current = false;
  };

  const onTouchMove = (e) => {
    if (!start.current) return;
    const t = e.touches[0];
    const ddx = t.clientX - start.current.x;
    const ddy = t.clientY - start.current.y;
    if (!active.current) {
      if (Math.abs(ddx) < 8 && Math.abs(ddy) < 8) return;
      if (Math.abs(ddy) > Math.abs(ddx)) {
        start.current = null; // 縦方向の動き→スクロールに譲る
        return;
      }
      active.current = true;
      setAnim(false);
    }
    setDx(Math.max(0, ddx));
  };

  const onTouchEnd = () => {
    if (!start.current) return;
    const threshold = Math.min(110, window.innerWidth * 0.3);
    setAnim(true);
    if (active.current && dx > threshold) {
      setDx(window.innerWidth); // 画面外へ送ってから戻る
      setTimeout(onBack, 190);
    } else {
      setDx(0); // 足りなければ元に戻す
    }
    start.current = null;
    active.current = false;
  };

  const style =
    dx > 0
      ? {
          transform: `translateX(${dx}px)`,
          transition: anim ? "transform .19s ease-out" : "none",
          boxShadow: "-10px 0 26px rgba(120,50,90,.18)"
        }
      : undefined;

  return (
    <div
      className="swipe-wrap"
      style={style}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {children}
    </div>
  );
}
