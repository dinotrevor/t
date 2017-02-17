// starts game
function rid() {
document.getElementById("moo").style.display = "none";
document.getElementById("cat").style.display = "block";
document.getElementById("scoreboard").style.display = "block";
document.getElementById("rules").style.display = "none";
document.getElementById("inside").innerHTML = "Good Luck!";
}

///////////////////////////////////////////////////////////////////////////////blue col.
var score = 0;
function quest1() {
var answer = prompt("This actor played Llyod Christmas in Dumb and Dumber.");
if (answer == "Who is Jim Carrey?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 1000;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -1000;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish1();
}

function quest2() {
var answer2 = prompt("In this year, NATO was formed.");
if (answer2 == "What is 1949?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 900;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -900;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish2();
}
function quest3() {
var answer3 = prompt("This state is the Evergreen state.");
if (answer3 == "What is Washington?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 800;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -800;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish3();
}
function quest4() {
var answer4 = prompt("This group sang the song 'Hey Jude'.");
if (answer4 == "Who are The Beatles?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 700;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -700;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish4();

}

function quest5() {
var answer5 = prompt("This is the 47th state.");
if (answer5 == "What is New Mexico?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 600;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -600;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish5();
}
function quest6() {
var answer6 = prompt("If following this order -Kingdom,Phylum,Class,Order,Family,'',Species-; '' should be.");
if (answer6 == "What is Genus?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 500;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -500;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish6();
}

////////////////////////////////////////////////////////////////////////////////////////// red col.

function quest7() {
var answer7 = prompt("This director is famous for his metal music and his movie The Devil's Rejects.");
if (answer7 == "Who is Rob Zombie?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 1000;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -1000;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish7();
}

function quest8() {
var answer8 = prompt("Geore Washington died in this year.");
if (answer8 == "What is 1799?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 900;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -900;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish8();
}

function quest9() {
var answer9 = prompt("This country borders Venezuela to east.");
if (answer9 == "What is Colombia?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 800;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -800;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish9();
}

function quest10() {
var answer10 = prompt("This is the name of Gumby's horse.");
if (answer10 == "Who is Pokey?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 700;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -700;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish10();
}
function quest11() {
var answer11 = prompt("Walmart is to Target : as Samsung is to '______'.");
if (answer11 == "What is Apple?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 600;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -600;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish11();
}

function quest12() {
var answer12 = prompt("This planet has Titan as one of its moons.");
if (answer12 == "What is Saturn?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 500;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -500;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish12();
}

////////////////////////////////////////////////////////////////////////////////////////yellow col.
function quest13() {
var answer13 = prompt("Led the group Queen for a long time, has an element in his name.");
if (answer13 == "Who is Freddie Mercury?") {
document.getElementById("inside").innerHTML = "That is Right";
score += 1000;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -1000;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish13();

}
function quest14() {
var answer14 = prompt("This country has the 2nd most amount of people by population on Earth.");
if (answer14 == "What is India?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 900;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -900;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish14();
}
function quest15() {
var answer15 = prompt("This state is the Evergreen state.");
if (answer15 == "What is Washington?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 800;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -800;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish15();
}
function quest16() {
var answer16 = prompt("This director is famous for his metal music and his movie The Devil's Rejects.");
if (answer16 == "Who is Rob Zombie?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 700;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -700;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish16();
}
function quest17() {
var answer17 = prompt("If following this order -Kingdom,Phylum,Class,Order,Family,'',Species-; '' should be.");
if (answer17 == "What is Genus?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 600;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -600;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish17();
}
function quest18() {
var answer18 = prompt("This planet has Titan as one of its moons.");
if (answer18 == "What is Saturn?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 500;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -500;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish18();
}

////////////////////////////////////////////////////////////////////////////////////green col.
function quest19() {
var answer19 = prompt("The quietest of all presidents, 30th president of U.S.");
if (answer19 == "Who is Calvin Coolidge?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 1000;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -1000;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish19();

}
function quest20() {
var answer20 = prompt("The Axis powers consisted of Germany, Japan, and  '_______'.");
if (answer20 == "What is Italy?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 900;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -900;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish20();
}
function quest21() {
var answer21 = prompt("I am the 2nd largest island in Hawai'i.");
if (answer21 == "What is Maui?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 800;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -800;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish21();
}
function quest22() {
var answer22 = prompt("The movie Grease came out in this year.");
if (answer22 == "Who is 1978?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 700;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -700;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish22();
}
function quest23() {
var answer23 = prompt("I sang the song 'Kiss', and I passed away in 2016");
if (answer23 == "Who is Prince?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 600;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -600;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish23();
}
function quest24() {
var answer24 = prompt("This body in space is no longer a planet as of August 2006.");
if (answer24 == "What is Pluto?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 500;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -500;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish24();
}

///////////////////////////////////////////////////////////////////grey col.
function quest25() {
var answer25 = prompt("Inspirational painter who always considers anothers company.");
if (answer25 == "Who is Bob Ross?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 1000;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -1000;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish25();

}
function quest26() {
var answer26 = prompt("This was the year the Creation Of Isreal took place making it an official nation.");
if (answer26 == "What is 1948?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 900;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -900;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish26();
}
function quest27() {
var answer27 = prompt("This state contains the landmark Mt. Rushmore.");
if (answer27 == "What is South Dakota?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 800;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -800;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish27();
}
function quest28() {
var answer28 = prompt("The Undertaker and Kane are two characters from WWE, WWE stands for '____________'.");
if (answer28 == "What is World Wrestling Entertainment?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 700;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -700;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish28();
}
function quest29() {
var answer29 = prompt("This is fermented and seasoned cabbage, common in Korea.");
if (answer29 == "What is Kimchi?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 600;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -600;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish29();
}
function quest30() {
var answer30 = prompt("2nd planet from the Sun.");
if (answer30 == "What is Venus?") {
document.getElementById("inside").innerHTML = "That is Right!";
score += 500;
document.getElementById("score").innerHTML = "$$$: " + score;
} else {
document.getElementById("inside").innerHTML = "That is Wrong!";
score += -500;
document.getElementById("score").innerHTML = "$$$: " + score;
}
vanish30();
}


///////////////////////////////////////////////////////////////////////////// hides blue buttons
function vanish1() {
document.getElementById("button1").style.display = "none"; 
}
function vanish2() {
document.getElementById("button2").style.display = "none"; 
}
function vanish3() {
document.getElementById("button3").style.display = "none"; 
}
function vanish4() {
document.getElementById("button4").style.display = "none"; 
}
function vanish5() {
document.getElementById("button5").style.display = "none"; 
}
function vanish6() {
document.getElementById("button6").style.display = "none"; 
}

///////////////////////////////////////////////////////////////////////////// hides red buttons
function vanish7() {
document.getElementById("button7").style.display = "none"; 
}
function vanish8() {
document.getElementById("button8").style.display = "none"; 
}
function vanish9() {
document.getElementById("button9").style.display = "none"; 
}
function vanish10() {
document.getElementById("button10").style.display = "none"; 
}
function vanish11() {
document.getElementById("button11").style.display = "none"; 
}
function vanish12() {
document.getElementById("button12").style.display = "none"; 
}

///////////////////////////////////////////////////////////////////// hides yellow buttons
function vanish13() {
document.getElementById("button13").style.display = "none"; 
}
function vanish14() {
document.getElementById("button14").style.display = "none"; 
}
function vanish15() {
document.getElementById("button15").style.display = "none"; 
}
function vanish16() {
document.getElementById("button16").style.display = "none"; 
}
function vanish17() {
document.getElementById("button17").style.display = "none"; 
}
function vanish18() {
document.getElementById("button18").style.display = "none"; 
}

////////////////////////////////////////////////////////////////////////// hides green buttons
function vanish19() {
document.getElementById("button19").style.display = "none"; 
}
function vanish20() {
document.getElementById("button20").style.display = "none"; 
}
function vanish21() {
document.getElementById("button21").style.display = "none"; 
}
function vanish22() {
document.getElementById("button22").style.display = "none"; 
}
function vanish23() {
document.getElementById("button23").style.display = "none"; 
}
function vanish24() {
document.getElementById("button24").style.display = "none"; 
}

/////////////////////////////////////////////////////////////hides grey buttons
function vanish25() {
document.getElementById("button25").style.display = "none"; 
}
function vanish26() {
document.getElementById("button26").style.display = "none"; 
}
function vanish27() {
document.getElementById("button27").style.display = "none"; 
}
function vanish28() {
document.getElementById("button28").style.display = "none"; 
}
function vanish29() {
document.getElementById("button29").style.display = "none"; 
}
function vanish30() {
document.getElementById("button30").style.display = "none"; 
}