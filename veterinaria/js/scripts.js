// Mostrar y ocultar popup de contacto
document.getElementById('contactBtn').addEventListener('click', function() {
  document.getElementById('contactPopup').style.display = 'block';
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
  document.getElementById('contactPopup').style.display = 'none';
});


// Mostrar el popup de contacto
document.getElementById("contactBtn").addEventListener("click", function() {
  document.getElementById("contactPopup").style.display = "block";
});
// Cerrar el popup de contacto
document.getElementById("closePopupBtn").addEventListener("click", function() {
  document.getElementById("contactPopup").style.display = "none";
});

$('#loginBtn').click(function() {
  $('#loginModal').modal('show');
});



// Array de colores para la navbar
const colors = ['#64cce3', '#D291E3', '#7AD0E4', '#E3A064;', '#b7e36f','#B7E36F;'];
let currentColorIndex = 0;

function changeNavbarColor() {
  document.getElementById('navbar').style.opacity = 0;
  setTimeout(() => {
    document.getElementById('navbar').style.backgroundColor = colors[currentColorIndex];
    document.getElementById('navbar').style.opacity = 1;
  }, 500);
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

 // Cambiar el color cada 3 segundos
 setInterval(changeNavbarColor, 3000);

 // Cambiar al primer color inmediatamente
 changeNavbarColor();


document.querySelectorAll('.pet-card').forEach(function(card) {
  card.addEventListener('mouseover', function() {
      card.querySelector('.hidden-description').style.display = 'block';
  });
  card.addEventListener('mouseout', function() {
      card.querySelector('.hidden-description').style.display = 'none';
  });
});



