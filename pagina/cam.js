/*const colores = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']; 
let colorActual = null; 

function getRandomColor() {
  let newColor = colorActual;
  while (newColor === colorActual) { 
    newColor = colores[Math.floor(Math.random() * colores.length)]; 
  }
  colorActual = newColor; 
  return newColor;
}

document.querySelector('.btn-cambio').addEventListener('click', function() {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor; 
});*/


$(document).ready(function() {
    const coloresNombres = {
        '#ff0000': 'Rojo',
        '#00ff00': 'Verde',
        '#0000ff': 'Azul',
        '#ffff00': 'Amarillo',
        '#ff00ff': 'Magenta',
        '#00ffff': 'Cyan'
    };

    function cambiarFondoYTexto(color) {
        $('body').css('background-color', color);
        $('#color-name').text(coloresNombres[color]);
    }

    $('.btn-cambio').click(function() {
        const colores = Object.keys(coloresNombres);
        let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        cambiarFondoYTexto(colorAleatorio);
    });
});




$(document).ready(function() {
    const coloresHex = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

    function cambiarFondoYTexto2(color) {
        $('body').css('background-color', color);
        $('#color-name').text(color.toUpperCase());
    }

    $('.btn-cambio2').click(function() {
        let colorAleatorio = coloresHex[Math.floor(Math.random() * coloresHex.length)];
        cambiarFondoYTexto2(colorAleatorio);
    });
});



