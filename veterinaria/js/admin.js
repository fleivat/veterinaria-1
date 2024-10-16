// Obtener la tabla de mascotas
const mascotasTbody = document.getElementById('mascotas-tbody');

// Obtener el formulario para agregar mascota
const agregarMascotaForm = document.getElementById('agregar-mascota-form');

// Obtener el formulario para modificar mascota
const modificarMascotaForm = document.getElementById('modificar-mascota-form');

// Obtener el botón para agregar mascota
const agregarMascotaBtn = document.getElementById('agregar-mascota');

// Agregar evento de clic al botón para agregar mascota
agregarMascotaBtn.addEventListener('click', () => {
    agregarMascotaForm.style.display = 'block';
});

// Agregar evento de submit al formulario para agregar mascota
agregarMascotaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const especie = document.getElementById('especie').value;
    const edad = document.getElementById('edad').value;
    const foto = document.getElementById('foto').files[0];

    // Agregar la mascota a la tabla
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${especie}</td>
        <td>${edad}</td>
        <td><img src="${URL.createObjectURL(foto)}" width="50" height="50"></td>
        <td>
            <button class="btn btn-primary" onclick="modificarMascota(${fila.rowIndex})">Modificar</button>
            <button class="btn btn-danger" onclick="eliminarMascota(${fila.rowIndex})">Eliminar</button>
        </td>
    `;
    mascotasTbody.appendChild(fila);

    // Ocultar el formulario para agregar mascota
    agregarMascotaForm.style.display = 'none';
});

// Función para modificar mascota
function modificarMascota(index) {
    const fila = mascotasTbody.rows[index];
    const nombre = fila.cells[0].textContent;
    const especie = fila.cells[1].textContent;
    const edad = fila.cells[2].textContent;

    // Mostrar el formulario para modificar mascota
    modificarMascotaForm.style.display = 'block';

    // Rellenar el formulario con los datos de la mascota
    document.getElementById('nombre-modificar').value = nombre;
    document.getElementById('especie-modificar').value = especie;
    document.getElementById('edad-modificar').value = edad;

    // Agregar evento de submit al formulario para modificar mascota
    modificarMascotaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nuevoNombre = document.getElementById('nombre-modificar').value;
        const nuevaEspecie = document.getElementById('especie-modificar').value;
        const nuevaEdad = document.getElementById('edad-modificar').value;
        const nuevaFoto = document.getElementById('foto-modificar').files[0];

        // Modificar la mascota en la tabla
        fila.cells[0].textContent = nuevoNombre;
        fila.cells[1].textContent = nuevaEspecie;
        fila.cells[2].textContent = nuevaEdad;
        fila.cells[3].innerHTML = `<img src="${URL.createObjectURL(nuevaFoto)}" width="50" height="50">`;

        // Ocultar el formulario para modificar mascota
        modificarMascotaForm.style.display = 'none';
    });
}

// Función para eliminar mascota
function eliminarMascota(index) {
    const fila = mascotasTbody.rows[index];
    mascotasTbody.deleteRow(index);
}