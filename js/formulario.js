const personas = [];
function agregar() {

    const formu = document.forms['formulario'];
    const nombre = formu['usuario'];
    const identificacion = formu['identificacion'];
    const correo = formu['correo'];
    const estilo = formu['estilo'];
    const instrumento = formu['instrumento'];
    const persona = new Person(nombre.value, identificacion.value,
        correo.value, estilo.value, instrumento.value);
    personas.push(persona);
    mostrarPersonas();
}

function mostrarPersonas() {
    let cadena = "";

    for (let person of personas) {
        cadena += `<li>${person.nombre}</li>`;
    }

    document.getElementById('result').innerHTML = cadena;
}
