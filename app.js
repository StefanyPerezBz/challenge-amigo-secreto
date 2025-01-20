let amigos = [];
let sorteados = new Map();

function validarNombre(nombre) {
  if (!nombre || nombre.trim() === "") {
    alert("Por favor, ingrese un nombre válido");
    return false;
  }

  const patronNombre = /^[a-záéíóúñüA-ZÁÉÍÓÚÑÜ\s]+$/;
  if (!patronNombre.test(nombre)) {
    alert(
      "El nombre solo debe contener letras (pueden incluir acentos) y espacios"
    );
    return false;
  }

  return true;
}

function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombre = inputAmigo.value.trim();

  if (!validarNombre(nombre)) {
    inputAmigo.focus();
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Este nombre ya fue agregado");
    inputAmigo.value = "";
    inputAmigo.focus();
    return;
  }

  amigos.push(nombre);
  inputAmigo.value = "";
  inputAmigo.focus();
  actualizarListaAmigos();
}

function actualizarListaAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function realizarSorteo() {
  sorteados.clear();
  let disponibles = [...amigos];

  for (let persona of amigos) {
    let posiblesSorteados = disponibles.filter(
      (amigo) =>
        amigo !== persona && !Array.from(sorteados.values()).includes(amigo)
    );

    if (posiblesSorteados.length === 0) {
      return false;
    }

    const indiceAleatorio = Math.floor(
      Math.random() * posiblesSorteados.length
    );
    const amigoSorteado = posiblesSorteados[indiceAleatorio];

    sorteados.set(persona, amigoSorteado);
    disponibles = disponibles.filter((amigo) => amigo !== amigoSorteado);
  }

  return true;
}

async function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  const listaAmigos = document.getElementById("listaAmigos");
  resultado.innerHTML = "";

  if (amigos.length < 2) {
    alert("Se necesitan al menos 2 amigos para realizar el sorteo");
    return;
  }

  listaAmigos.classList.add("hide");

  const mensajeSorteo = document.createElement("div");
  mensajeSorteo.textContent = "Sorteando tu amigo secreto...";
  mensajeSorteo.className = "mensaje-sorteo fade-in";
  resultado.appendChild(mensajeSorteo);

  const spinner = document.createElement("div");
  spinner.className = "spinner";
  resultado.appendChild(spinner);

  let sorteoExitoso = false;
  while (!sorteoExitoso) {
    sorteoExitoso = realizarSorteo();
  }

  // Esperar 3 segundos para crear más suspense
  await new Promise((resolve) => setTimeout(resolve, 3000));

  resultado.innerHTML = "";

  const divResultado = document.createElement("div");
  divResultado.className = "resultado-final fade-in";
  divResultado.innerHTML = `
        <p class="titulo-resultado">El amigo secreto es:</p>
        <p class="nombre-sorteado">${Array.from(sorteados.values())[0]}</p>
    `;
  resultado.appendChild(divResultado);
}

document.getElementById("amigo").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});
