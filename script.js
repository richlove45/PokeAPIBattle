$(document).ready(function(){
 
 let pokemon= {
 	name:"richie",
 	attack: 2500
 	 
 }

//starter function to pull a random pokemon from the PokeAPI
  function getRandomPokemonLeft() {
    let randomNumber = Math.floor(Math.random() * 800) + 1;
    $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then(function(pokeData){
      console.log("Left Pokemon Data: ", pokeData);
      console.log(pokeData.name);
      $("#left").empty();
      $("#left").append(`<h1> ${pokeData.name}</h1>`)
    });
  }
  function getRandomPokemonRight() {
    let randomNumber = Math.floor(Math.random() * 800) + 1;
    $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then(function(pokeData){
      console.log("Right Pokemon Data: ", pokeData);
       console.log(pokeData.name);
       $("#right").empty();
      $("#right").append(`<h1> ${pokeData.name}</h1>`)
    });
    
  }
 $("#leftButton").click(getRandomPokemonLeft);
 $("#rightButton").click(getRandomPokemonRight);
  
//all code here





})
