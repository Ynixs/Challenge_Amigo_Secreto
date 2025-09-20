let amigos = [];

function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nome = amigoInput.value.trim();
    if (nome === '') {
        alert('Por favor, insira um nome.');
        amigoInput.focus();
        return;
    }
    amigos.push(nome);
    console.log("Lista de amigos:", amigos);
    amigoInput.value = '';
    exibirAmigos();
}

function exibirAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let nomeAmigo = amigos[i];
        let itemLista = document.createElement('li');
        itemLista.textContent = nomeAmigo;
        listaAmigos.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para poder sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>!`;
}