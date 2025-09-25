// Función para contactar
function contactar(propiedad) {
    const telefono = '5551234567'; // Cambia por el número real
    const mensaje = `Hola, me interesa la propiedad: ${propiedad}`;
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, '_system');
}

// Mensaje de bienvenida
console.log('App de Inmobiliaria cargada correctamente');