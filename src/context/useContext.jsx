import { useContext } from "react"
import { stateAppContext } from "./contextProvider"

export default function useStateApp() {
    return useContext(stateAppContext)
}