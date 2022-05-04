import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import Movimientostable from '../components/MovimientosTable';
import stateContext from '../context/useContext';

const Index = () => {
    const { saldoActual } = stateContext()
    const [color, setColor] = useState('green')

    useEffect(() => {
        setColor(saldoActual() === 0 ? 'black' : saldoActual() > 0 ? 'green' : 'red')
    }, [saldoActual()]);

    return (
        <div className='p-4'>
            <Col sm={5} xs={12}>
                <Card>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Saldo actual</Card.Subtitle>
                    <Card.Title style={{ color: color }}> {saldoActual()}$ </Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={12} xs={12} className="mb-2">
                <Movimientostable />
            </Col>
        </div>
    );
}

export default Index;
