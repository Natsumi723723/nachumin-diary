import useLongPress from "./useLongPress.js";

/* 長押しメニュー対応の吹き出しラッパー。onLongPress({x,y}) を受け取る。
   その他の props(className/style/onClick/role等)はそのまま div へ渡す。 */
export default function Pressable({ onLongPress, longPressMs, children, ...rest }) {
  const lp = useLongPress(onLongPress, longPressMs);
  return (
    <div {...rest} {...lp}>
      {children}
    </div>
  );
}
