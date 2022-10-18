import React from 'react'
import { Modal } from "semantic-ui-react"
import "./ModalBasic.scss";

export function ModalBasic(props) {
    const {show, size, children, onClose, title } = props;
  return (
    <Modal classname="modal-basic" 
    open={show} 
    onClose= {onClose} 
    size={size}>
        {title && <Modal.Header>{title}</Modal.Header>}
        <Modal.Content>{children}</Modal.Content>
    </Modal>
  )
}

ModalBasic.defaultProps = {
    size: "tiny",
};
