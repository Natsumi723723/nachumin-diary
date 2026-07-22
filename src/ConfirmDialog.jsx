/* 削除などの確認ダイアログ。毎回はい/いいえを聞く。 */
export default function ConfirmDialog({ message, confirmLabel = "削除する", onConfirm, onCancel }) {
  return (
    <div className="overlay confirm-over" onClick={onCancel}>
      <div className="panel confirm-panel" onClick={(e) => e.stopPropagation()}>
        <div className="confirm-msg">{message}</div>
        <div className="panel-btns">
          <button className="p-close" onClick={onCancel}>キャンセル</button>
          <button className="p-del arm" onClick={onConfirm}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  );
}
