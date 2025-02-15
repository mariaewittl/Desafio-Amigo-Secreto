//armazenamento de informações
listaDeAmigos = [];
listaSorteados = [];

// adicionar amigos na lista, verificar se o campo está vazio ou se o nome é válido ou repetido
function adicionarAmigo(){
    const amigo = document.getElementById('amigo').value;
    mensagensNaTela('h3', '');
    if(amigo === ''){
        mensagensNaTela('h4', 'Erro: digite o nome de um amigo.');
    } 
    if(listaDeAmigos.includes(amigo)){
        limparCampo();
        mensagensNaTela('h4', 'Este amigo já foi adicionado.');
    } else {
        const nomeValido = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
        if (!nomeValido.test(amigo)) {
        mensagensNaTela('h4', 'Nome inválido.');
        return;
        }
        mensagensNaTela('h4', ' ');
        listaDeAmigos.push(amigo);
        atualizarListaAmigos();
        document.getElementById('amigo').value = '';
    }
} 

// limpar barra de input
function limparCampo(input){
    amigo.value = '';
}

// sortear amigo secreto e mostrar na tela
function sortearAmigo(){
        mensagensNaTela('h3', '');
        if (listaDeAmigos.length == 1 && listaSorteados.length >= 1){
            mensagensNaTela('h3', `O amigo secreto sorteado foi: ${listaDeAmigos}`)
            limparLista();
            listaDeAmigos = [];
            listaSorteados = [];
        } else if (listaDeAmigos.length > 1){
            const amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
            if (listaSorteados.includes(amigoSorteado)){
                return sortearAmigo();
            } else {
                listaSorteados.push(amigoSorteado);
                mensagensNaTela('h3', `O amigo secreto sorteado foi: ${amigoSorteado}`);
                removerAmigo(amigoSorteado);
            }
        }
        if (listaDeAmigos.length == 1 && listaSorteados.length == 0){
            mensagensNaTela('h3', 'Adicione amigos para sortear.')
        }
    }


// botão adicionar acionado pela tecla enter
document.addEventListener('keydown', function(e) {
    if(e.key == "Enter"){
      document.getElementById("button-add").click();
    }
});

//exibir avisos na tela
function mensagensNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//exibir nomes inseridos
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    if (!listaDeAmigos.length) return;
    const fragment = document.createDocumentFragment();
    listaDeAmigos.forEach(function (amigo) {
        const item = document.createElement('li');
        const texto = document.createElement('span');
        texto.textContent = amigo;
        texto.className = 'name-item';
        item.appendChild(texto);
        fragment.appendChild(item);
    });

    lista.appendChild(fragment);
}

//limpar array de amigos inseridos
function limparLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
}

// remover nomes da tela
function removerAmigo(nome) {
    listaDeAmigos = listaDeAmigos.filter(amigo => amigo !== nome);
    atualizarListaAmigos();
}

// limpar listas para um novo sorteio
function novoSorteio (){
    listaDeAmigos = [];
    listaSorteados = [];
    limparLista();
    mensagensNaTela('h3', 'Insira novos nomes');
    mensagensNaTela('h4', '');
}