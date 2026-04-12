let cola = [];

function insertarCola() {
    const input = document.getElementById('inputCola');
    const valor = input.value.trim();
    if (valor === '') {
        alert('Por favor ingrese un valor');
        return;
    }

    cola.push(valor);
    input.value = '';
    mostrarCola();

    console.log('Cola actual:', cola);
}


function eliminarCola() {
    if (cola.length === 0) {
        alert('La cola está vacía');
        return;
    }

    const elementoEliminado = cola.shift();

    mostrarCola();

    console.log('Elemento eliminado:', elementoEliminado);
    console.log('Cola actual:', cola);
}

function mostrarCola() {
    const contenedor = document.getElementById('elementosCola');

    if (cola.length === 0) {
        contenedor.innerHTML = '<div class="vacio">La cola está vacía</div>';
        return;
    }

    contenedor.innerHTML = '';

    for (let i = 0; i < cola.length; i++) {
        const div = document.createElement('div');
        div.className = 'elemento';
        div.textContent = cola[i];
        contenedor.appendChild(div);
    }
}