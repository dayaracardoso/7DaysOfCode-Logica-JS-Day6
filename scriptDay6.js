// arrays para as categorias
var frutasCat = [];
var laticiniosCat = [];
var congeladosCat = [];
var docesCat = [];
var padariaCat = [];
var higieneCat = [];
var outrosCat = [];

var listaCompleta = document.getElementById("lista"); // pega a div com id lista para renderizar no html
var inputRemover = document.getElementById("remove-item"); // pega a div com id remove-item para renderizar no html

function adicionaItens() {
  // define as categorias nos radio buttons como .checked, para utilizarmos no IF
  var adicionaItem = document.getElementById("item").value; // valor do input que o usuário digita o nome do produto
  var catFrutas = document.getElementById("fruta").checked;
  var catLat = document.getElementById("lat").checked;
  var catCong = document.getElementById("cong").checked;
  var catDoces = document.getElementById("doces").checked;
  var catPad = document.getElementById("pad").checked;
  var catHig = document.getElementById("hig").checked;
  var catOutros = document.getElementById("outros").checked;
  
  // verifica se a categoria de radio button está com .checked (se true ou false)
  if (adicionaItem == "") { // se o valor do input de id item for vazio
    alert("Você deve digitar o nome de um produto primeiro!"); // alert
    return false;
  } else if (catFrutas == true) { // se o radio button com id #fruta estiver com .checked
    frutasCat.push(adicionaItem); // adiciona o item digitado no input com id adicionaItem
    limpaInput(); // define o valor do input com id adicionaItem como vazio
  } else if (catLat == true) {laticiniosCat.push(adicionaItem); limpaInput();
  } else if (catCong == true) {congeladosCat.push(adicionaItem); limpaInput();
  } else if (catDoces == true) {docesCat.push(adicionaItem); limpaInput();
  } else if (catPad == true) {padariaCat.push(adicionaItem); limpaInput();
  } else if (catHig == true) { higieneCat.push(adicionaItem); limpaInput();
  } else {outrosCat.push(adicionaItem); limpaInput();}
  inputsRemover(); //adiciona o texto e botão para remover um item
  exibeLista();
}

function inputsRemover() { //adiciona o texto e botão para remover um item
  inputRemover.innerHTML = `Quer remover um produto? Digite o nome do produto no campo abaixo<br><input type="text" id="produtoRemover"> <button onclick="removerItens();"><span class="material-icons icon-pequeno">delete</span>Remover</button>`;
}

function removerItens() {
  var inputProdRemover = document.getElementById("produtoRemover").value; // pega o valor do input de id produtoRemover
  
if(inputProdRemover == "") { // se o valor do input de id produtoRemover for vazio
  alert("Você deve digitar o nome de um produto!"); // alert
  return false;
  } else if (frutasCat.indexOf(inputProdRemover) >=0) { // se a variável frutasCat tiver um item igual ao valor digitado no input de id produtoRemover
    frutasCat.splice(frutasCat.indexOf(inputProdRemover), 1); // exclua o item em questão, o número 1 diz que remove apenas 1 item
     inputRemover.innerHTML = `Item removido com sucesso`; // exibe no html a mensagem de item removido
    console.log("Existia esse produto na lista e ele foi removido"); // mensagem no console: item removido
    limpaInput(); exibeLista();
  } else if (laticiniosCat.indexOf(inputProdRemover) >=0) {
   laticiniosCat.splice(laticiniosCat.indexOf(inputProdRemover), 1);
    inputRemover.innerHTML = `Item removido com sucesso`;
    console.log("Existia esse produto na lista e ele foi removido");
    limpaInput(); exibeLista();
  } else if (congeladosCat.indexOf(inputProdRemover) >=0) {
    congeladosCat.splice(congeladosCat.indexOf(inputProdRemover), 1);
    inputRemover.innerHTML = `Item removido com sucesso`;
    console.log("Existia esse produto na lista e ele foi removido");
   limpaInput(); exibeLista();
  } else if (docesCat.indexOf(inputProdRemover) >=0) {
     docesCat.splice(docesCat.indexOf(inputProdRemover), 1);
    inputRemover.innerHTML = `Item removido com sucesso`;
    console.log("Existia esse produto na lista e ele foi removido");
    limpaInput(); exibeLista();
  } else if (padariaCat.indexOf(inputProdRemover) >=0) {
    padariaCat.splice(padariaCat.indexOf(inputProdRemover), 1);
    inputRemover.innerHTML = `Item removido com sucesso`;
    console.log("Existia esse produto na lista e ele foi removido");
    limpaInput(); exibeLista();
  } else if (higieneCat.indexOf(inputProdRemover) >=0) {
     higieneCat.splice(higieneCat.indexOf(inputProdRemover), 1);
    inputRemover.innerHTML = `Item removido com sucesso`;
    console.log("Existia esse produto na lista e ele foi removido");
    limpaInput(); exibeLista();
  } else if (outrosCat.indexOf(inputProdRemover) >=0) {
    outrosCat.splice(outrosCat.indexOf(inputProdRemover), 1);
    inputRemover.innerHTML = `Item removido com sucesso`;
    console.log("Existia esse produto na lista e ele foi removido");
    limpaInput(); exibeLista();
  } else { // se nenhuma variável tiver um item igual ao valor digitado no input de id produtoRemover
    inputRemover.innerHTML = `O produto ${inputProdRemover} não existe na lista. Verifique se digitou corretamente o nome do produto.<br>
    <input type="text" id="produtoRemover"> <button onclick="removerItens();"><span class="material-icons icon-pequeno">delete</span>Remover</button>`; // exibe no html a mensagem de erro
    console.log("Não existe esse produto na lista"); // mensagem no console: não existe este item
    limpaInput();
    return false;
  }
  
}

document.addEventListener('keypress', function(teclaEnterPressionada) {
 if(teclaEnterPressionada.which == 13){ // se a tecla pressionada for Enter (keycode 13)
   if(document.getElementById("item").value != "") { // se o valor do input antes de Adicionar estiver preenchido (for diferente de vazio)
     console.log("Pressionou Enter com input adicionar preenchido");
     adicionaItens();
   }
   if(document.getElementById("produtoRemover").value != "") { // se o valor do input antes de Removerr estiver preenchido (for diferente de vazio)
     console.log("Pressionou Enter com input remover preenchido");
     removerItens();
   } 
 }
});
  
 function exibeLista() { // mostra o html da lista e no console também
 
  listaCompleta.innerHTML = `<h3><span class="material-icons icon-grande">receipt_long</span>Sua lista de compras:</h3>
  <span>Frutas:</span> ${frutasCat}<br>
  <span>Laticínios:</span> ${laticiniosCat}<br>
  <span>Congelados:</span> ${congeladosCat}<br>
  <span>Doces:</span> ${docesCat}<br>
  <span>Padaria:</span> ${padariaCat}<br>
  <span>Higiene:</span> ${higieneCat}<br>
  <span>Outros:</span> ${outrosCat}<br>
  <button onClick="window.print()" class="botao-imprimir"><span class="material-icons icon-pequeno">print</span>Imprimir</button>`;
   // o botão acima exibe a opção de imprimir
  
  console.log(`Sua lista de compras:\n\ Frutas: ${frutasCat} \n\ Laticínios: ${laticiniosCat} \n\ Congelados: ${congeladosCat} \n\ Doces: ${docesCat} \n\ Padaria:  ${padariaCat} \n\ Higiene: ${higieneCat} \n\ Outros: ${outrosCat}`);
   inputsRemover();
}

function limpaInput() { // define o valor do input de id item como vazio
  document.getElementById("item").value = "";
}