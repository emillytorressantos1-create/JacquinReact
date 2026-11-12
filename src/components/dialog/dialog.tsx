
import { useState } from 'react';
import './Dialog.css'
import { Button, Modal } from 'react-bootstrap';

 type dialogProps = {
title?: string;
mostrar: boolean;
mensagem: string;
textoConfimar: string;
textoCancelar: string;
aoFechar: () => void;
aoConfirmar: () => void;
}

function Dialog({title,
   mostrar, 
   mensagem = "esta e uma mensagem padrão",
   textoConfimar = "confirmar",
   textoCancelar = "Cancelar",
   aoFechar, 
   aoConfirmar
  } : dialogProps) {
  

  return (
    <>
      <Modal show={mostrar} onHide={aoFechar} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title ? title : "texto padrão"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{mensagem}</Modal.Body>
        <Modal.Footer>
          <Button variant='secundary' onClick={aoFechar}>
           {textoCancelar}
          </Button>
          <Button variant='primary' onClick={aoConfirmar}>
            {textoConfimar}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Dialog;