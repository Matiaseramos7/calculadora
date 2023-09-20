const $input = document.querySelector('input')
const $buttonElement = document.getElementById("buttonCE");
const $buttons = document.getElementsByClassName('buttons')

//Al tocar el boton CE, se limpia el input
$buttonElement.addEventListener('click', () => {
    $input.value = ''
});

//Boton que se toca, se agrega

function agregarNumero(boton) {
    $input.value += boton
}

function agregarOperador(operador) {
    $input.value += operador;
}

function agregarPunto() {
    if ($input.value === '' || $input.value.includes('.')) {
        return;
    }
    $input.value += '.'; 
}

function calcular() {
    try {
        $input.value = eval($input.value);
    } catch (error) {
        $input.value = 'Operacion invalida';
    }
}