//two random number genration whose values will be between 1 to 6

var randomNumber1 =Math.floor(Math.random() * 6) + 1;
var randomNumber2 =Math.floor(Math.random() * 6) + 1;

//making 2 string from those 2 random numbers

var source1="images/" + randomNumber1 + ".png";
var source2="images/" + randomNumber2 + ".png";

//changing the images

document.querySelectorAll("img")[0].setAttribute("src" , source1);
document.querySelectorAll("img")[1].setAttribute("src" , source2);

//changing the innerHTML of h1 tag

if( randomNumber1 > randomNumber2)
document.querySelector("h1").innerHTML="<span style='font-size:50px;'>&#128064;</span>Player 1 wins ";
else if(randomNumber1 < randomNumber2)
document.querySelector("h1").innerHTML="Player 2 wins<span style='font-size:50px;'>&#128064;</span> ";
else
document.querySelector("h1").innerHTML="<span style='font-size:50px;'>&#128064;</span> Draw <span style='font-size:50px;'>&#128064;</span>";
