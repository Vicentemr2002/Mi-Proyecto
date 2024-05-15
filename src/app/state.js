import { createContext } from "react"
import { guardarCarrito, eliminarCarrito } from "../componentes/carrito"


const productsReducer = (state, action) => {
    if (action.type == "SET_PRODUCTOS")
        return { ...state, productos: action.value }

    if (action.type == "INIT_CARRITO") {
        return { ...state, carrito: action.value }
    }

    if (action.type == "ADD_CARRITO") {
        state = {
            ...state, carrito: {
                ...state.carrito, [action.value]: state.carrito[action.value] ?
                    state.carrito[action.value] + 1 : 1,
            }
        }
        guardarCarrito(state.carrito)
        return state
    }

    if (action.type == "REMOVE_CARRITO") {
        state = {
            ...state, carrito: {
                ...state.carrito,
                [action.value]: state.carrito[action.value] - 1
            }
        }
        if (state.carrito[action.value] == 0) delete state.carrito[action.value]
        return state

    }

    if (action.type == "DELETE_CARRITO") {
        eliminarCarrito()
        return { ...state, carrito: {} }
    }
}
const initialState = { productos: null, carrito: null }

const ProductsContext = createContext(null)





export { ProductsContext, productsReducer, initialState }

