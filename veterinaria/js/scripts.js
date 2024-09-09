// Validación del formulario de adopción
document.getElementById('formAdopcion').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Solicitud de adopción enviada con éxito');
  });


// Array de mascotas
const mascotas = [
  {
    imagen: 'https://www.adoptanocompres.org/wp-content/uploads/2024/08/Pagina-Web-Caramelo.png',
    nombre: 'Mascota 1',
    descripcion: 'Descripción de la mascota 1',
    species: 'Perro',
    age: 3
  },
  {
    imagen: 'https://www.adoptanocompres.org/wp-content/uploads/2024/08/Pagina-Web-Caramelo.png',
    nombre: 'Mascota 2',
    descripcion: 'Descripción de la mascota 2',
    species: 'Gato',
    age: 2
  },
  {
    imagen: 'https://www.adoptanocompres.org/wp-content/uploads/2024/08/Pagina-Web-Caramelo.png',
    nombre: 'Mascota 2',
    descripcion: 'Descripción de la mascota 2',
    species: 'Gato',
    age: 2
  },
  {
    imagen: 'https://www.adoptanocompres.org/wp-content/uploads/2024/08/Pagina-Web-Caramelo.png',
    nombre: 'Mascota 2',
    descripcion: 'Descripción de la mascota 2',
    species: 'Gato',
    age: 2
  },
  {
    imagen: 'https://www.adoptanocompres.org/wp-content/uploads/2024/08/Pagina-Web-Caramelo.png',
    nombre: 'Mascota 2',
    descripcion: 'Descripción de la mascota 2',
    species: 'Gato',
    age: 2
  },
  {
    imagen: 'https://www.adoptanocompres.org/wp-content/uploads/2024/08/Pagina-Web-Caramelo.png',
    nombre: 'Mascota 2',
    descripcion: 'Descripción de la mascota 2',
    species: 'Gato',
    age: 2
  },
  {
    imagen: 'https://www.adoptanocompres.org/wp-content/uploads/2024/08/Pagina-Web-Caramelo.png',
    nombre: 'Mascota 2',
    descripcion: 'Descripción de la mascota 2',
    species: 'Gato',
    age: 2
  },
  {
    imagen: 'https://www.adoptanocompres.org/wp-content/uploads/2024/08/Pagina-Web-Caramelo.png',
    nombre: 'Mascota 2',
    descripcion: 'Descripción de la mascota 2',
    species: 'Gato',
    age: 2
  },
  
  // Agrega más mascotas aquí...
];

// Función para generar el HTML de una mascota
function createMascotaHTML(mascota) {
  return `
    <div class="col-md-4">
      <div class="card">
        <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
          <img src="${mascota.imagen}" class="card-img-top" alt="${mascota.nombre}">
          <div class="card-body">
            <h5 class="card-title">${mascota.nombre}</h5>
            <p class="card-text">${mascota.descripcion}</p>
            <p>Especie: ${mascota.species}</p>
            <p>Edad: ${mascota.age} años</p>
          </div>
        </div>
      <div/>
    </div>
  `;
}

// Función para cargar el catálogo
function cargarCatalogo() {
  const catalogoElement = document.getElementById('catalogoMascotas');
  catalogoElement.innerHTML = ''; // Limpia el elemento del catálogo

  mascotas.forEach((mascota) => {
    const mascotaHTML = createMascotaHTML(mascota);
    catalogoElement.innerHTML += mascotaHTML;
  });
}

// Carga el catálogo cuando se carga la página
document.addEventListener('DOMContentLoaded', cargarCatalogo);
  
  // Validación del formulario de adopción
  document.getElementById('formAdopcion').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Solicitud de adopción enviada con éxito');
  });
  


// Validación del formulario de adopción
document.getElementById('formAdopcion').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Solicitud de adopción enviada con éxito');
  });
  
  // Validación del formulario de citas y apertura del modal
  document.getElementById('formCitas').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los datos del formulario
    const nombre = document.getElementById('nombreCita').value;
    const email = document.getElementById('emailCita').value;
    const servicio = document.getElementById('servicioCita').value;
    const fecha = document.getElementById('fechaCita').value;
    const hora = document.getElementById('horaCita').value;
  
    // Validar que todos los campos estén completos
    if (nombre && email && servicio && fecha && hora) {
      // Crear el mensaje de confirmación
      const mensajeCita = `
        <strong>Nombre:</strong> ${nombre}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Servicio:</strong> ${servicio}<br>
        <strong>Fecha:</strong> ${fecha}<br>
        <strong>Hora:</strong> ${hora}
      `;
      
      // Insertar el mensaje en el modal
      document.getElementById('detalleCita').innerHTML = mensajeCita;
  
      // Mostrar el modal
      $('#modalCitaConfirmada').modal('show');
    } else {
      alert('Por favor, completa todos los campos antes de enviar.');
    }
  });
  