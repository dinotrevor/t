
//**Correct answers add a point to score and wrong answers add one to the wrongs.

var score = 0;
var wrong = 0;

var elements = document.getElementsByTagName("button");

function rev(){
elements.style.color = "black";}

function add2() {
wrong += 1;
document.getElementById("wrong").innerHTML = "Wrong: " + wrong; }

function add1() {
score += 1;
document.getElementById("correct").innerHTML = "Correct: " + score; }

//*********************************************************
//*********************************************************
//**Gets rid of the instructions at the beginning of game.

function rid() {
document.getElementById("instruct").style.display = "none";
document.getElementById("one").style.display = "block";
}

//*********************************************************
//*********************************************************
//**This is the 50-50 lifeline.

function help(){
var wans = document.querySelectorAll("[class='button2']");
for(var i = 0; i < wans.length; i++) 
  wans[i].style.display='none';
document.getElementById("lifeline").style.display = "none";
}

function help2() {
var wans = document.querySelectorAll("[class='button2']");
for(var i = 0; i < wans.length; i++) 
  wans[i].style.display='inline-block';
}

//**********************************************************
//*********************************************************
//Change questions

function change() {
document.getElementById("two").style.display = "block";
document.getElementById("one").style.display = "none";
}

function change2() {
document.getElementById("three").style.display = "block";
document.getElementById("two").style.display = "none";
}

function change3() {
document.getElementById("four").style.display = "block";
document.getElementById("three").style.display = "none";

}

function change4() {
document.getElementById("five").style.display = "block";
document.getElementById("four").style.display = "none";
}

function change5() {
document.getElementById("six").style.display = "block";
document.getElementById("five").style.display = "none";
}

function change6() {
document.getElementById("seven").style.display = "block";
document.getElementById("six").style.display = "none";
}

function change7() {
document.getElementById("eight").style.display = "block";
document.getElementById("seven").style.display = "none";
}

function change8() {
document.getElementById("nine").style.display = "block";
document.getElementById("eight").style.display = "none";
}

function change9() {
document.getElementById("ten").style.display = "block";
document.getElementById("nine").style.display = "none";

}

function change10() {
document.getElementById("eleven").style.display = "block";
document.getElementById("ten").style.display = "none";
}

function change11() {
document.getElementById("twelve").style.display = "block";
document.getElementById("eleven").style.display = "none";
}

//********************************************************
//*********************************************************
//**Displays Score

function change12() {
document.write("<p>You got " + score + " out of 12 questions correct.</p>");
 if (score === 12) {
     document.write("<p><strong> You are the master questionaire!</strong></p>")
} else if ( score >=  10) {
    document.write("<p><strong>You earned a gold crown!<!strong></p>");
} else if ( score >= 8) {
    document.write("<p><strong>You earned a silver crown!</strong></p>");
} else if ( score === 7) {
    document.write("<p><strong>You earned a bronze crown!</strong></p>");
}
}

//*********************************************************************************************************************************
//**Change button colors, prevent multiple clicks.

function setColor1(){
document.getElementById("button1").style.backgroundColor='#119911';
document.getElementById("button1").disabled = true; 
}
function setColor2(){
document.getElementById("button2").style.backgroundColor='#991111';
document.getElementById("button2").disabled = true;
}
function setColor3(){
document.getElementById("button3").style.backgroundColor='#991111';
document.getElementById("button3").disabled = true;
}
function setColor4(){
document.getElementById("button4").style.backgroundColor='#991111';
document.getElementById("button4").disabled = true;
}
function setColor5(){
document.getElementById("button5").style.backgroundColor='#991111';
document.getElementById("button5").disabled = true;
}
function setColor6(){
document.getElementById("button6").style.backgroundColor='#991111';
document.getElementById("button6").disabled = true;
}
function setColor7(){
document.getElementById("button7").style.backgroundColor='#991111';
document.getElementById("button7").disabled = true;
}
function setColor8(){
document.getElementById("button8").style.backgroundColor='#119911';
document.getElementById("button8").disabled = true;
}
function setColor9(){
document.getElementById("button9").style.backgroundColor='#991111';
document.getElementById("button9").disabled = true;
}
function setColor10(){
document.getElementById("button10").style.backgroundColor='#991111';
document.getElementById("button10").disabled = true;
}
function setColor11(){
document.getElementById("button11").style.backgroundColor='#119911';
document.getElementById("button11").disabled = true;
}
function setColor12(){
document.getElementById("button12").style.backgroundColor='#991111';
document.getElementById("button12").disabled = true;
}
function setColor13(){
document.getElementById("button13").style.backgroundColor='#991111';
document.getElementById("button13").disabled = true;
}
function setColor14(){
document.getElementById("button14").style.backgroundColor='#119911';
document.getElementById("button14").disabled = true;
}
function setColor15(){
document.getElementById("button15").style.backgroundColor='#991111';
document.getElementById("button15").disabled = true;
}
function setColor16(){
document.getElementById("button16").style.backgroundColor='#991111';
document.getElementById("button16").disabled = true;
}
function setColor17(){
document.getElementById("button17").style.backgroundColor='#991111';
document.getElementById("button17").disabled = true;
}
function setColor18(){
document.getElementById("button18").style.backgroundColor='#119911';
document.getElementById("button18").disabled = true;
}
function setColor19(){
document.getElementById("button19").style.backgroundColor='#991111';
document.getElementById("button19").disabled = true;
}
function setColor20(){
document.getElementById("button20").style.backgroundColor='#991111';
document.getElementById("button20").disabled = true;
}
function setColor21(){
document.getElementById("button21").style.backgroundColor='#991111';
document.getElementById("button21").disabled = true;
}
function setColor22(){
document.getElementById("button22").style.backgroundColor='#991111';
document.getElementById("button22").disabled = true;
}
function setColor23(){
document.getElementById("button23").style.backgroundColor='#991111';
document.getElementById("button23").disabled = true;
}
function setColor24(){
document.getElementById("button24").style.backgroundColor='#119911';
document.getElementById("button25").disabled = true;
}
function setColor25(){
document.getElementById("button25").style.backgroundColor='#991111';
document.getElementById("button25").disabled = true;
}
function setColor26(){
document.getElementById("button26").style.backgroundColor='#119911';
document.getElementById("button26").disabled = true;
}
function setColor27(){
document.getElementById("button27").style.backgroundColor='#991111';
document.getElementById("button27").disabled = true;
}
function setColor28(){
document.getElementById("button28").style.backgroundColor='#991111';
document.getElementById("button28").disabled = true;
}
function setColor29(){
document.getElementById("button29").style.backgroundColor='#119911';
document.getElementById("button29").disabled = true;
}
function setColor30(){
document.getElementById("button30").style.backgroundColor='#991111';
document.getElementById("button30").disabled = true;
}
function setColor31(){
document.getElementById("button31").style.backgroundColor='#991111';
document.getElementById("button31").disabled = true;
}
function setColor32(){
document.getElementById("button32").style.backgroundColor='#991111';
document.getElementById("button32").disabled = true;
}
function setColor33(){
document.getElementById("button33").style.backgroundColor='#991111';
document.getElementById("button33").disabled = true;
}
function setColor34(){
document.getElementById("button34").style.backgroundColor='#119911';
document.getElementById("button34").disabled = true;
}
function setColor35(){
document.getElementById("button35").style.backgroundColor='#991111';
document.getElementById("button35").disabled = true;
}
function setColor36(){
document.getElementById("button36").style.backgroundColor='#991111';
document.getElementById("button36").disabled = true;
}
function setColor37(){
document.getElementById("button37").style.backgroundColor='#119911';
document.getElementById("button37").disabled = true;
}
function setColor38(){
document.getElementById("button38").style.backgroundColor='#991111';
document.getElementById("button38").disabled = true;
}
function setColor39(){
document.getElementById("button39").style.backgroundColor='#991111';
document.getElementById("button39").disabled = true;
}
function setColor40(){
document.getElementById("button40").style.backgroundColor='#991111';
document.getElementById("button40").disabled = true;
}
function setColor41(){
document.getElementById("button41").style.backgroundColor='#991111';
document.getElementById("button41").disabled = true;
}
function setColor42(){
document.getElementById("button42").style.backgroundColor='#119911';
document.getElementById("button42").disabled = true;
}
function setColor43(){
document.getElementById("button43").style.backgroundColor='#991111';
document.getElementById("button43").disabled = true;
}
function setColor44(){
document.getElementById("button44").style.backgroundColor='#991111';
document.getElementById("button44").disabled = true;
}
function setColor45(){
document.getElementById("button45").style.backgroundColor='#119911';
document.getElementById("button45").disabled = true;
}
function setColor46(){
document.getElementById("button46").style.backgroundColor='#991111';
document.getElementById("button46").disabled = true;
}
function setColor47(){
document.getElementById("button47").style.backgroundColor='#991111';
document.getElementById("button47").disabled = true;
}
function setColor48(){
document.getElementById("button48").style.backgroundColor='#991111';
document.getElementById("button48").disabled = true;
}

//*********************************************************************************************************************************
//**Answers
function answer1() {
document.getElementById("dog").innerHTML="Yes! you are right!";      
add1();
}
function answer2() {
document.getElementById("dog").innerHTML="Sorry.";
add2 ();
}
function answer3() {
document.getElementById("dog").innerHTML="Wrong!";
add2 ();
}
function answer4() {
document.getElementById("dog").innerHTML="Nope. Try again.";
add2()
}
function answer5() {
document.getElementById("dog2").innerHTML="Nope. Try again.";
add2()
}
function answer6() {
document.getElementById("dog2").innerHTML="Nope. Try again.";
add2()
}
function answer7() {
document.getElementById("dog2").innerHTML="Sorry that is wrong.";
add2()
}
function answer8() {
document.getElementById("dog2").innerHTML="Correct!.";
add1();
}
function answer9() {
document.getElementById("dog3").innerHTML="Negative.";
add2()
}
function answer10() {
document.getElementById("dog3").innerHTML="That is false..";
add2()
}
function answer11() {
document.getElementById("dog3").innerHTML="Good job!";
add1();
}
function answer12() {
document.getElementById("dog3").innerHTML="That is false..";
add2()
}
function answer13() {
document.getElementById("dog4").innerHTML="Nope";
add2()
}
function answer14() {
document.getElementById("dog4").innerHTML="Right!";
add1();
}
function answer15() {
document.getElementById("dog4").innerHTML="That is false..";
add2()
}
function answer16() {
document.getElementById("dog4").innerHTML="Sorry that is wrong.";
add2()
}
function answer17() {
document.getElementById("dog5").innerHTML="Sorry that is wrong.";
add2()
}
function answer18() {
document.getElementById("dog5").innerHTML="Good job!";
add1();
if (score >= 5) {
    document.getElementById("line").style.display = "block";
} 
}
function answer19() {
document.getElementById("dog5").innerHTML="Try again.";
add2()
}
function answer20() {
document.getElementById("dog5").innerHTML="Nope not that one.";
add2()
}
function answer21() {
document.getElementById("dog6").innerHTML="Better luck next time.";
add2()
}
function answer22() {
document.getElementById("dog6").innerHTML="Nope.";
add2()
}
function answer23() {
document.getElementById("dog6").innerHTML="Sorry that is wrong.";
add2()
}
function answer24() {
document.getElementById("dog6").innerHTML="Correct answer.";
add1();
if (score >= 5) {
    document.getElementById("line").style.display = "block";
}
}
function answer25() {
document.getElementById("dog7").innerHTML="Not right.";
add2()
}
function answer26() {
document.getElementById("dog7").innerHTML="That is true.";
add1();
if (score >= 5) {
    document.getElementById("line").style.display = "block";
} 
}
function answer27() {
document.getElementById("dog7").innerHTML="Sorry that is wrong.";
add2()
}
function answer28() {
document.getElementById("dog7").innerHTML="That is false.";
add2()
}
function answer29() {
document.getElementById("dog8").innerHTML="Good job!.";
add1();
if (score >= 5) {
    document.getElementById("line").style.display = "block";
}
}
function answer30() {
document.getElementById("dog8").innerHTML="Better luck next time!.";
add2 ();
}
function answer31() {
document.getElementById("dog8").innerHTML="You gotta try harder!.";
add2()
}
function answer32() {
document.getElementById("dog8").innerHTML="Sorry that is wrong.";
add2()
}
function answer33() {
document.getElementById("dog9").innerHTML="No not that one.";
add2()
}
function answer34() {
document.getElementById("dog9").innerHTML="Yes, good job.";
add1();
if (score >= 5) {
    document.getElementById("line").style.display = "block";
}
}
function answer35() {
document.getElementById("dog9").innerHTML="Sorry that is wrong.";
add2()
}
function answer36() {
document.getElementById("dog9").innerHTML="You are wrong.";
add2()
}
function answer37() {
document.getElementById("dog10").innerHTML="That is true";
add1();
if (score >= 5) {
    document.getElementById("line").style.display = "block";
}
}
function answer38() {
document.getElementById("dog10").innerHTML="Sorry, try again.";
add2()
}
function answer39() {
document.getElementById("dog10").innerHTML="Sorry that is wrong.";
add2()
}
function answer40() {
document.getElementById("dog10").innerHTML="Wrong answer.";
add2()
}
function answer41() {
document.getElementById("dog11").innerHTML="No, that is wrong.";
add2()
}
function answer42() {
document.getElementById("dog11").innerHTML="Good job!.";
add1();
if (score >= 5) {
    document.getElementById("line").style.display = "block";
}

}
function answer43() {
document.getElementById("dog11").innerHTML="Wrong answer.";
add2()
}
function answer44() {
document.getElementById("dog11").innerHTML="Nope.";
add2()
}
function answer45() {
document.getElementById("dog12").innerHTML="Correct!.";
add1();
if (score >= 5) {
    document.getElementById("line").style.display = "block";
}
}
function answer46() {
document.getElementById("dog12").innerHTML="Sorry that is wrong.";
add2()
}
function answer47() {
document.getElementById("dog12").innerHTML="No not that one.";
add2()
}
function answer48() {
document.getElementById("dog12").innerHTML="Try again.";
add2()
}

