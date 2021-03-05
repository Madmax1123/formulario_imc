var pacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector(".Apagar-tabela");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
        event.target.parentNode.remove();
    },1300);

});
