let currentInput = "0";
let firstNumber = null;
let operation = null;

function press(value) {

    if (currentInput === '0') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    document.getElementById('display').value = currentInput;
    console.log(currentInput);
}
function calculate() {

    try {
        let result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();
    } catch {
        document.getElementById('display').value = 'Error';
        currentInput = '0';
    }
    console.log(currentInput);
}

function clearDisplay() {
    currentInput = '0';
    document.getElementById('display').value = currentInput;
}

//llama todos los botosnes de la calculadora

const calculatorButtons = document.querySelectorAll('.calc-btn');

// agrega "click" listeners  para cada boton
calculatorButtons.forEach(button => {
  console.log(calculatorButtons)
  button.addEventListener('click', ()=> {

    //trae el valor de button data-value
    const value = button.dataset.value;
    
    // decide que funcion llamar basada en el valor del boton
    if (value === '=') {
      calculate(); //llama la funcion calcular
    }else if (value === 'C') {
      clearDisplay(); //llama la funcion de limpiar
    }else if (value === 'del') {
      //por si me urge agregar luego el boton de borrar un valor unico
    }
    else {
      //para numeros y operadores, llama la funcion "press" con el valor del boton
      press(value);
    }
    });
});

document.body.addEventListener('keydown', function(event) {

//El document es el elemento que contiene todos los elementos de la pagina y se agrega el body para que se pueda acceder a los botones dentro de la pagina
//ordenamos que los botos dentro de la seccion body en el html se ejecuten cuando se presione una tecla y esto se reflejara en el navegador
//keydown es el evento que se activa cuando se presiona una tecla
// listenerFunction es la funcion que se ejecutara cuando se presione una tecla
// no le damos nombre a la funcion, mas agregamos directamente la funcion dentro de este parametro para que nos redireccione de igual manera los eventos clicados

    //logica para tomar los eventos proporcionados por keydown
    const key = event.key;
    //usamos const para reclarar en este caso ya que la variable no planeamos que cambie su parametro
    let button;

    switch (key)  {
      //usamos switch para adjuntar todas las variables sin la necesidad de agregar constantemente el if-else en este caso de la calculadora
      case '0': //nos especifica que el valor para comparar debe ser igual entonces se bloqueara en ese boton.
        button = document.querySelector('.calc-btn[data-value="0"]');
        break;
      case '1':
        button = document.querySelector('.calc-btn[data-value="1"]');
        break; 
      case '2':
        button = document.querySelector('.calc-btn[data-value="2"]');
        break; 
      case '3':
        button = document.querySelector('.calc-btn[data-value="3"]');
        break; 
      case '4':
        button = document.querySelector('.calc-btn[data-value="4"]');
        break; 
      case '5':
        button = document.querySelector('.calc-btn[data-value="5"]');
        break; 
      case '6':
        button = document.querySelector('.calc-btn[data-value="6"]');
        break; 
      case '7':
        button = document.querySelector('.calc-btn[data-value="7"]');
        break; 
      case '8':
        button = document.querySelector('.calc-btn[data-value="8"]');
        break; 
      case '9':
        button = document.querySelector('.calc-btn[data-value="9"]');
        break; 
      case '+':
        button = document.querySelector('.calc-btn[data-value="+"]');
        break; 
      case '-':
        button = document.querySelector('.calc-btn[data-value="-"]');
        break; 
      case '*':
      case 'x':
        button = document.querySelector('.calc-btn[data-value="*"]');
        break; 
      case '/':
        button = document.querySelector('.calc-btn[data-value="/"]');
        break; 
      case 'Enter':
      case '=':
        button = document.querySelector('.calc-btn[data-value="="]');
        break;
      case 'Escape':
      case 'c':
        button = document.querySelector('.calc-btn[data-value="C"]');
        break;
      case 'Backspace': // Added case for Backspace
        // Assuming your delete button will have data-value="del"
        button = document.querySelector('.calc-btn[data-value="del"]');
        break;  
      
    }

    if (button) {
      button.click(); // This triggers the addEventListener we added above
      event.preventDefault(); // Prevent default browser actions for keys like Enter
    }

  });
