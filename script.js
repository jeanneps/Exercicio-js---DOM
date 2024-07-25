// questão 1
let nome = prompt("Digite seu nome")
titulo.innerHTML = nome

//Questão 2
let lampadaAcesa = false;

function alternarLampada() {
    const lampada = document.getElementById('lampada-img');
    if (lampadaAcesa) {
        lampada.src = 'LAMPADA_DESLIGADA.gif';
        lampadaAcesa = false;
    } else {
        lampada.src = 'LAMPADA_LIGADA.gif';
        lampadaAcesa = true;
    }
}

function alternarFundo() {
    const body = document.body;
    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = '#000';
    } else {
        body.style.backgroundColor = 'white';
    }
}
//Questão 3/4
 function alternarsenha() {
    var input = document.getElementById('senha');
    var botao = document.querySelector('button');

    if(input.type ==='password'){
        input.type = 'text';
        botao.textContent = 'ocultar senha';
    } else {
        input.type = 'password';
        botao.textContent = 'verificar senha';
    }

 }
 function verificarSenhas() {
    var input = document.getElementById('senha').value;
    var confirmarinput = document.getElementById('confirmarSenha').value;
    var não_batem = document.getElementById('não_batem');

    if (input !== confirmarinput){
        não_batem.style.display = 'block';
    } else {
        não_batem.style.display = 'none';
        alert('Senhas coincidem!');
    }
 }
 //questao 5
 const form = document.getElementById('calculator-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    try {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const operation = document.getElementById('operation').value;

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Por favor, insira números válidos.');
        }

        let result;
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    throw new Error('Não é possível dividir por zero.');
                }
                result = num1 / num2;
                break;
            default:
                throw new Error('Por favor, selecione uma operação válida.');
        }

        resultDiv.textContent = `Resultado: ${result}`;
    } catch (error) {
        resultDiv.textContent = `Erro: ${error.message}`;
    }
});


