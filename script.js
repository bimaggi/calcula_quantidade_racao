const result = document.querySelector('#result');

const calculo = document.querySelector('#calc');
calculo.addEventListener('click', calculate, false);

const specie = document.querySelector('#specie')
specie.addEventListener('change',update,false)


result.innerHTML = ''
let optionspecie = '';
let optionAge = '';
let optionSize = '';
let optionPhysicalActivity = '';

const INACTIVE_CAT = 100;
const INACTIVE_DOG = 90;
const ACTIVE_DOG = 115;
const VERY_ACTIVE_DOG = 140;

const BASE_DOG_ADULT= 3795;
const BASE_DOG_PUPPY= 3820;
const BASE_CAT_ADULT = 4157;
const BASE_CAT_PUPPY = 3919;


function update(){
     const option = specie.options[specie.selectedIndex].value

     if(option == "cat"){
          document.querySelector('#physicalActivity').style.display = "none"
     }else{
          document.querySelector('#physicalActivity').style.display = "block"
     }

     result.innerHTML = '';
}

function calculate(){
    optionspecie = specie.value;
    optionAge = age.value;
    optionSize = size.value;
    optionPhysicalActivity = physicalActivity.value;
    specieAge();
    
}

function validateField(){

     if(!optionSize){
          alert( 'Preencha todos os campos');
     };
}

function specieAge(){
     
     if(optionspecie == "dog" && optionAge == "adult"){
          amountAdtDog();
     }
     else if(optionspecie == "dog" && optionAge == "puppy"){
          amountPuppyDog();
     }
     else if(optionspecie == "cat" && optionAge == "adult"){
          amountAdtCat();

     }else{
          amountPuppyCat();

     }
     validateField();
}

function amountAdtDog(){

     if( optionPhysicalActivity == "inactive"){
          result.innerHTML = `A quantidade recomendada é de: 
          ${Math.floor(INACTIVE_DOG *( size.value ** 0.75 ) / BASE_DOG_ADULT * 1000)}grs`; 
     }  
     else if(optionPhysicalActivity == "active"){
          result.innerHTML =`A quantidade recomendada é de: 
          ${Math.floor(ACTIVE_DOG *( size.value ** 0.75 ) / BASE_DOG_ADULT * 1000)}grs`;  
     }
     else{
          result.innerHTML =`A quantidade recomendada é de: 
          ${Math.floor(VERY_ACTIVE_DOG *( size.value ** 0.75 ) / BASE_DOG_ADULT * 1000)}grs`;  
     }
    
}
function amountPuppyDog(){

        if( optionPhysicalActivity == "inactive"){
          result.innerHTML =`A quantidade recomendada é de: 
          ${Math.floor((INACTIVE_DOG + 2) * ( size.value ** 0.75 ) / BASE_DOG_PUPPY * 1000)}grs`;  
     }  
     else if(optionPhysicalActivity == "active"){
          result.innerHTML =`A quantidade recomendada é de: 
          ${Math.floor((ACTIVE_DOG + 2) * ( size.value ** 0.75 ) / BASE_DOG_PUPPY * 1000)}grs`;  
     }
     else{
          result.innerHTML =`A quantidade recomendada é de: 
          ${Math.floor((VERY_ACTIVE_DOG + 2) * ( size.value ** 0.75 ) / BASE_DOG_PUPPY * 1000)}grs`;  
     }
}

function amountAdtCat(){

     result.innerHTML += `A quantidade recomendada é de: 
     ${Math.floor(INACTIVE_CAT * ( size.value ** 0.67 ) / BASE_CAT_ADULT * 1000)}grs`;  
}
function amountPuppyCat(){

     result.innerHTML=`A quantidade recomendada é de: 
     ${Math.floor((INACTIVE_CAT + 2) * ( size.value ** 0.67 ) / BASE_CAT_PUPPY * 1000)}grs`;  
}



