var num1=Math.random();
num1=Math.floor(num1*6)+1;
var num2=Math.random();
num2=Math.floor(num2*6)+1;
var img1="./images/"+"dice"+num1+".png";
var img2="./images/"+"dice"+num2+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",img1);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",img2);
if(num1>num2)
    document.querySelector("h1").innerHTML="Player 1 Wins";
else if(num1==num2)
    document.querySelector("h1").innerHTML="It's a Tie";
else
document.querySelector("h1").innerHTML="Player 2 Wins";

