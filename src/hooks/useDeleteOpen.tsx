import {useState} from "react";


export function useDeleteOpen() {
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const updateDeleteOpen = () => setDeleteOpen(!deleteOpen);

  return {deleteOpen, setDeleteOpen, updateDeleteOpen};
}