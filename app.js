//Pag1 Bienvenida
document.getElementsByTagName("h1")[0].style.fontSize = "50px";

const btn= document.getElementById('btn-empezar');
const btn1=document.getElementById('btn-item1');
const btn2=document.getElementById('btn-item2');
const btn3=document.getElementById('final');
const btn4=document.getElementById('final1')
let iniciar = document.getElementById('iniciar')
let  culturagen= document.getElementById('culturagen')
let musica = document.getElementById('musica')
let items =document.getElementById('items')
let finalizar=document.getElementById('finalizar')

btn.addEventListener('click', function(){
  const nameUser = document.getElementById('name').value;
  alert("Hola " +nameUser+ " tienes 2 opciones para jugar, empecemos." );
  iniciar.style.display = 'none';
  items.style.display = 'block';
})

btn1.addEventListener('click', function(){
   items.style.display = 'none';
   culturagen.style.display = 'block';
 })

btn2.addEventListener('click',function(){
  items.style.display = 'none';
  musica.style.display = 'block';
})
btn3.addEventListener('click', function(){
  if (question1=="Ruth Shady"){
  correct++;
  }
  if (question2=="Cusco"){
    correct++;
  }
  if (question3=="El Soberano del Imperio Incaico"){
    correct++;
  }
  let messages =["Muy Bueno","No lo hiciste mal","Aún puedes mejorar"];
  let range;
  if (correct < 1){
    range = 2;
  }
  if (correct > 0 && correct < 3){
    range = 1;
  }
  if (correct > 2){
    range = 0;
  }
  items.style.display='none';
  culturagen.style.display='none';
})
btn4.addEventListener('click',function(){
  if (question4=="Chuck Berry"){
  correct++;
  }
  if (question5=="San Francisco"){
    correct++;
  }
  if (question6=="Jimi Hendrix"){
    correct++;
  }
  let messages =["Muy Bueno","No lo hiciste mal","Aún puedes mejorar"];
  let range;
  if (correct < 1){
    range = 2;
  }
  if (correct > 0 && correct < 3){
    range = 1;
  }
  if (correct > 2){
    range = 0;
  }
  items.style.display='none';
  musica.style.display='none';
})
