"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import z from "zod";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}


export const ManualTriggerDialog = ({ open, onOpenChange }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Manual Trigger</DialogTitle>
          <DialogDescription>
            Configure settings for manual trigger node.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Manual Trigger</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
