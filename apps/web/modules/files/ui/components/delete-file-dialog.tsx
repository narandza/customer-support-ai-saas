"use client";

import { useMutation } from "convex/react";
import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { Dialog } from "@workspace/ui/components/dialog";
import { api } from "@workspace/backend/_generated/api";
import { PublicFile } from "@workspace/backend/private/files";

interface DeleteFileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  file: PublicFile | null;
  onDeleted?: () => void;
}

export const DeleteFileDialog = ({
  open,
  onOpenChange,
  file,
  onDeleted,
}: DeleteFileDialogProps) => {
  const deleteFile = useMutation(api.private.files.deleteFile);
  const [isDeleting, setIsDeleting] = useState(false);

  return <div className="">Delete file dialog</div>;
};
