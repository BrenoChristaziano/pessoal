// Seletores
const tarefa = document.querySelector('#tarefa')
const Normal = document.querySelector('#normal')
const importante = document.querySelector('#importante')
const btnadicionar = document.querySelector('#adicionar')
const btnconcluido = document.querySelector('#concluido')
const btnpendente = document.querySelector('#pendente')
const btnremover = document.querySelector('#remover')
const caixa = document.querySelector('#caixaRolagem')

// Função para criar um input radio
const criarRadio = () => {
    const radio = document.createElement('input')
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', 'tarefa')
    return radio;
};

// Função para criar uma nova tarefa
const criarNovaTarefa = (tarefaTexto) => {
    const novaDiv = document.createElement('div')

    if (Normal.checked) {
        novaDiv.classList.add('normal')
    } else if (importante.checked) {
        novaDiv.classList.add('importante')
    }

    novaDiv.innerHTML = tarefaTexto;
    novaDiv.appendChild(criarRadio())

    return novaDiv;
};

// Adicionar nova tarefa
btnadicionar.addEventListener('click', () => {
    if (tarefa.value.trim()) {
        if (Normal.checked || importante.checked) {
            const novoElemento = criarNovaTarefa(tarefa.value)
            caixa.appendChild(novoElemento);
            tarefa.value = ''
            Normal.checked = false
            importante.checked = false
        } else {
            alert('Por favor, selecione a opção.')
        }
    } else {
        alert('Por favor, digite uma tarefa.')
    }
});

// Marcar tarefa como concluída
btnconcluido.addEventListener('click', () => {
    let radios = document.querySelectorAll('input[type="radio"][name="tarefa"]')
    let radioSelecionado = null

    for (const radio of radios) {
        if (radio.checked) {
            radioSelecionado = radio.parentElement // Pega o pai do radio (o div com a tarefa)
            break;
        }
    }

    if (radioSelecionado) {
        radioSelecionado.classList.add('concluido')
    } else {
        alert('Selecione uma tarefa')
    }
    radios = false
})