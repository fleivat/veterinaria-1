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