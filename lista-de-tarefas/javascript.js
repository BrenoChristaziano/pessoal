const tarefa = document.querySelector('#tarefa')
const Normal = document.querySelector('#normal')
const importante = document.querySelector('#importante')
const btnadicionar = document.querySelector('#adicionar')
const btnconcluido = document.querySelector('#concluido')
const btnpendente = document.querySelector('#pendente')
const btnremover = document.querySelector('#remover')
const caixa = document.querySelector('#caixaRolagem')

// função de arlerta
const showCustomAlert=(message)=>{
    const div = document.createElement('div')
    div.setAttribute('class', 'custom-alert')
    div.textContent = message
    document.body.appendChild(div)
    div.style.display = "block"
    setTimeout(()=>{
        div.style.display = "None"
        document.body.removeChild(div)
    }, 3000)
}

// Função para criar um input radio
const criarRadio = () => {
    const radio = document.createElement('input')
    radio.setAttribute('type', 'radio')
    radio.setAttribute('name', 'tarefa')
    return radio;
}

// Função para criar uma nova tarefa
const criarNovaTarefa = (tarefaTexto) => {
    const novaDiv = document.createElement('div')

    if (Normal.checked) {
        novaDiv.classList.add('normal')
    } else if (importante.checked) {
        novaDiv.classList.add('importante')
    }

    novaDiv.innerHTML = tarefaTexto
    novaDiv.appendChild(criarRadio())

    return novaDiv
}

// funcão encontrar radio selecionado
const selecionado=()=>{
    let radios = document.querySelectorAll('input[type="radio"][name="tarefa"]')
    let radioSelecionado = null

    for (let radio of radios){
        if (radio.checked){
            radioSelecionado = radio.parentElement
            break;
        }
    }
    return radioSelecionado
}
// Adicionar nova tarefa
btnadicionar.addEventListener('click', () => {
    if (tarefa.value.trim()) {
        if (Normal.checked || importante.checked) {
            const novoElemento = criarNovaTarefa(tarefa.value)
            caixa.appendChild(novoElemento)
            tarefa.value = ''
            Normal.checked = false
            importante.checked = false
        } else {
            showCustomAlert('Por favor, selecione a opção.' )
        }
    } else {
        showCustomAlert('Por favor, digite uma tarefa.')
    }
})

// Marcar tarefa como concluída
btnconcluido.addEventListener('click', () => {
    const escolhido = selecionado()
    if (escolhido) {
        escolhido.classList.add('concluido')
        escolhido.querySelector('input[type="radio"]').checked = false
    } else {
        showCustomAlert('Selecione uma tarefa')
    }
})
// Marcar a tarefa como pendente
btnpendente.addEventListener("click",(evt)=>{
    const escolhido = selecionado()
    if (escolhido){
        escolhido.classList.add('pendente')
        escolhido.querySelector('input[type="radio"]').checked = false
    }else{
        showCustomAlert('Selecione uma tarefa')
    }
})
// Remove o elemento da caixa
btnremover.addEventListener("click", (evt)=>{
    const escolhido = selecionado()
    if (escolhido){
        escolhido.remove(criarNovaTarefa())
    }else{
        showCustomAlert('Selecione uma tarefa')
    }
})
