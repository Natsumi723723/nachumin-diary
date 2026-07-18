import { useState, useEffect } from "react";

/* キーボード表示中に、要素をキーボード直上に固定するためのオフセット(px)を返す。
   visualViewport で可視領域の下端を追う。非対応環境では常に 0。 */
export default function useKbGap(active = true) {
  const [gap, setGap] = useState(0);
  useEffect(() => {
    if (!active || !window.visualViewport) {
      setGap(0);
      return;
    }
    const vv = window.visualViewport;
    const update = () => setGap(Math.max(0, window.innerHeight - vv.height - vv.offsetTop));
    update();
    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);
    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
    };
  }, [active]);
  return gap;
}
