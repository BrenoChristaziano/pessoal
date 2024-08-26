const tarefa = document.querySelector('#tarefa')
const Normal = document.querySelector('#normal')
const importante = document.querySelector('#importante')
const btnadicionar = document.querySelector('#adicionar')
const btnconcluido = document.querySelector('#concluido')
const btnpendente = document.querySelector('#pendente')
const btnremover = document.querySelector('#remover')
const caixa = document.querySelector('#caixaRolagem')

const radio=(name)=>{
    const radio = document.createElement('input')
    radio.setAttribute('type', 'radio')
    radio.setAttribute('name', name)
    return radio
}
const criarnonaTarefa =(tarefa)=>{
    const novoelemento = document.createElement('div') 
    if(Normal.checked){
        novoelemento.setAttribute('class', 'normal')
    }else{
        novoelemento.setAttribute('class', 'importante')
    }
    novoelemento.innerHTML = tarefa
    novoelemento.appendChild(radio())
    return novoelemento
}
btnadicionar.addEventListener("click",(evt)=>{
    if (tarefa.value && Normal.checked) {
        const novoElemento = criarnonaTarefa(tarefa.value)
        caixa.appendChild(novoElemento);
          
        tarefa.value = ''
    
        Normal.checked = false
    } else if (tarefa.value && importante.checked){
        const novoElemento = criarnonaTarefa(tarefa.value)
        caixa.appendChild(novoElemento);
          
        tarefa.value = ''
    
        importante.checked = false
    } else if(tarefa.value == ''){ 
        alert('Por favor, digite uma tarefa.')
    } else if (Normal != Normal.checked && importante != importante.checked) {
        alert('Por favor, selecione a opção.')
    }
    
})

btnconcluido.addEventListener("click", (evt) => {
    const radios = document.querySelectorAll('input[type="radio"][name="task"]')
    let radioSelecionado = null
    
    for (const radio of radios) {
        if (radio.checked) {
            radioSelecionado = radio
            break
        }
    }
    
    if (radioSelecionado) {
        radioSelecionado.classList.add('concluido')
    } else {
        window.alert("Selecione uma tarefa")
    }
});
