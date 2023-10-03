console.log("Trabalhando com variáveis");
console.log("Trabalhando com variáveis");
// JS é case sensitive
//console.log("Trabalhando com variáveis");
JS é case sensitive
idade =29;
Idade =30;
const idade = 29
const nome = "Ricardo"

let ano = 2020
const nome = "Lais";
const Sobrenome = "Silva";
const Idade = 30;
const anoDeNascimento = 1993;
console.log("Operações Aritiméticas");

console.log(2+2);
console.log(10 + 8 *2);
console.log("ano" + 2020);
console.log("Conversão de Tipos");

console.log("ano" + 2020);
console.log("2" + "2");
console.log(parseInt("2") + parseInt("2"));
console.log("10"/ "2");
console.log("Ricardo" / "2");
console.log("7" / "2") 
console.log(6.5);
console.log("Trabalhando com atribuição de variáveis");
const idade = 29;
const nome = "Ricardo";
const sobrenome = "Bugan"; 

console.log(nome + sobrenome);

console.log("Trabalhando com atribuição de variáveis");
const idade = 29;
const nome = "Ricardo";
const sobrenome = "Bugan"; 

console.log(nome, sobrenome);
nome = nome + sobrenome;
let nome = "Ricardo"
const nomeCompleto = nome + sobrenome;
const nomeCompleto = primeiroNome + sobrenome;
let idade; // declarando variável
idade = 26; // atribuindo valor
let idade;
idade = 26;
idade = idade+1;
console.log(idade);
console.log(`Trabalhando com listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

console.log(`Destinos possíveis`);
console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(`Trabalhando com listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);

Destinos possíveis: 

['Salvador', 'São Paulo', 'Rio de Janeiro']

listaDeDestinos.push(`Curitiba`) 
listaDeDestinos = 2;
listaDeDestinos.splice( 2,1);
console.log(listaDeDestinos[1]);
console.log(listaDeDestinos[1], listaDeDestinos[0]);
let new = 2
const salario = 3300.0;

if(salario < 2600.0) 
    console.log("A sua aliquota é de 15%");
    console.log("Você pode deduzir até R$ 350");

else if(salario < 3750.0) 
    console.log("A sua aliquota é de 22,5%");
    console.log("Você pode deduzir até R$ 636");
SyntaxError: Unexpected token 'else'
if (idadeComprador >= 18) {
    console.log("Comprador maior de idadade");
    listaDeDestinos.splice(1, 1); // removendo item
}   else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1); //removedo item
}else {
    console.log("Não é maior de idade e não posso vender");
}

introducao-javascript
├── css
│   ├── index.css
│   └── reset.css
├── js
│   └── principal.js
├── img
├── favicon.ico
└── index.html

// Restante do código HTML
            </section>
        </main>
        <!-- Importação dos Javascripts AQUI -->
        <script src="js/principal.js"></script>
    </body>
</html>

<h1>Aparecida Nutrição</h1>
<h1 class="titulo">Aparecida Nutrição</h1>
document.querySelector(".titulo");

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"
IMC = peso / altura x altura;
<tr class="paciente">
    <td class="info-nome">Paulo</td>
    <td class="info-peso">100</td>
    <td class="info-altura">2.00</td>
    <td class="info-gordura">10</td>
    <td class="info-imc">0</td>
</tr>
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector(".paciente");
<tr class="paciente" id="primeiro-paciente">
    <td class="info-nome">Paulo</td>
    <td class="info-peso">100</td>
    <td class="info-altura">2.00</td>
    <td class="info-gordura">10</td>
    <td class="info-imc">0</td>
</tr>
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

console.log(paciente)

<tr class="paciente" id="primeiro-paciente">
    <td class="info-nome">Paulo</td>
    <td class="info-peso">100</td>
    <td class="info-altura">2.00</td>
    <td class="info-gordura">10</td>
    <td class="info-imc">0</td>
</tr>
< tr class="paciente" id="primeiro-paciente">...</tr>
<td class="info-peso">100</td>
    < tr class="paciente" id="primeiro-paciente">...</tr>
    <td class="info-peso">100</td>
100
var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

console.log(paciente); // tr
console.log(tdAltura); 
console.log(altura); 
<tr class="paciente" id="primeiro-paciente">...</tr>
<td class="info-altura">2.00</td>

2.00
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);
IMC = 100 / (2.00 x 2.00)
IMC = 100 / 4.00
IMC = 25
var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / altura * altura; // 100 / 2.0 x 2.0 = 100 / 4 =>>>>>>> 25

console.log(imc);
<table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Peso(kg)</th>
            <th>Altura(m)</th>
            <th>Gordura Corporal(%)</th>
            <th>IMC</th>
        </tr>
    </thead>
    <tbody id="tabela-pacientes">
        <tr class="paciente" id="primeiro-paciente">
            <td class="info-nome">Paulo</td>
            <td class="info-peso">100</td>
            <td class="info-altura">2.00</td>
            <td class="info-gordura">10</td>
            <td class="info-imc">0</td>
        </tr>
    </tbody>
</table>
var trPaciente = document.querySelector('#primeiro-paciente');
<table>
<thead>
    <tr>            
        <th>Salada</th>
        <th>Prato Principal</th>
        <th>Acompanhamento</th>
    </tr>
</thead>
<tbody>
    <tr class="prato-do-dia" id="sexta">
        <td class='salada'>Alface e Tomate</td>
        <td class='principal'>Frango Grelhado</td>
        <td class='acompanhamento'>Arroz e Feijão preto</td>        
    </tr>
    ...Outros dias da semana
    <tr class="prato-do-dia" id="segunda">
        <td class='salada'>Salada de Batata</td>
        <td class='principal'>Macarrão com molho branco</td>
        <td class='acompanhamento'>Milho, ervilha e brócolis</td>        
    </tr>
</tbody>
</table>
Prato do dia!
Alface e Tomate
Frango Grelhado
Arroz e Feijão Preto
var pratoDoDia = document.querySelector("#sexta");

var salada = pratoDoDia.querySelector(".salada").textContent;
var principal = pratoDoDia.querySelector(".principal").textContent;
var acompanhamento = pratoDoDia.querySelector(".acompanhamento").textContent;

console.log("Prato do dia!");
console.log(salada);
console.log(principal);
console.log(acompanhamento);
var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;


var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);

tdImc.textContent = imc;

alert(78 / (1.71 * 1.71));
var vendas = 10;
var clientesAbordados = 25;
var mediaTentativasPorCliente = 4;

var taxa = 0;

taxa = vendas / clientesAbordados *  mediaTentativasPorCliente;
console.log(taxa);
taxa = vendas / clientesAbordados *  mediaTentativasPorCliente;
vendas / clientesAbordados
//Resultado 
10 / 25 = 0.4
0.4 *  mediaTentativasPorCliente;
// Resultado
0.4 * 4 = 1.6
IMC = 10000 / 2.00 x 2.00
IMC = 10000 / 4.00
IMC = 2500
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);
tdImc.textContent = imc;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

if (peso <= 0) {
    console.log("Peso inválido");
}
<tbody id="tabela-pacientes">
    <tr class="paciente" id="primeiro-paciente">
        <td class="info-nome">Paulo</td>
        <td class="info-peso">-100</td>
        <td class="info-altura">2.00</td>
        <td class="info-gordura">10</td>
        <td class="info-imc">0</td>
    </tr>
var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

if (peso <= 0) {
    console.log("Peso inválido");
}

if (peso > 1000) {
    console.log("Peso inválido");
}

var imc = peso / (altura * altura);
tdImc.textContent = imc;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

if (peso < 0 || peso > 1000) {
    console.log("Peso inválido");
}
if (altura < 0 || altura > 3.00) {
    console.log("Altura inválida");
}
var pesoEhValido = true;
var alturaEhValida = true;

if (peso < 0 || peso > 1000) {
    console.log("Peso inválido");
}

if (altura < 0 || altura > 3.00) {
    console.log("Altura inválida!");
}
if (peso < 0 || peso > 1000){
    console.log("Peso inválido!");
    pesoEhValido = false;
}

if (altura < 0 || altura > 3.00){
    console.log("Altura inválida!");
    alturaEhValida = false;
}
var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso < 0 || peso > 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
}

if (altura < 0 || altura > 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
}

var imc = peso / (altura * altura);
tdImc.textContent = imc;
var pesoEhValido = true;
var alturaEhValida = true;

if (peso < 0 || peso > 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
}

if (altura < 0 || altura > 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
}

if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
if (peso < 0 || peso > 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura < 0 || altura > 3.00){
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
}

if (alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
<tbody id="tabela-pacientes">
    <tr class="paciente" id="primeiro-paciente">
        <td class="info-nome">Paulo</td>
        <td class="info-peso">-100</td>
        <td class="info-altura">4.00</td>
        <td class="info-gordura">10</td>
        <td class="info-imc">0</td>
    </tr>
//...

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.00){
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
}

if (alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}<table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Peso(kg)</th>
            <th>Altura(m)</th>
            <th>Gordura Corporal(%)</th>
            <th>IMC</th>
        </tr>
    </thead>
    <tbody id="tabela-pacientes">
        <tr class="paciente" id="primeiro-paciente">
            <td class="info-nome">Paulo</td>
            <td class="info-peso">100</td>
            <td class="info-altura">2.00</td>
            <td class="info-gordura">10</td>
            <td class="info-imc">0</td>
        </tr>
    </tbody>
</table>
var trPaciente = document.querySelector('#primeiro-paciente');
var tdPeso = trPaciente.querySelector('.info-peso');
var tdAltura = trPaciente.querySelector('.info-altura');

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var imc = peso / ( altura * altura);
var trPaciente = document.querySelector('#primeiro-paciente');
var tdPeso = trPaciente.querySelector('.info-peso');
var tdAltura = trPaciente.querySelector('.info-altura');
var tdImc = trPaciente.querySelector('.info-imc');

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoEhValido = true; // assumindo de boa fé que o peso é válido
var alturaEhValida = true; // assumindo de boa fé que a altura é válida

if(peso <=0 || peso >= 1000) {
   pesoEhValido = false;
}

if(altura <= 0 || altura >= 3.00) {
  alturaEhValida = false;
}

if(pesoEhValido && alturaEhValida) {
   var imc = peso / ( altura * altura); 
}
var setorTI = true;
var gerente = true;
if(setorTI == true || gerente == true){
    console.log("Acesso permitido");
}else{
    console.log("Acesso negado")
}   
var setorTI = true;
var gerente = true;
if(setorTI == true || gerente == true){
    console.log("Acesso permitido");
}else{
    console.log("Acesso negado")
}
var setorTI = true;
var gerente = true;
if(setorTI == true && gerente == true){
    console.log("Acesso permitido");
}else{
    console.log("Acesso negado")
}
<!-- restante do HTML -->
<tr class="paciente" id="primeiro-paciente">
    <td class="info-nome">Paulo</td>
    <td class="info-peso">100</td>
    <td class="info-altura">2.00</td>
    <td class="info-gordura">10</td>
    <td class="info-imc">0</td>
</tr>
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
.
var imc = peso / (altura * altura);
var tdImc = paciente.querySelector(".info-imc");
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;
if(peso <= 0 || peso > 1000){
    console.log("Peso inválido");
}
if(peso <= 0 || peso > 1000){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
}
if(altura <= 0 || altura >= 3){
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida!";
}
var alturaEhValida = true;
var pesoEhValido = true;

if(peso <= 0 || peso > 1000){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
}

if(altura <= 0 || altura >= 3){
    console.log("Altura inválida");

    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
}
var alturaEhValida = true;
var pesoEhValido = true;

if(peso <= 0 || peso > 1000){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
}

if(altura <= 0 || altura >= 3){
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
}

if(pesoEhValido && alturaEhValida){
    var imc = peso / ( altura * altura);    
    tdImc.textContent = imc;
}
var paciente = document.querySelector("#primeiro-paciente");

var tdAltura = paciente.querySelector(".info-altura");
var tdPeso = paciente.querySelector(".info-peso");
var tdImc = paciente.querySelector(".info-imc");


var altura = tdAltura.textContent;
var peso = tdPeso.textContent;

var alturaEhValida = true;
var pesoEhValido = true;

if (peso <= 0 || peso > 1000) {
    console.log("Peso inválido!");
    tdPeso.textContent = "Peso inválido!";
    pesoEhValido = false;

}

if (altura <= 0 || altura >= 3) {
    console.log("Altura inválida!");
    tdAltura.textContent = "Altura inválida!";
    alturaEhValida = false;
}

if (alturaEhValida && pesoEhValido) {

    var imc = peso / (altura * altura);
    tdImc.textContent = imc;    
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}
<tbody id="tabela-pacientes">
    <tr class="paciente" id="primeiro-paciente">
        <td class="info-nome">Paulo</td>
        <td class="info-peso">1000</td>
        <td class="info-altura">2.00</td>
        <td class="info-gordura">10</td>
        <td class="info-imc">0</td>
     </tr>
//...
var paciente2 = document.querySelector("#segundo-paciente");

var tdPeso2 = paciente.querySelector(".info-peso");
var peso2 = tdPeso.textContent;

var tdAltura2 = paciente.querySelector(".info-peso");
var altura2 = tdAltura.textContent;
var paciente2 = document.querySelector("#segundo-paciente");

var tdPeso2 = paciente.querySelector(".info-peso");
var peso2 = tdPeso.textContent;

var tdAltura2 = paciente.querySelector(".info-peso");
var altura2 = tdAltura.textContent;

<tbody id="tabela-pacientes">
    <tr class="paciente" id="primeiro-paciente">
        <td class="info-nome">Paulo</td>
        <td class="info-peso">-100</td>
        <td class="info-altura">4.00</td>
        <td class="info-gordura">10</td>
        <td class="infor-imc">0</td>
    </tr>
    <tbody id="tabela-pacientes">

    <tr class="paciente" id="paciente">
        <td class="info-nome">João</td>
        <td class="info-peso">80</td>
        <td class="info-altura">1.72</td>
        <td class="info-gordura">40</td>
        <td class="info-imc">0</td>
    </tr>
<!-- ... -->
var pacientes = document.querySelector(".paciente");
console.log(pacientes);
[tr#primeiro-paciente.paciente, tr.paciente, tr.paciente, tr.paciente, tr.paciente]

NodeList[5]
    0: tr#primeiro-paciente.paciente
    1: tr.paciente
    2: tr.paciente
    3: tr.paciente
    4: tr.paciente
    length: 5
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < 5; i++) {

}
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i]);
}
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
    }

  if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc;
    }
}
if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
}
var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
}
var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.style.color = "red";
}
if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.style.backgroundColor = "red";
}
if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    paciente.style.backgroundColor = "lightcoral";
}
.paciente-invalido {
    background-color: lightcoral;
}
var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
}
if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
}
.paciente-invalido{
    background-color: blue;
}
.paciente-invalido{
    background-color: lightcoral;
}
var despesaCategoria = 1532;
var rendaTotal = 6255;

var porcentagemCategoria = (despesaCategoria/rendaTotal) * 100;

console.log(porcentagemCategoria);
porcentagemCategoria.toFixed(1);
<ul class="lista-produtos">
    <li class="produto">Web cam</li>
    <li class="produto">Microfone</li>
    <li class="produto">Fundo verde</li>
    <li class="produto">Notebook</li>
</ul>
var produtos = document.querySelector("lista-produtos");

for( var i=0 ; i < produtos.length ; i++){
    var produto  = produtos[i];
    var nomeDoProduto = produto.textContent;
    console.log(nomeDoProduto);
}
<p id="latim"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>


<script>
    var paragrafo = document.querySelector("#latim");
    // Código aqui!
</script>
paragrafo.style.color;
paragrafo.style.color = "blue";
paragrafo.style.color = "rgb(0,0,255)";
<script>
    var paragrafo = document.querySelector("#latim");
    paragrafo.style.backgroundColor = "blue";
</script>
<h1 class="titulo principal azul"> Sou o titulo principal! </h1>
var titulo = document.querySelector("h1");
console.log(titulo.classList);
//resultado
["titulo","principal","azul"]
var titulos = document.querySelectorAll("h2");

for(var i = 0 ; i <  titulos.length ; i++){
    var titulo = titulos[i];
    titulo.classList.add("titulo");
}
var pacientes = document.querySelectorAll(".paciente");
console.log(paciente);
for(var i = 0; i < pacientes.length ; i++){
    var paciente = pacientes[i];
    console.log(paciente);
}
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var alturaEhValida = true;
    var pesoEhValido = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        pesoEhValido = false;
    }

    if(altura <= 0 || altura >= 3.0){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;
    }

    if(pesoEhValido && alturaEhValida){
        var imc = peso / ( altura * altura);    
        tdImc.textContent = imc;
    }    
}
    // Restante do código

    if(pesoEhValido && alturaEhValida){
        var imc = peso / ( altura * altura);    
        //ALTERAÇÃO AQUI...
        tdImc.textContent = imc.toFixed(2);
    }
}       
.paciente-invalido{
    background-color: lightcoral;
}
if(peso <= 0 || peso >= 1000){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;

    paciente.classList.add("paciente-invalido");
}
if(altura <= 0 || altura >= 3.00){
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;

    paciente.classList.add("paciente-invalido");
}
<!-- ... -->
<section class="container">
    <h2 id="titulo-form">Adicionar novo paciente</h2>
    <form id="form-adiciona">
        <div class="grupo">
            <label for="nome">Nome:</label>
            <input id="nome" name="nome" type="text" placeholder="digite o nome do seu paciente" class="campo">
        </div>
        <div class="grupo">
            <label for="peso">Peso:</label>
            <input id="peso" name="peso" type="text" placeholder="digite o peso do seu paciente" class="campo campo-medio">
        </div>
        <div class="grupo">
            <label for="altura">Altura:</label>
            <input id="altura" name="altura" type="text" placeholder="digite a altura do seu paciente" class="campo campo-medio">
        </div>
        <div class="grupo">
            <label for="gordura">% de Gordura:</label>
            <input id="gordura" type="text" placeholder="digite a porcentagem de gordura do seu paciente" class="campo campo-medio">
        </div>

        <button id="adicionar-paciente" class="botao bto-principal">Adicionar</button>
    </form>
</section>
titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
    console.log("Olá eu fui clicado!");
}
titulo.addEventListener("click", function (){
    console.log("Olha só posso chamar uma função anônima.")
});
<!-- ... -->
    <div class="grupo">
        <label for="gordura">% de Gordura</label>
        <input for="gordura" name="gordura" type="text" placehoder="digite a porcentagem de gordura do seu paciente" class="campo campo-medio">
    </div>

    <button id="adicionar-paciente" class="botao bto-principal">Adicionar</button>
</form>
var botaoAdicionar = document.querySelector("#adicionar-paciente");
console.log(botaoAdicionar)
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    console.log("Oi, cliquei no botão.");
});
<button id="botao">clique-me</button>
<script>

    var botao = document.querySelector('#botao');

    function botaoHandler() {

        alert('Botão clicado');
    }

    botao.addEventListener('click', botaoHandler());
</script>
botao.addEventListener('click', botaoHandler());
botao.addEventListener('click', botaoHandler);
<input class="frase"><button class="botao">Copiar</button><span class="copia"></span>
<input class="frase"><button class="botao">Copiar</button><span class="copia"></span>
<script>
    var inputFrase = document.querySelector('.frase');
    var botao = document.querySelector('.botao');
    var copia = document.querySelector('.copia');

    function botaoHandler() {

        // não sabe o que fazer aqui!
    }

    botao.addEventListener('click', botaoHandler);
 </script>

