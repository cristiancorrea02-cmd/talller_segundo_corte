let pila = [];

function insertarPila() {
    const input = document.getElementById('inputPila');
    const valor = input.value.trim();

    if (valor === '') {
        alert('Por favor ingrese un valor');
        return;
    }

    pila.push(valor);
    input.value = '';
    mostrarPila();

    console.log('Pila actual:', pila);
}


function eliminarPila() {
    if (pila.length === 0) {
        alert('La pila está vacía');
        return;
    }

    const elementoEliminado = pila.pop();

    mostrarPila();

    console.log('Elemento eliminado:', elementoEliminado);
    console.log('Pila actual:', pila);
}


function mostrarPila() {
    const contenedor = document.getElementById('elementosPila');

    if (pila.length === 0) {
        contenedor.innerHTML = '<div class="vacio">La pila está vacía</div>';
        return;
    }

    contenedor.innerHTML = '';


    for (let i = pila.length - 1; i >= 0; i--) {
        const div = document.createElement('div');
        div.className = 'elemento';
        div.textContent = pila[i];
        contenedor.appendChild(div);
    }
}    