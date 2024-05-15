'use client'
import { getFirestore, query, collection, onSnapshot } from "firebase/firestore";
import { useEffect, useReducer } from 'react'
import app from "../../firebase";
import { ProductsContext, initialState, productsReducer } from "./state";
import { obtenerCarrito } from "../componentes/carrito";

const StateProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productsReducer, initialState);
    useEffect(function() {
        dispatch({ type: "INIT_CARRITO", value: obtenerCarrito() })

        const db = getFirestore(app);
        const q = query(collection(db, "productos"))
        const unsub = onSnapshot(q, (snap) => {
            const productosLimpios = snap.docs.map(element => {
                return {
                    id: element.id,
                    ...element.data()
                }

            });
            dispatch({ type: "SET_PRODUCTOS", value: productosLimpios });

        });
        return () => unsub();
    }, [])

    return <ProductsContext.Provider value={{ state, dispatch }}>
        {children}
    </ProductsContext.Provider>
}

export default StateProvider
