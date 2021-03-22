let result = document.querySelector('#result');

let calculo = document.querySelector('#calc');
calculo.addEventListener('click', calcular, false);


result.innerHTML = ''
let optionspecie = '';
let optionAge = '';
let optionSize = '';
let optionPhysicalActivity = '';

const inactiveCat = 100;
const inactiveDog = 90;
const activeDog = 115;
const veryActiveDog = 140;

const baseDogAdult= 3795;
const baseDogPuppy= 3820;
const baseCatAdult = 4157;
const baseCatPuppy = 3919;


function update(){
      
     let select = document.querySelector('#specie')
     let option = select.options[select.selectedIndex].value

     if(option == "cat"){
          document.querySelector('#physicalActivity').style.display = "none"
     }

     result.innerHTML = '';
}

function calcular(){
    optionspecie = specie.value;
    optionAge = age.value;
    optionSize = size.value;
    optionPhysicalActivity = physicalActivity.value;
    especieIdade();
    
}

function validarcampos(){

     if(!optionSize){
          alert( 'Preencha todos os campos');
     };
}

function especieIdade(){
     
     if(optionspecie == "dog" && optionAge == "adult"){
          qtdCaoAdulto();
     }
     else if(optionspecie == "dog" && optionAge == "puppy"){
          qtdCaoFilhote();
     }
     else if(optionspecie == "cat" && optionAge == "adult"){
          qtdGatoAdulto();

     }else{
          qtdGatoFilhote();

     }
     validarcampos();
}

function qtdCaoAdulto(){

     if( optionPhysicalActivity == "inactive"){
          result.innerHTML = `A quantidade recomendada é de: 
          ${Math.floor(inactiveDog *( size.value ** 0.75 ) / baseDogAdult * 1000)}grs`; 
     }  
     else if(optionPhysicalActivity == "active"){
          result.innerHTML =`A quantidade recomendada é de: 
          ${Math.floor(activeDog *( size.value ** 0.75 ) / baseDogAdult * 1000)}grs`;  
     }
     else{
          result.innerHTML =`A quantidade recomendada é de: 
          ${Math.floor(veryActiveDog *( size.value ** 0.75 ) / baseDogAdult * 1000)}grs`;  
     }
    
}
function qtdCaoFilhote(){

        if( optionPhysicalActivity == "inactive"){
          result.innerHTML =`A quantidade recomendada é de: 
          ${Math.floor((inactiveDog + 2) * ( size.value ** 0.75 ) / baseDogPuppy * 1000)}grs`;  
     }  
     else if(optionPhysicalActivity == "active"){
          result.innerHTML =`A quantidade recomendada é de: 
          ${Math.floor((activeDog + 2) * ( size.value ** 0.75 ) / baseDogPuppy * 1000)}grs`;  
     }
     else{
          result.innerHTML =`A quantidade recomendada é de: 
          ${Math.floor((veryActiveDog + 2) * ( size.value ** 0.75 ) / baseDogPuppy * 1000)}grs`;  
     }
}

function qtdGatoAdulto(){

     result.innerHTML += `A quantidade recomendada é de: 
     ${Math.floor(inactiveCat * ( size.value ** 0.67 ) / baseCatAdult * 1000)}grs`;  
}
function qtdGatoFilhote(){

     result.innerHTML=`A quantidade recomendada é de: 
     ${Math.floor((inactiveCat + 2) * ( size.value ** 0.67 ) / baseCatPuppy * 1000)}grs`;  
}



