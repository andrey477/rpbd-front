import React from 'react';
import {Dialog, DialogTitle} from "@material-ui/core";

interface Props {
  title: string;
  open: boolean;
  handleClose: () => void;
}

export const Modal: React.FC<Props> = ({
  open,
  title,
  handleClose,
  children
}) => {

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        {children}
      </Dialog>
    </div>
  );
}