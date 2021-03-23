const result = document.querySelector('#result');

const calculo = document.querySelector('#calc');
calculo.addEventListener('click', calculate, false);

const specie = document.querySelector('#specie');
specie.addEventListener('change',update,false);

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

     const option = specie.options[specie.selectedIndex].value;

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

     result.innerHTML =''
     
     if(optionspecie === "dog" && optionAge === "adult"){

          if(optionPhysicalActivity ===  "active"){
               amountAdtDog(ACTIVE_DOG);
          }
          else if (optionPhysicalActivity ===  "inactive"){
               amountAdtDog(INACTIVE_DOG);

          }else {
               amountAdtDog(VERY_ACTIVE_DOG);
          }
     } 

     else if(optionspecie === "dog" && optionAge === "puppy"){

          if(optionPhysicalActivity ===  "active"){
               amountPuppyDog(ACTIVE_DOG);
          }
          else if (optionPhysicalActivity ===  "inactive"){
               amountPuppyDog(INACTIVE_DOG);

          }else {
               amountPuppyDog(VERY_ACTIVE_DOG);
          }
   }
   
   else if(optionspecie === "cat" && optionAge === "adult"){
        amountAdtCat(INACTIVE_CAT);

     }else{
          amountPuppyCat(INACTIVE_CAT);

     }
     validateField();
}

function amountAdtDog(activity){

     result.innerHTML = `A quantidade diária recomendada é de: <font color="FF00">
          ${Math.floor(activity * ( size.value ** 0.75 ) / BASE_DOG_ADULT * 1000)}grs</font>`;  
     }  

function amountPuppyDog(activity){
         result.innerHTML =`A quantidade diária recomendada é de: <font color="FF00">
         ${Math.floor((activity + 2) * ( size.value ** 0.75 ) / BASE_DOG_PUPPY * 1000)}grs</font>`;  
    }     
    
function amountAdtCat(activity){

     result.innerHTML += `A quantidade diária recomendada é de: <font color="FF00">
     ${Math.floor(activity * ( size.value ** 0.67 ) / BASE_CAT_ADULT * 1000)}grs</font>`;  
}
function amountPuppyCat(activity){

     result.innerHTML=`A quantidade diária recomendada é de:<font color="FF00">
     ${Math.floor((activity + 2) * ( size.value ** 0.67 ) / BASE_CAT_PUPPY * 1000)}grs</font>`;  
}







