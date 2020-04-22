import { useCallback, useState } from "react";

export function useDialogVisibleState(): [boolean, () => void, () => void] {
  const [isVisible, changeDialogVisible] = useState(false);
  const openDialog = useCallback(() => changeDialogVisible(true), [
    changeDialogVisible,
  ]);
  const closeDialog = useCallback(() => changeDialogVisible(false), [
    changeDialogVisible,
  ]);
  return [isVisible, openDialog, closeDialog];
}
