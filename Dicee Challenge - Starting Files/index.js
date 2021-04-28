var randomNumber1=Math.floor(Math.random()*6+1);
var randomdiceimage="dice"+randomNumber1+".png";
var randomimagesource="images/"+randomdiceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);


var randomnumber2=Math.floor(Math.random()*6+1);
var randomdiceimage2="dice"+randomnumber2+".png";
var imagesource2="images/"+randomdiceimage2;
var secondimage=document.querySelectorAll("img")[1];
secondimage.setAttribute("src",imagesource2);

if(randomNumber1>randomnumber2)
{
  document.querySelector("h1").innerHTML="player 1 wins";

}
else if (randomnumber2>randomNumber1) {
  document.querySelector("h1").innerHTML="player 2 wins";

}
else{
  document.querySelector("h1").innerHTML="draw";

}
