import {useState} from "react";


export function useDeleteOpen() {
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const updateDeleteOpen = () => setDeleteOpen(!deleteOpen);

  return {deleteOpen, setDeleteOpen, updateDeleteOpen};
}


export function useOpen() {
  const [open, setOpen] = useState<boolean>(false);
  const updateOpen = () => setOpen(!open);

  return {open, setOpen, updateOpen};
}


