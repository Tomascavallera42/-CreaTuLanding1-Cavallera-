# Tomas Cavallera

Este proyecto es una aplicación web tipo e-commerce desarrollada con React.js, que simula la contratación de servicios profesionales de fumigación y desinfección. Está pensado como una plataforma para que los usuarios puedan explorar distintos servicios, ver sus detalles, y agregarlos a un carrito para simular una compra o reserva.

## Funcionalidades principales:

✅ Listado de servicios: Muestra una galería de servicios obtenidos desde Firebase (por ejemplo, "Fumigación", "Desinfección", etc.), cada uno con imagen, descripción, precio y categoría.

🛒 Carrito de compras:

Agregar servicios con cantidad deseada.

Ver resumen con imagen, nombre, precio unitario, cantidad y total por servicio.

Calcular el precio total del carrito.

Eliminar servicios individuales o vaciar todo el carrito.

📄 Vista de detalle: Al hacer clic en un servicio, se accede a una página con información más detallada.

🔥 Persistencia en Firebase Firestore: Los servicios se cargan desde una colección llamada services, permitiendo una administración sencilla y escalable desde el backend.

☁️ Contexto global con React Context API: El estado del carrito está manejado con CartContext, para que esté disponible en toda la aplicación.

🔢 Componente contador (ItemCount): Permite elegir la cantidad de servicios antes de añadir al carrito.

💻 Diseño modular y reutilizable: Componentes separados por responsabilidad para mantener un código claro y escalable.

## Tecnologías utilizadas:
⚛️ React.js (con hooks)

💡 Context API para el carrito

🔥 Firebase Firestore (para el backend de datos)

🖼️ HTML + CSS + JavaScript moderno (ES6+)

📦 Vite o Create React App (según la configuración del entorno)

