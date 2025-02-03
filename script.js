document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente.");

    // Obtener todos los elementos li dentro de la sección "servicios"
    const cursosList = document.querySelectorAll("#servicios ul li.curso");

    // Añadir evento de clic a cada li
    cursosList.forEach(curso => {
        curso.addEventListener("click", function() {
            // Alternar la clase 'active' para mostrar u ocultar la información
            this.classList.toggle("active");
        });
    });
});
