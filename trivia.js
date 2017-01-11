var i = 1;
var s = 0;
function main() {
if (i === 1) { 
	document.view.qnum.value=i;
	document.view.question.value ="1. Which one of these is a percussion instrument? \na)Trumpet \nb)Euphonium \nc)Viola \nd)Glockenspiel";
	correct="d";
	ans=prompt(i+'.)    ENTER LETTER >>   a,   b,   c,   d');
}
else if (i === 2) { 
	document.view.qnum.value=i; 
	document.view.question.value ="2. Which one of these songs did Ludwig van Beethoven write? \na)Ode to Joy \nb)To a Wild Rose \nc)Rejoice \nd)Hallelujah Chorus";
	correct="a";
	ans=prompt(i+'.)    ENTER LETTER >>   a,   b,   c,   d'); 
}
else if (i === 3) { 
	document.view.qnum.value=i; 
	document.view.question.value ="3. Who wrote Comedian's Dance? \na)Mozart \nb)Beethoven \nc)Kabalevsky \nd)Handel";
	correct="c";
	ans=prompt(i+'.)    ENTER LETTER >>   a,   b,   c,   d'); 
}
else if (i === 4) { 
	document.view.qnum.value=i; 
	document.view.question.value ="4. Which one of these is the right scale? \na)12345678 \nb)Do Re Mi Fa So La Ti Do \nc)Do Re Mi Fa La So Ti Do \nd)Abcdefghijklmn";
	correct="b";
	ans=prompt(i+'.)    ENTER LETTER >>   a,   b,   c,   d'); 
}
else if (i === 5) { 
	document.view.qnum.value=i; 
	document.view.question.value ="5. The Forces Sweetheart was a nickname given to which 1940s female star? \na)Vera Lynn \nb)Kay Starr \nc)Rosemary Clooney \nd)Justin Bieber";
	correct="a";
	ans=prompt(i+'.)    ENTER LETTER >>   a,   b,   c,   d'); 
}
else if (i === 6) { 
	document.view.qnum.value=i; 
	document.view.question.value ="6. Mysteriously disappearing in February of 1995, Richey Edwards was a member of which rock band? \na)The Stone Roses \nb)Stereophonics \nc)Manic Street Preachers \nd)Pink Floyd";
	correct="c";
	ans=prompt(i+'.)    ENTER LETTER >>   a,   b,   c,   d'); 
}
else if (i === 7) { 
	document.view.qnum.value=i; 
	document.view.question.value ="7. Who originally played the drums with The Beatles? \na)Ringo Starr \nb)Stuart Sutcliffe \nc)Pete Best \nd)John Bonham";
	correct="c";
	ans=prompt(i+'.)    ENTER LETTER >>   a,   b,   c,   d'); 
}
else if (i === 8) { 
	document.view.qnum.value=i; 
	document.view.question.value ="8. The term MIDI stands for...? \na)Musical Instrument Digital Interface \nb)Multiple Intelligence Dynamic Interface \nc)Musical Instruments Drummers Incorporated \nd)Music Industry Digital Image";
	correct="a";
	ans=prompt(i+'.)    ENTER LETTER >>   a,   b,   c,   d'); 
}
else if (i === 9) { 
	document.view.qnum.value=i; 
	document.view.question.value ="9. Step-time mode in music technology means that you...? \na)Play the music louder. \nb)Enter the notes into the computer one at a time. \nc)Dance to the music. \nd)Go back and play a section of music again.";
	correct="b";
	ans=prompt(i+'.)    ENTER LETTER >>   a,   b,   c,   d'); 
}
else if (i === 10) { 
	document.view.qnum.value=i; 
	document.view.question.value ="10. What is the term used for composing music by writing a melody forwards, backwards, then performing the song? \na)Retrograde \nb)Legato \nc)Theme and variation \nd) Reverse";
	correct="a";
	ans=prompt(i+'.)    ENTER LETTER >>   a,   b,   c,   d'); 
}
else if (i === 11) {
    if (s > 50) {
        alert("Congratulations! You got " + s + "% on this Quiz.");
    }
    else {
        alert("You got " + s + "% on this Quiz. Good luck next time!");
    }
}
	document.view.go.focus(); 
	if (correct === ans){ 
		document.view.question.value =" You are right!";
		s = s + 10;
	}
	else{
		document.view.question.value =" You are wrong";
		s = s;
	}
	i++;
}