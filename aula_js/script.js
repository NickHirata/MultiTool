

function calcularDobro() {
    const inputNumero = document.getElementById("num");
    const resultado = document.getElementById("resultado");

    const novoNumero = parseInt(inputNumero.value);

    const dobro = novoNumero * 2;
    resultado.innerText = `O dobro de ${novoNumero} é ${dobro}`;

    inputNumero.value = dobro; // atualiza o número para o dobro calculado


    
}


function reiniciar() {
    document.getElementById("num").value = "";
    document.getElementById("resultado").innerText = "";
    document.getElementById("num").focus();
}



function mudacor(color){
    document.getElementsByTagName("body")[0].style.backgroundColor=color; 
}





let operador;
let valor1;
let valor2;
let resu = document.getElementById('visor');

function ajustarTamanho() {
  resu.style.width = (resu.value.length + 5) + "ch";
}

function adicionarNumero(numero) {
  resu.value += numero;
  resu.style.color = "black";
  ajustarTamanho();
}

function adicionarOperador(op) {
  operador = op;
  valor1 = resu.value !== "" ? parseInt(resu.value) : 0;
  resu.value += operador;
  ajustarTamanho();
}

function calcular() {
  valor2 = parseInt(resu.value.slice(resu.value.lastIndexOf(operador) + 1));
  let resultado;
  if (operador === '+') {
    resultado = valor1 + valor2;
  } else if (operador === '-') {
    resultado = valor1 - valor2;
  } else if (operador === '*') {
    resultado = valor1 * valor2;
  } else if (operador === '/') {
    resultado = valor1 / valor2;
  }
  
  
  if (isNaN(resultado)) {
    resu.value = "Operação inválida";
    resu.style.color = "red"; 
  } else {
    resu.value = `${valor1} ${operador} ${valor2} = ${resultado}`;
    resu.style.color = "black";
  }
  ajustarTamanho();
}


function limpar() {
    resu.value = "";
    valor1 = null;
    valor2 = null;
    operador = null;
}






// Seleciona o botão e o parágrafo onde o contador será exibido
const botao = document.getElementById("botao");
const contadorElement = document.getElementById("contador");

// Inicializa o contador com zero cliques
let contador = 0;

// Adiciona um listener de eventos para o botão
botao.addEventListener("click", () => {
  // Incrementa o contador
  contador++;

  // Atualiza o conteúdo do parágrafo com o novo valor do contador
  contadorElement.textContent = contador + " cliques";
});

// Seleciona o botão de zerar contador
const botaoZerar = document.getElementById("botao-zerar");

// Adiciona um listener de eventos para o botão de zerar contador
botaoZerar.addEventListener("click", () => {
  // Zera o contador
  contador = 0;

  // Atualiza o conteúdo do parágrafo com o novo valor do contador
  contadorElement.textContent = contador + " cliques";
});
