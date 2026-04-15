// CONTROLE DE MÚSICA
var themeMusic = document.getElementById("themeMusic");
var musicToggle = document.getElementById("musicToggle");
var isMusicPlaying = false;

// Evento do botão de controle
musicToggle.addEventListener("click", function(e) {
    e.preventDefault();
    if (isMusicPlaying) {
        themeMusic.pause();
        musicToggle.textContent = "🔇";
        musicToggle.classList.add("muted");
        isMusicPlaying = false;
    } else {
        themeMusic.play();
        musicToggle.textContent = "🔊";
        musicToggle.classList.remove("muted");
        isMusicPlaying = true;
    }
});

// Definir botão como muted na inicialização
window.addEventListener("load", function() {
    musicToggle.textContent = "🔇";
    musicToggle.classList.add("muted");
    isMusicPlaying = false;
});

var megaman = document.getElementById("megaman");

var magnet = document.getElementById("magnet");
var needle = document.getElementById("needle");
var snake = document.getElementById("snake");
var hard = document.getElementById("hard");
var topman = document.getElementById("top");
var gemini = document.getElementById("gemini");
var spark = document.getElementById("spark");
var shadowman = document.getElementById("shadow");

//ANIMAÇÕES DE MOLDURA
//MOUSE ON
megaman.addEventListener("mouseover", function(){
    var getMm = document.getElementById("megaman");
    getMm.style.backgroundImage = "url(media/robotMasters/megaman.png)";

    var blinkMm = document.getElementById("blinkMm");
    blinkMm.classList.remove("element");
    blinkMm.classList.add("blinkMold");

    var sfx = document.getElementById("sfx");
    sfx.innerHTML = "<audio autoplay id='som'><source src='media/sfx/1.mp3' type='audio/mpeg'></audio>";
    var som = document.getElementById("som");
    som.volume = 0.35;
})
spark.addEventListener("mouseover", function(){
    var getMm = document.getElementById("megaman");
    getMm.style.backgroundImage = "url(media/MM/1.png)";

    var blinkSpark = document.getElementById("blinkSpark");
    blinkSpark.classList.remove("element");
    blinkSpark.classList.add("blinkMold");

    var sfx = document.getElementById("sfx");
    sfx.innerHTML = "<audio autoplay id='som'><source src='media/sfx/1.mp3' type='audio/mpeg'></audio>";
    var som = document.getElementById("som");
    som.volume = 0.35;
})
needle.addEventListener("mouseover", function(){
    var getMm = document.getElementById("megaman");
    getMm.style.backgroundImage = "url(media/MM/2.png)";

    var blinkNeedle = document.getElementById("blinkNeedle");
    blinkNeedle.classList.remove("element");
    blinkNeedle.classList.add("blinkMold");

    var sfx = document.getElementById("sfx");
    sfx.innerHTML = "<audio autoplay id='som'><source src='media/sfx/1.mp3' type='audio/mpeg'></audio>";
    var som = document.getElementById("som");
    som.volume = 0.35;
})
snake.addEventListener("mouseover", function(){
    var getMm = document.getElementById("megaman");
    getMm.style.backgroundImage = "url(media/MM/3.png)";

    var blinkSnake = document.getElementById("blinkSnake");
    blinkSnake.classList.remove("element");
    blinkSnake.classList.add("blinkMold");

    var sfx = document.getElementById("sfx");
    sfx.innerHTML = "<audio autoplay id='som'><source src='media/sfx/1.mp3' type='audio/mpeg'></audio>";
    var som = document.getElementById("som");
    som.volume = 0.35;
})
hard.addEventListener("mouseover", function(){
    var getMm = document.getElementById("megaman");
    getMm.style.backgroundImage = "url(media/MM/4.png)";

    var blinkHard = document.getElementById("blinkHard");
    blinkHard.classList.remove("element");
    blinkHard.classList.add("blinkMold");

    var sfx = document.getElementById("sfx");
    sfx.innerHTML = "<audio autoplay id='som'><source src='media/sfx/1.mp3' type='audio/mpeg'></audio>";
    var som = document.getElementById("som");
    som.volume = 0.35;
})
topman.addEventListener("mouseover", function(){
    var getMm = document.getElementById("megaman");
    getMm.style.backgroundImage = "url(media/MM/5.png)";

    var blinkTop = document.getElementById("blinkTop");
    blinkTop.classList.remove("element");
    blinkTop.classList.add("blinkMold");

    var sfx = document.getElementById("sfx");
    sfx.innerHTML = "<audio autoplay id='som'><source src='media/sfx/1.mp3' type='audio/mpeg'></audio>";
    var som = document.getElementById("som");
    som.volume = 0.35;
})
gemini.addEventListener("mouseover", function(){
    var getMm = document.getElementById("megaman");
    getMm.style.backgroundImage = "url(media/MM/6.png)";

    var blinkGemini = document.getElementById("blinkGemini");
    blinkGemini.classList.remove("element");
    blinkGemini.classList.add("blinkMold");

    var sfx = document.getElementById("sfx");
    sfx.innerHTML = "<audio autoplay id='som'><source src='media/sfx/1.mp3' type='audio/mpeg'></audio>";
    var som = document.getElementById("som");
    som.volume = 0.35;
})
magnet.addEventListener("mouseover", function(){
    var getMm = document.getElementById("megaman");
    getMm.style.backgroundImage = "url(media/MM/7.png)";

    var blinkMagnet = document.getElementById("blinkMagnet");
    blinkMagnet.classList.remove("element");
    blinkMagnet.classList.add("blinkMold");

    var sfx = document.getElementById("sfx");
    sfx.innerHTML = "<audio autoplay id='som'><source src='media/sfx/1.mp3' type='audio/mpeg'></audio>";
    var som = document.getElementById("som");
    som.volume = 0.35;
})
shadowman.addEventListener("mouseover", function(){
    var getMm = document.getElementById("megaman");
    getMm.style.backgroundImage = "url(media/MM/8.png)";

    var blinkShadow = document.getElementById("blinkShadow");
    blinkShadow.classList.remove("element");
    blinkShadow.classList.add("blinkMold");

    var sfx = document.getElementById("sfx");
    sfx.innerHTML = "<audio autoplay id='som'><source src='media/sfx/1.mp3' type='audio/mpeg'></audio>";
    var som = document.getElementById("som");
    som.volume = 0.35;
})

//MOUSE OFF
megaman.addEventListener("mouseleave", function(){
    var blinkMm = document.getElementById("blinkMm");
    blinkMm.classList.remove("blinkMold");
    blinkMm.classList.add("element");
})
magnet.addEventListener("mouseleave", function(){
    var blinkMagnet = document.getElementById("blinkMagnet");
    blinkMagnet.classList.remove("blinkMold");
    blinkMagnet.classList.add("element");
})
needle.addEventListener("mouseleave", function(){
    var blinkNeedle = document.getElementById("blinkNeedle");
    blinkNeedle.classList.remove("blinkMold");
    blinkNeedle.classList.add("element");
})
snake.addEventListener("mouseleave", function(){
    var blinkSnake = document.getElementById("blinkSnake");
    blinkSnake.classList.remove("blinkMold");
    blinkSnake.classList.add("element");
})
hard.addEventListener("mouseleave", function(){
    var blinkHard = document.getElementById("blinkHard");
    blinkHard.classList.remove("blinkMold");
    blinkHard.classList.add("element");
})
topman.addEventListener("mouseleave", function(){
    var blinkTop = document.getElementById("blinkTop");
    blinkTop.classList.remove("blinkMold");
    blinkTop.classList.add("element");
})
gemini.addEventListener("mouseleave", function(){
    var blinkGemini = document.getElementById("blinkGemini");
    blinkGemini.classList.remove("blinkMold");
    blinkGemini.classList.add("element");
})
spark.addEventListener("mouseleave", function(){
    var blinkSpark = document.getElementById("blinkSpark");
    blinkSpark.classList.remove("blinkMold");
    blinkSpark.classList.add("element");
})
shadowman.addEventListener("mouseleave", function(){
    var blinkShadow = document.getElementById("blinkShadow");
    blinkShadow.classList.remove("blinkMold");
    blinkShadow.classList.add("element");
})


//SELECIONOU ROBOT MASTER
function charEscolhido(){
    var tocar = document.getElementById("theme");
    tocar.innerHTML = "<audio id='audio'><source src='media/themes/"+master.innerHTML+".mp3' type='audio/mpeg'></audio><button id=\"musicToggle\" title=\"Alternar Música\">🔊</button><button id=\"resetButton\" title=\"Recarregar Página\">🔄</button>";
    var audio = document.getElementById("audio");
    audio.volume = 0.45;
    audio.play();
    
    // Reattach o evento do botão de música
    musicToggle = document.getElementById("musicToggle");
    themeMusic = audio;
    isMusicPlaying = true;
    musicToggle.classList.remove("muted");
    attachMusicToggleEvent();
    
    // Evento do botão de reset
    var resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", function(e) {
        e.preventDefault();
        location.reload();
    });
}

function attachMusicToggleEvent() {
    if (musicToggle) {
        musicToggle.addEventListener("click", function(e) {
            e.preventDefault();
            if (isMusicPlaying) {
                themeMusic.pause();
                musicToggle.textContent = "🔇";
                musicToggle.classList.add("muted");
                isMusicPlaying = false;
            } else {
                themeMusic.play();
                musicToggle.textContent = "🔊";
                musicToggle.classList.remove("muted");
                isMusicPlaying = true;
            }
        });
    }
}

function escolheu (){
    var space = document.getElementById("space");
    var menu = document.getElementById("space2");
    var sfx = document.getElementById("sfx");
    var theme = document.getElementById("theme");

    menu.innerHTML = "<img src='media/sprites/"+master.innerHTML+".gif' class='"+master.innerHTML+"Sprite'><br><div id='name'></div>";
    var name = document.getElementById("name");
    name.classList.add(master.innerHTML+"Title");
    space.classList.remove("space");
    menu.classList.remove("space2");
    menu.classList.add("change");
    space.classList.add("space-change");
    theme.innerHTML = "" ;
    sfx.innerHTML = "<audio id='audio'><source src='media/sfx/Boss Selected.mp3' type='audio/mpeg'></audio>";
    var audio = document.getElementById("audio");
    audio.play();
    setTimeout(charEscolhido, 6000);
}