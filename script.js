var display = document.getElementById('display');

var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');
var comecar = document.getElementById('comecar');

var cronometroSeg;
var minutoAtual;
var segundoAtual;

var interval; 

var numero = 200000;


function cronometroMinutos(){


    for(var i = 0; i <= 60; i++){
        minutos.innerHTML+='<option value="'+i+'"> '+i+' </option>';
    }
    

                
    

}
