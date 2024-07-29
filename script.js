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
resultado do exercicio 
q1

let nome = prompt("Digite seu nome")
 const titulo = document.querySelector("#titulo")

 titulo.innerHTML = `Bem vindo, ${nome}`

q2

const imagem = document.getElementById("lamp")
const btn_interruptor = document.querySelector('#btn_lamp')
const body = document.body

let auxiliar = true

btn_interruptor.addEventListener('click', () => {
    if (auxiliar) {
        imagem.src = 'pic_bulboff.gif';
        btn_interruptor.innerHTML = 'Ligar'
        body.style.backgroundColor = "black"
        body.style.color = "white"
        auxiliar = false
    } else {
        imagem.src = 'pic_bulbon.gif';
        btn_interruptor.innerHTML = 'Desligar'
        body.style.backgroundColor = "white"
        body.style.color = "black"
        auxiliar = true
    }
})


// q3

const ipt_senha = document.querySelector('#senha')
const btn_ver = document.querySelector('#btn_ver')
let visivel = false

btn_ver.addEventListener('click', () => {
    if (visivel) {
        ipt_senha.type = 'password'
        visivel = false
    } else {
        ipt_senha.type = 'text'
        visivel = true
    }
})



// q4

const ipt_rep_senha = document.querySelector('#rep_senha')
const spn_erro = document.querySelector('#erro')
ipt_rep_senha.style.outline = 'none'

ipt_rep_senha.addEventListener('input', () => {
    if (ipt_senha.value !== ipt_rep_senha.value) {
        ipt_rep_senha.style.border = '1px solid red'
        spn_erro.style.color = 'red'
        spn_erro.innerHTML = "As senhas são diferentes"
    } else {
        ipt_rep_senha.style.border = 'revert'
        spn_erro.innerHTML = ""
    }
})


// q5

const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const result = document.querySelector('#result')

function soma(a, b) {
    result.innerHTML = `${Number(a.value) + Number(b.value)}`;
}

function subtracao(a, b) {
    result.innerHTML = `${Number(a.value) - Number(b.value)}`;
}

function multiplicacao(a, b) {
    result.innerHTML = `${Number(a.value) * Number(b.value)}`;
}

function divisao(a, b) {
    try {
        if (Number(b.value) == 0) {
            throw Error("Divisao por zero nao permitida")
        } else {
            result.innerHTML = `${Number(a.value) / Number(b.value)}`;
        }
    } catch (error) {
        result.innerHTML = error
    }
}

