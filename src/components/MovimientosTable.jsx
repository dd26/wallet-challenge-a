import React, { useState } from 'react';
import { Table, Button, Col } from 'react-bootstrap';
import stateContext from '../context/useContext';
import FormMovimiento from './FormMovimiento';

const Movimientostable = () => {
    const { movimientos, pushContent } = stateContext()

    const [ show, setShow ] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (formData) => {
        pushContent(formData)
    }

    return (
        <div className="mt-2">
            <Col sm={12} className="d-flex justify-content-end">
                <Button variant="primary" size="sm" className="mb-2" onClick={handleShow}>
                    <i className="bi bi-plus-circle"></i>
                    Registrar
                </Button>
            </Col>
            {
                show && <FormMovimiento show={show} handleClose={handleClose} save={handleSubmit} />
            }
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tipo</th>
                        <th>Fecha</th>
                        <th>Descripcion</th>
                        <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movimientos.map((movimiento, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{movimiento.tipo}</td>
                                    <td>{movimiento.fecha}</td>
                                    <td>{movimiento.descripcion}</td>
                                    <td>${movimiento.monto}</td>
                                </tr>
                            )
                        }).reverse()
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Movimientostable;
