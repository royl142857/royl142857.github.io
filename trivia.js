var n = 0
var i = 1
var o = 0
function support(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (o===0){
    y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        n=n+1
    }
    else {
        document.getElementById("question").value="You are wrong"
        n=n
    }
    document.view.qscore.value=n
}
else if (o===1){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        n= n+1
    }
    else {
        document.getElementById("question").value="You are wrong"
        n= n
    }
    document.view.qscore.value=n
}
else if (o===2){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        n=n+1
    }
    else {
        document.getElementById("question").value="You are wrong"
        n=n
    }
    document.view.qscore.value=n
}
else if (o===3){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        n=n+1
    }
    else {
        document.getElementById("question").value="You are wrong"
        n=n
    }
    document.view.qscore.value=n
}
else if (o===4){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        n=n+1
    }
    else {
        document.getElementById("question").value="You are wrong"
        n=n
    }
    document.view.qscore.value=n
}
else if (o===5){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        n=n+1
    }
    else {
        document.getElementById("question").value="You are wrong"
        n=n
    }
    document.view.qscore.value=n
}
else if (o===6){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        n=n+1
    }
    else {
        document.getElementById("question").value="You are wrong"
        n=n
    }
    document.view.qscore.value=n
}
else if (o===7){ 
    y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        n=n+1
    }
    else {
        document.getElementById("question").value="You are wrong"
        n=n
    }
    document.view.qscore.value=n
}
else if (o===8){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        n=n+1
    }
    else {
        document.getElementById("question").value="You are wrong"
        n=n
    }
    document.view.qscore.value=n
}
    else if (o===9){
    y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        n=n+1
    }
    else {
        document.getElementById("question").value="You are wrong"
        n=n
    }
    document.view.qscore.value=n
}
	o++; 
}
function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
    document.view.qscore.value=0;
	document.view.question.value ="Which one of these is a percussion instrument? \na)Trumpet \nb)Euphonium \nc)Viola \nd)Glockenspiel";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which one of these songs did Ludwig van Beethoven write? \na)Ode to Joy \nb)To a Wild Rose \nc)Rejoice \nd)Hallelujah Chorus";
    document.view.qans.value=""
}
else if (i===3){ 
	document.view.qnum.value=i; 
	document.view.question.value ="Who wrote Comedian's Dance? \na)Mozart \nb)Beethoven \nc)Kabalevsky \nd)Handel";
    document.view.qans.value=""
}
else if (i===4){ 
	document.view.qnum.value=i; 
	document.view.question.value ="Which one of these is the right scale? \na)12345678 \nb)Do Re Mi Fa So La Ti Do \nc)Do Re Mi Fa La So Ti Do \nd)Abcdefghijklmn";
    document.view.qans.value=""
}
else if (i===5){ 
	document.view.qnum.value=i; 
	document.view.question.value ="The Forces Sweetheart was a nickname given to which 1940s female star? \na)Vera Lynn \nb)Kay Starr \nc)Rosemary Clooney \nd)Justin Bieber";
    document.view.qans.value=""
}
else if (i===6){ 
	document.view.qnum.value=i; 
	document.view.question.value ="Mysteriously disappearing in February of 1995, Richey Edwards was a member of which rock band? \na)The Stone Roses \nb)Stereophonics \nc)Manic Street Preachers \nd)Pink Floyd";
    document.view.qans.value=""
}
else if (i===7){ 
	document.view.qnum.value=i;
	document.view.question.value ="Who originally played the drums with The Beatles? \na)Ringo Starr \nb)Stuart Sutcliffe \nc)Pete Best \nd)John Bonham";
    document.view.qans.value=""
}
else if (i===8){ 
	document.view.qnum.value=i;
	document.view.question.value ="The term MIDI stands for...? \na)Musical Instrument Digital Interface \nb)Multiple Intelligence Dynamic Interface \nc)Musical Instruments Drummers Incorporated \nd)Music Industry Digital Image";
    document.view.qans.value=""
}
else if (i===9){ 
	document.view.qnum.value=i; 
	document.view.question.value ="Step-time mode in music technology means that you...? \na)Play the music louder. \nb)Enter the notes into the computer one at a time. \nc)Dance to the music. \nd)Go back and play a section of music again.";
    document.view.qans.value=""
}
else if (i===10){
	document.view.qnum.value=i;	
	document.view.question.value ="What is the term used for composing music by writing a melody forwards, backwards, then performing the song? \na)Retrograde \nb)Legato \nc)Theme and variation \nd) Reverse";
    document.view.qans.value=""
}
else if (i===11){
    alert("You got"+ " " + n*10  + "% for this Trivia Quiz")
}
	i++; 
}