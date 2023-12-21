var icon = document.getElementById("icon");
var logo = document.getElementById("logo");
var logopequeno = document.getElementById("logo-pequeno");
var logorodape = document.getElementById("logorodape");
var htmlbloco = document.getElementById("htmlbloco");
var cssbloco = document.getElementById("cssbloco");
var jsbloco = document.getElementById("jsbloco");
var phpbloco = document.getElementById("phpbloco");
var figmabloco = document.getElementById("figmabloco");
var wpbloco = document.getElementById("wpbloco");
var gptbloco = document.getElementById("gptbloco");
var tailwindbloco = document.getElementById("tailwindbloco");
var canvabloco = document.getElementById("canvabloco");
var githubicone = document.getElementById("githubicone");
var linkedinicone = document.getElementById("linkedinicone");
var br = document.getElementById("br-flag");
var en = document.getElementById("en-flag");
var fechar = document.getElementById("fechar");

// Função para salvar o tema e idioma no sessionStorage
function saveSettings() {
    var isDarkTheme = document.body.classList.contains("dark-theme");
    var lang = $(".idioma").text();

    sessionStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    sessionStorage.setItem("language", lang);
}

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "IMAGENS-ÍCONES/Lua_branca.svg";
        br.src = "IMAGENS-ÍCONES/Idioma_portugues_branco.svg";
        en.src = "IMAGENS-ÍCONES/Idioma_ingles_branco.svg";
        logo.src = "IMAGENS-ÍCONES/Logo_1440_branco.svg";
        fechar.src = "IMAGENS-ÍCONES/X_preto.svg";
        logopequeno.src = "IMAGENS-ÍCONES/Logo_1160_branco.svg";
        htmlbloco.src = "IMAGENS-ÍCONES/Htmlbloco_branco.svg";
        cssbloco.src = "IMAGENS-ÍCONES/Cssbloco_branco.svg";
        jsbloco.src = "IMAGENS-ÍCONES/Jsbloco_branco.svg";
        phpbloco.src = "IMAGENS-ÍCONES/Phpbloco_branco.svg";
        figmabloco.src = "IMAGENS-ÍCONES/Figmabloco_branco.svg";
        wpbloco.src = "IMAGENS-ÍCONES/Wpbloco_branco.svg";
        gptbloco.src = "IMAGENS-ÍCONES/Gptbloco_branco.svg";
        tailwindbloco.src = "IMAGENS-ÍCONES/Tailwindbloco_branco.svg";
        canvabloco.src = "IMAGENS-ÍCONES/Canvabloco_branco.svg";
        logorodape.src = "IMAGENS-ÍCONES/Logopequeno_1440_branco.svg"
        githubicone.src = "IMAGENS-ÍCONES/GitHub_branco.svg";
        linkedinicone.src = "IMAGENS-ÍCONES/Linkedin_branco.svg";

        saveSettings();
    }else{
        icon.src = "IMAGENS-ÍCONES/Sol_preto.svg";
        br.src = "IMAGENS-ÍCONES/Idioma_portugues_preto.svg";
        en.src = "IMAGENS-ÍCONES/Idioma_ingles_preto.svg";
        logo.src = "IMAGENS-ÍCONES/Logo_1440_preto.svg";
        fechar.src = "IMAGENS-ÍCONES/X_branco.svg";
        logopequeno.src = "IMAGENS-ÍCONES/Logo_1160_preto.svg";
        htmlbloco.src = "IMAGENS-ÍCONES/Htmlbloco_preto.svg";
        cssbloco.src = "IMAGENS-ÍCONES/Cssbloco_preto.svg";
        jsbloco.src = "IMAGENS-ÍCONES/Jsbloco_preto.svg";
        phpbloco.src = "IMAGENS-ÍCONES/Phpbloco_preto.svg";
        figmabloco.src = "IMAGENS-ÍCONES/Figmabloco_preto.svg";
        wpbloco.src = "IMAGENS-ÍCONES/Wpbloco_preto.svg";
        gptbloco.src = "IMAGENS-ÍCONES/Gptbloco_preto.svg";
        tailwindbloco.src = "IMAGENS-ÍCONES/Tailwindbloco_preto.svg";
        canvabloco.src = "IMAGENS-ÍCONES/Canvabloco_preto.svg";
        logorodape.src = "IMAGENS-ÍCONES/Logopequeno_1440_preto.svg"
        githubicone.src = "IMAGENS-ÍCONES/GitHub_preto.svg";
        linkedinicone.src = "IMAGENS-ÍCONES/Linkedin_preto.svg";

        saveSettings();
    }
}

