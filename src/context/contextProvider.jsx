import { createContext, useState } from "react";

export const stateAppContext = createContext()

export default function StateProvider({ children }) {

    const [movimientos, setMovimientos] = useState([])

    const pushContent = (formData) => {
        const fecha = new Date()
        formData.fecha = fecha.toLocaleDateString()
        setMovimientos([...movimientos, formData])
    }

    const saldoActual = () => {
        let saldo = 0
        movimientos.map(movimiento => {
            if (movimiento.tipo.toLowerCase() === 'ingreso') {
                saldo += Number(movimiento.monto)
            } else {
                saldo -= Number(movimiento.monto)
            }
        })
        return saldo
    }


    const contextValue = {
        movimientos,
        pushContent,
        saldoActual
    }

    return <stateAppContext.Provider value={contextValue}>
        {children}
    </stateAppContext.Provider>
}