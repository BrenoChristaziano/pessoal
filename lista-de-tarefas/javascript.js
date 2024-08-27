// Seletores
const tarefa = document.querySelector('#tarefa');
const Normal = document.querySelector('#normal');
const importante = document.querySelector('#importante');
const btnadicionar = document.querySelector('#adicionar');
const btnconcluido = document.querySelector('#concluido');
const btnpendente = document.querySelector('#pendente');
const btnremover = document.querySelector('#remover');
const caixa = document.querySelector('#caixaRolagem');

// Função para criar um input radio
const criarRadio = () => {
    const radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', 'tarefa');
    return radio;
};

// Função para criar uma nova tarefa
const criarNovaTarefa = (tarefaTexto) => {
    const novaDiv = document.createElement('div');

    if (Normal.checked) {
        novaDiv.classList.add('normal');
    } else if (importante.checked) {
        novaDiv.classList.add('importante');
    }

    novaDiv.innerHTML = tarefaTexto;
    novaDiv.appendChild(criarRadio());

    return novaDiv;
};

// Adicionar nova tarefa
btnadicionar.addEventListener('click', () => {
    if (tarefa.value.trim()) {
        if (Normal.checked || importante.checked) {
            const novoElemento = criarNovaTarefa(tarefa.value);
            caixa.appendChild(novoElemento);
            tarefa.value = '';
            Normal.checked = false;
            importante.checked = false;
        } else {
            alert('Por favor, selecione a opção.');
        }
    } else {
        alert('Por favor, digite uma tarefa.');
    }
});

// Marcar tarefa como concluída
btnconcluido.addEventListener('click', () => {
    const radios = document.querySelectorAll('input[type="radio"][name="tarefa"]');
    let radioSelecionado = null;

    for (const radio of radios) {
        if (radio.checked) {
            radioSelecionado = radio.parentElement; // Pega o pai do radio (o div com a tarefa)
            break;
        }
    }

    if (radioSelecionado) {
        radioSelecionado.classList.add('concluido');
        console.log('Classe concluído adicionada com sucesso:', radioSelecionado);
    } else {
        alert('Selecione uma tarefa');
    }
});

// Função para marcar a tarefa como pendente
btnpendente.addEventListener('click', () => {
    const radios = document.querySelectorAll('input[type="radio"][name="tarefa"]');
    let radioSelecionado = null;

    for (const radio of radios) {
        if (radio.checked) {
            radioSelecionado = radio.parentElement; // Pega o pai do radio (o div com a tarefa)
            break;
        }
    }

    if (radioSelecionado) {
        radioSelecionado.classList.remove('concluido');
        radioSelecionado.classList.add('pendente');
        console.log('Classe pendente adicionada com sucesso:', radioSelecionado);
    } else {
        alert('Selecione uma tarefa');
    }
});

// Função para remover a tarefa selecionada
btnremover.addEventListener('click', () => {
    const radios = document.querySelectorAll('input[type="radio"][name="tarefa"]');
    let radioSelecionado = null;

    for (const radio of radios) {
        if (radio.checked) {
            radioSelecionado = radio.parentElement; // Pega o pai do radio (o div com a tarefa)
            break;
        }
    }

    if (radioSelecionado) {
        radioSelecionado.remove();
        console.log('Tarefa removida com sucesso:', radioSelecionado);
    } else {
        alert('Selecione uma tarefa');
    }
});

// const tarefa = document.querySelector('#tarefa')
// const Normal = document.querySelector('#normal')
// const importante = document.querySelector('#importante')
// const btnadicionar = document.querySelector('#adicionar')
// const btnconcluido = document.querySelector('#concluido')
// const btnpendente = document.querySelector('#pendente')
// const btnremover = document.querySelector('#remover')
// const caixa = document.querySelector('#caixaRolagem')

// const radio=(name)=>{
//     const radio = document.createElement('input')
//     radio.setAttribute('type', 'radio')
//     radio.setAttribute('name', 'tarefa')
//     return radio
// }
// const criarnonaTarefa =(tarefa)=>{
//     const novoelemento = document.createElement('div') 
//     if(Normal.checked){
//         novoelemento.setAttribute('class', 'normal ')
//     }else{
//         novoelemento.setAttribute('class', 'importante ')
//     }
//     novoelemento.innerHTML = tarefa
//     novoelemento.appendChild(radio())
//     return novoelemento
// }
// btnadicionar.addEventListener("click",(evt)=>{
//     if (tarefa.value) {
//         if (Normal.checked || importante.checked) {
//             const novoElemento = criarnonaTarefa(tarefa.value)
//             if (novoElemento) {
//                 caixa.appendChild(novoElemento)
//                 tarefa.value = ''
//                 Normal.checked = false
//                 importante.checked = false
//             }
//         } else {
//             alert('Por favor, selecione a opção.')
//         }
//     } else {
//         alert('Por favor, digite uma tarefa.')
//     }
// })

// btnconcluido.addEventListener("click", (evt) => {
//     const radios = document.querySelectorAll('input[type="radio"][name="tarefa"]')
//     let radioSelecionado = null
    
//     for (const radio of radios) {
//         if (radio.checked) {
//             radioSelecionado = radio
//             break
//         }
//     }
    
//     if (radioSelecionado) {
//         radioSelecionado.classList.add('concluido')
//         console.log('class acionada com suseso', radioSelecionado)
//     } else {
//         window.alert("Selecione uma tarefa")
//     }
// })
