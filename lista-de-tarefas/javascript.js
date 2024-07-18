function horario() {
    var data = new Date();
    var hora = data.getHours()
    var body = document.body

    if (hora >= 6 && hora <= 12) {
        body.style.background = '#306088';  // Manhã
    } else if (hora > 12 && hora <= 15) {
        body.style.background = '#efb979';  // Tarde
    } else if (hora > 15 &&  hora <= 18) {
        body.style.background = '#FF6600';
    }else {
        body.style.background = '#07072b';  // Noite
    }
}

function adicionar() {
     let tarefa = document.getElementById('tarefa')
     let escolha = document.getElementsByName('opcao')  /*Alterei para getElementsByName para capturar os elementos corretamente*/
     let opcaoselecionada = null
     let lista = document.getElementById('caixaRolagem')
     if (tarefa.value.trim().length === 0){// Usei trim() para remover espaços em branco extras
         window.alert('Digete alguma coisa, para entrar na lista.')
         return  // Retorna para sair da função se o campo estiver vazio
     }
     for(let i = 0; i < escolha.length; i++){
         if(escolha[i].checked){
             opcaoselecionada = true
             break;
         }
     }
     if(!opcaoselecionada){
         window.alert('Escolha o nivel de importancia')
         return // Retorna para sair da função se nenhum nível de importância estiver selecionado
    }
    if(escolha[1].checked){
         let item = document.createElement('option')
         item.textContent = tarefa.value
         item.style.color = 'red'
         lista.appendChild(item)
         escolha[1].checked = false
    }else if(escolha[0].checked){
         let item = document.createElement('option')
         item.textContent = tarefa.value
         lista.appendChild(item)
         escolha[0].checked = false
    }
    tarefa.value = ''
    tarefa.focus()
 }