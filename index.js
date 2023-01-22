const btnTarefa = document.querySelector('.btn-tarefa');
const inputtarefa = document.querySelector('.input-tarefa');
const tarefas = document.querySelector('.tarefas');


 function criaLi(){
    const li = document.createElement('li')
    return li;
 }

    function limparinput (){
        inputtarefa.value = '';
        inputtarefa.focus();
    }

    function criaBotao(li){
        li.innerText += '';
        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'Remover tarefa'
        botaoApagar.setAttribute('class','apagar')
        li.appendChild(botaoApagar);
    }


    function criaTarefa (textoInput) {
      const li = criaLi();
      li.innerHTML = textoInput;
      tarefas.appendChild(li);
      li.style.marginLeft = "88px";
      li.style.listStyle = "none";
      li.style.display = "flex";
      li.style.gap = "13px";
      limparinput()
      criaBotao(li)
    }

    


 btnTarefa.addEventListener('click',function(){
    if(!inputtarefa.value) return;
    criaTarefa(inputtarefa.value)
    
 })

  document.addEventListener('click',function(evento){
    const el = evento.target;
    

    if(el.classList.contains('apagar'))
    el.parentElement.remove();
    salvarTarefas();
  });


  function salvarTarefas() {
   const liTarefas = tarefas.querySelectorAll('li');
   const listaDeTarefas = [];
 
   for (let tarefa of liTarefas) {
     let tarefaTexto = tarefa.innerText;
     tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
     listaDeTarefas.push(tarefaTexto);
   }
 
   const tarefasJSON = JSON.stringify(listaDeTarefas);
   localStorage.setItem('tarefas', tarefasJSON);
 }
 
 function adicionaTarefasSalvas() {
   const tarefas = localStorage.getItem('tarefas');
   const listaDeTarefas = JSON.parse(tarefas);
 
   for(let tarefa of listaDeTarefas) {
     criaTarefa(tarefa);
   }
 }
 adicionaTarefasSalvas();