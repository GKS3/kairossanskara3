/* ==========================================
        SECRET MESSAGE
========================================== */

// Change this whenever you want a new puzzle
const originalMessage = "RAVEN BEACH UNDER STARRY SKY";

/* ==========================================
        CALCULATE SHIFT
========================================== */

const firstWord = originalMessage.split(" ")[0];
const shift = firstWord.length;

/* ==========================================
        CAESAR ENCRYPTION
========================================== */

function encrypt(text, shift){

    let result = "";

    for(let i = 0; i < text.length; i++){

        let ch = text[i];

        if(ch >= "A" && ch <= "Z"){

            let code = ((ch.charCodeAt(0)-65+shift)%26)+65;
            result += String.fromCharCode(code);

        }

        else{

            result += ch;

        }

    }

    return result;

}

/* ==========================================
        SHOW ENCODED MESSAGE
========================================== */

const encoded = encrypt(originalMessage, shift);

document.getElementById("cipherText").innerHTML = encoded;

/* ==========================================
        SHOW / HIDE CIPHER
========================================== */

document
.getElementById("showCipher")
.onclick = function(){

    document
    .getElementById("cipherBox")
    .classList
    .toggle("hidden");

}

/* ==========================================
        SHOW / HIDE HINT
========================================== */

document
.getElementById("showHint")
.onclick = function(){

    document
    .getElementById("hintBox")
    .classList
    .toggle("hidden");

}

/* ==========================================
        CHECK ANSWER
========================================== */

document
.getElementById("submitAnswer")
.onclick = checkAnswer;

document
.getElementById("answerInput")
.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        checkAnswer();

    }

});

function checkAnswer(){

    const answer =
    document
    .getElementById("answerInput")
    .value
    .trim()
    .toUpperCase();

    if(answer===originalMessage){

        document
        .getElementById("result")
        .innerHTML =
        "✅ Correct!";

        document
        .getElementById("endingScene")
        .classList
        .remove("hidden");

    }

    else{

        document
        .getElementById("result")
        .innerHTML =
        "❌ Incorrect. Try Again!";

    }

}

/* ==========================================
        TWINKLING STARS
========================================== */

function createStars(){

    for(let i=0;i<120;i++){

        let star=document.createElement("div");

        star.style.position="fixed";

        star.style.width=Math.random()*3+1+"px";

        star.style.height=star.style.width;

        star.style.background="white";

        star.style.borderRadius="50%";

        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*100+"vh";

        star.style.opacity=Math.random();

        star.style.animation=
        "pulse "+
        (2+Math.random()*4)
        +"s infinite";

        document.body.appendChild(star);

    }

}

createStars();

/* ==========================================
        STAR PULSE
========================================== */

const style=document.createElement("style");

style.innerHTML=`

@keyframes pulse{

0%{

opacity:.2;
transform:scale(.7);

}

50%{

opacity:1;
transform:scale(1.4);

}

100%{

opacity:.2;
transform:scale(.7);

}

}

`;

document.head.appendChild(style);

/* ==========================================
        SHOOTING STARS
========================================== */

function shootingStar(){

    const star=document.createElement("div");

    star.style.position="fixed";

    star.style.width="3px";

    star.style.height="3px";

    star.style.background="white";

    star.style.borderRadius="50%";

    star.style.boxShadow=
    "0 0 15px white";

    star.style.left="-100px";

    star.style.top=Math.random()*250+"px";

    star.style.zIndex="-1";

    document.body.appendChild(star);

    let x=-100;

    let y=Math.random()*250;

    const interval=setInterval(()=>{

        x+=18;

        y+=9;

        star.style.left=x+"px";

        star.style.top=y+"px";

        if(x>window.innerWidth+100){

            clearInterval(interval);

            star.remove();

        }

    },20);

}

setInterval(shootingStar,6000);
