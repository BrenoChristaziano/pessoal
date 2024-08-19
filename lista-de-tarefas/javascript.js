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
    const criarcurso=(curso)=>{
        if(escolha[1].checked){
            let item = document.createElement('div')
            item.setAttribute("class","importante")
            item.innerHTML = curso
            lista.appendChild(item)
            escolha[1].checked = false
       }else if(escolha[0].checked){
            let item = document.createElement('div')
            item.setAttribute('class', 'normal')
            item.innerHTML = curso
            lista.appendChild(item)
            escolha[0].checked = false
       }
       return lista
    }
    tarefa.value = ''
    tarefa.focus()
 }
