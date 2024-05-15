function obtenerCarrito() {
    try {
        const carritoGuardado = localStorage.getItem('carrito');

        return carritoGuardado ? JSON.parse(carritoGuardado) : {};
    } catch (error) {
        return {};
    }
}

function guardarCarrito(carrito) {
    let str = JSON.stringify(carrito)
    localStorage.setItem("carrito", str)
}

function eliminarCarrito() {
    localStorage.removeItem("carrito")
}

export { obtenerCarrito, guardarCarrito, eliminarCarrito }
