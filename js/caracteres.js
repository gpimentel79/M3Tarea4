cuadro = document.getElementById('caja');
cuadro.addEventListener("keyup", function () {
    var cantidad = cuadro.value.length;
    document.getElementById('cantidad').innerHTML = cantidad;
}
)
