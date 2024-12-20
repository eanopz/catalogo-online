//TÍTULO DO SITE ANIMADO
function emojiAlternator(){
    setTimeout(function(){
        document.getElementsByTagName("head")[0].children[21].innerHTML = "𝗡𝗢𝗣𝗭 &#127797; • Catálogo Online e Interativo";
    }, 1500);
    setTimeout(function(){
        document.getElementsByTagName("head")[0].children[21].innerHTML = "𝗡𝗢𝗣𝗭 &#128142; • Catálogo Online e Interativo";
        emojiAlternator();
    }, 3000);
}
//GATILHO
emojiAlternator();

// WARNING POP-UP
const warning = document.getElementById("warning");
const warningContent = document.getElementById("warningContent");
const closeButtonWarning = document.getElementsByClassName("close-button")[0];
setTimeout(function(){
    warning.style.display = "block";
    setTimeout(function(){
        warning.style.opacity = "1";
        setTimeout(function(){
            warningContent.style.top = "50%";
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
        }, 400);
    }, 500);
}, 0);
//VOCÊ É MAIOR DE IDADE?
const yes = document.getElementsByClassName("btnWarning")[0];
const no = document.getElementsByClassName("btnWarning")[1];
yes.addEventListener("click", function(){
    warningContent.style.top = "-100%";
    setTimeout(function(){
        warning.style.opacity = "0";
        setTimeout(function(){
            warning.style.display = "none";
            document.getElementsByTagName("body")[0].style.overflow = "visible";
        }, 400);
    }, 300);
});
no.addEventListener("click", function(){
    document.getElementById("warningContent").children[2].textContent = "ACESSO BLOQUEADO!";
    document.getElementById("warningContent").children[3].style.display = "none";
    document.getElementById("warningContent").children[3].style.display = "none";
    yes.style.display = "none";
    no.style.display = "none";
    setTimeout(function(){
        document.getElementById("warning").style.backdropFilter = "blur(3px)";
    }, 0);
});