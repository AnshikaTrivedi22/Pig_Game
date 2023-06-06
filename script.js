"use script";
const diceel=document.querySelector(".dice");
const score0=document.getElementById("score--0");
const score1=document.querySelector("#score--1");
const current0=document.querySelector("#current--0");
const current1=document.querySelector("#current--1");
const rolldice=document.querySelector(".btn--roll");
const btnNew=document.querySelector(".btn--new");
const btnHold=document.querySelector(".btn--hold");
const Player0=document.querySelector(".player--0");
const Player1=document.querySelector(".player--1");
diceel.classList.add('hidden');
score0.innerHTML=0;
score1.textContent=0;
let score=[0,0];
let currentScore=0;
let playing=true;
let activePlayer=0;
rolldice.addEventListener('click',function(){
  if(playing){
  const dice=Math.trunc(Math.random()*6)+1;
  diceel.src=`dice-${dice}.png`;
  diceel.classList.remove("hidden");
  
  if(dice!=1){
    currentScore+=dice;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
  }
  else{
    document.getElementById(`current--${activePlayer}`).textContent=0;
    if(activePlayer===1)
    activePlayer=0;
    else
    activePlayer=1;
    currentScore=0;
     Player0.classList.toggle("player--active");
     Player1.classList.toggle("player--active");
  }
}
});

btnHold.addEventListener('click',function(){
  if(playing){
  score[activePlayer]+=currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent=score[activePlayer];
 
  currentScore=0;
  if( score[activePlayer]>=20){
    diceel.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    playing=false;
  }
  else{
  document.querySelector(`#current--${activePlayer}`).textContent=0;
  if(activePlayer===1)
  activePlayer=0;
  else
  activePlayer=1;
  currentScore=0;
   Player0.classList.toggle("player--active");
   Player1.classList.toggle("player--active");
}
  }
});

btnNew.addEventListener('click',function(){
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  activePlayer=0;
  currentScore=0;
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
  document.querySelector(`#score--0`).textContent=0;
  document.querySelector(`#score--1`).textContent=0;
  current0.textContent=0;
  current1.textContent=0;
  playing=true;
  score=[0,0];
});
