import React, { useState } from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'

export default function FormMovimiento({ handleClose, show, save }) {

    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        tipo: 'Ingreso',
        descripcion: null,
        monto: null,
        fecha: null
    })

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            save(formData)
            handleClose()
        }
        setValidated(true);
    };

    const options = [
        { value: 'Ingreso', label: 'Ingreso' },
        { value: 'Gasto', label: 'Gasto' }
    ]

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
            <Modal.Title>Registrar Movimiento</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formTipoMovimiento">
                        <Form.Label>Tipo de Movimiento</Form.Label>
                        <Form.Select
                            className="text-muted"
                            onChange={(e) => setFormData({...formData, tipo: e.target.value})}
                        >
                            {
                                options.map((option, index) => {
                                    return (
                                        <option key={index} value={option.value}>{option.label}</option>
                                    )}
                                )
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDescripcion">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            rows="3"
                            placeholder="Descripcion"
                            onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMonto">
                        <Form.Label>Monto</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Monto"
                            onChange={(e) => setFormData({...formData, monto: e.target.value})}
                        />
                    </Form.Group>
                    <Col sm={12} className="d-flex justify-content-end gap-3">
                        <Button variant="secondary" onClick={handleClose} style={{ width: 100 }}>Cerrar</Button>
                        <Button type="submit" style={{ width: 150 }}>Guardar</Button>
                    </Col>
                </Form>
            </Modal.Body>
        </Modal>
    )
}
