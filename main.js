// Form de contato
const form = document.getElementById('form-contato');
const nomeCadastro = document.getElementById('nome');
const nomeUsuario = document.querySelector('.nome');

// Carrinho
let carrinho = [];
const adicionarAoCarrinho = document.querySelectorAll('.adicionar-carrinho');
const listaProdutos = document.querySelector('#itens-carrinho'); // Lista de produtos dentro do carrinho

// Modais
const abrirModalCarrinho = document.querySelector('#open-modal');
const fecharModalCarrinho = document.querySelector('#close-modal');
const modalCarrinho = document.querySelector('#modal');
const fade = document.querySelector("#fade");
const toggleModal = () => {
    modalCarrinho.classList.toggle('hide');
    fade.classList.toggle('hide');
}

// Nome
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nomeDigitado = nomeCadastro.value;

    nomeUsuario.textContent = nomeDigitado;
})

// Adicionar ao Carrinho
adicionarAoCarrinho.forEach((adicionar) => {
    adicionar.addEventListener('click', (event) => {
        const linhaDoProduto = event.currentTarget.closest('tr');

        const nomeProduto = linhaDoProduto.querySelector('td:nth-child(1)').innerText;
        const tamanhoProduto = linhaDoProduto.querySelector('td:nth-child(2)').innerText;
        const precoProduto = linhaDoProduto.querySelector('td:nth-child(3)').innerText;
        const produtoExistente = carrinho.find((item) => {
            return item.produto === nomeProduto && item.tamanho === tamanhoProduto;
        })

        if (produtoExistente){
            produtoExistente.quantidade += 1;
        }else{
            const produtoSelecionado = {
                produto: nomeProduto,
                tamanho: tamanhoProduto,
                preco: precoProduto,
                quantidade: 1
            };
            carrinho.push(produtoSelecionado);
        }
        
        atualizarInterfaceCarrinho();
    });
});

function atualizarInterfaceCarrinho(){
    listaProdutos.innerHTML = '';
    carrinho.forEach((item) => {
        const li = document.createElement('li');
        const svgIcone = obterIconeProduto(item.produto);
        li.innerHTML = `${svgIcone} <span>${item.produto} (${item.tamanho}) x${item.quantidade} - ${item.preco}</span>`;
        listaProdutos.appendChild(li);
    });
    calcularTotalCarrinho();
}

// Modal Carrinho
[abrirModalCarrinho, fecharModalCarrinho, fade].forEach((el) => {
    el.addEventListener('click', () => toggleModal());
})

// Cálculo de preço

function calcularTotalCarrinho() {
    const total = carrinho.reduce((acumulador, item) => {
        const precoLimpo = item.preco.replace('R$', "").replace(',', '.').trim();
        const precoNumero = parseFloat(precoLimpo);
        const precoDoItem = precoNumero * item.quantidade;
      
        return acumulador + precoDoItem;
    }, 0);

    const precoTotalHTML = document.querySelector('#preco-total');
    precoTotalHTML.innerText = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
}

// Icones dos Produtos

function obterIconeProduto(nome){
    const nomeNormalizado = nome.toLowerCase().trim();

    const icones = {
        "café expresso": `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        "café cappuccino": `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 10h15a1 1 0 0 1 1 1v5a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M18 12h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2" stroke="currentColor" stroke-width="2"/><path d="M1 22h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M9.5 13c-.5-.5-1.5-.5-2 0l-.5.5-.5-.5c-.5-.5-1.5-.5-2 0s-.5 1.5 0 2l2.5 2.5 2.5-2.5c.5-.5.5-1.5 0-2z" fill="currentColor"/></svg>`,
        "salgado": `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="14" height="14" rx="1" stroke="currentColor" stroke-width="2" transform="rotate(5 11 11)"/><path d="M17 5l1.5-1M18 9l1.5-.5M18.5 13l1.5-.5M18 17l1.5-1M5 18l-.5 1.5M9 18l-.5 1.5M13 18l-.5 1.5M17 17.5l-.5 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M8 9c1.5.5 3 0 4-1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
    }

    return icones[nomeNormalizado] || '';
}