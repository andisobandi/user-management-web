import React from "react";

export function DialogRoot({ open, onOpenChange, children }) {
  return open ? (
    <div data-testid="dialog-root">
      <button
        data-testid="close-dialog"
        onClick={() => onOpenChange({ open: false })}
        aria-label="Close dialog"
      />
      {children}
    </div>
  ) : null;
}

export function DialogContent({ children }) {
  return <div>{children}</div>;
}
export function DialogHeader({ children }) {
  return <div>{children}</div>;
}
export function DialogTitle({ children }) {
  return <h2>{children}</h2>;
}
export function DialogBody({ children }) {
  return <div>{children}</div>;
}
export function DialogFooter({ children }) {
  return <div>{children}</div>;
}
export function DialogActionTrigger() {
  return <button data-testid="cancel-button">Cancel</button>;
}
export function DialogCloseTrigger() {
  return <button data-testid="dialog-close" aria-label="Close dialog" />;
}
