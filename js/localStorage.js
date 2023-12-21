// Função para salvar o tema e idioma no localStorage
function saveSettings() {
    var isDarkTheme = document.body.classList.contains("dark-theme");
    var lang = $(".idioma").text();
    
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    localStorage.setItem("language", lang);
}

// Função para carregar as configurações salvas
function loadSettings() {
    var savedTheme = localStorage.getItem("theme");
    var savedLanguage = localStorage.getItem("language");

    if (savedTheme === "dark") {
        toggleTheme();
        saveSettings();
    }

    // Verificar o estado do tema ao carregar a página
    const isDarkTheme = localStorage.getItem('darkTheme');
    if (isDarkTheme === 'true') {
        document.body.classList.add('dark-theme');
    }

    // Carregar o tema do localStorage
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
            document.body.classList.add("dark-theme");
    } else {
            document.body.classList.remove("dark-theme");
    }

    // Agora, garantimos que o idioma seja aplicado mesmo que o tema não tenha sido alterado
    toggleLanguage(savedLanguage || "PT");
    
}

// Função para alternar o idioma
function toggleLanguage(lang) {
    $(".idioma").text(lang);

    //Menu de navegação
    $(".menu").eq(0).text(lang === "PT" ? "Tecnologias" : "Tecnologies");
    $(".tecnologias__label").attr("aria-label", lang === "PT" ? "Leva até a parte das minhas tecnologias do site" : "Takes you to the my technologies part of the website");

    $(".menu").eq(1).text(lang === "PT" ? "Projetos" : "Projects");
    $(".projetos__label").attr("aria-label", lang === "PT" ? "Leva até a parte dos meus projetos do site" : "Takes you to the my projects part of the website");

    $(".menu").eq(2).text(lang === "PT" ? "Contato" : "Contact");
    $(".contato__label").attr("aria-label", lang === "PT" ? "Abre um pop-up para entrar em contato comigo" : "Opens a pop-up to contact me");

    //Modal
    $(".modal__close__popup").attr("aria-label", lang === "PT" ? "Fechar pop-up" : "Close pop-up");

    $(".titulo__modal").text(lang === "PT" ? "Vamos começar um projeto juntos!" : "Let's start a project together!");
    $(".paragrafo__modal").text(lang === "PT" ? "Sinta-se à vontade para entrar em contato comigo para transformar o seu projeto em realidade." : "Feel free to contact me to turn your project into reality.");
    
    $(".form__nome").attr("placeholder", lang === "PT" ? "Nome" : "Name");
    $(".form__nome").attr("aria-label", lang === "PT" ? "Local para colocar seu primeiro nome" : "Local to place your first name");

    $(".form__sobrenome").attr("placeholder", lang === "PT" ? "Sobrenome" : "Last name");
    $(".form__sobrenome").attr("aria-label", lang === "PT"? "Local para colocar seu sobrenome" : "Local to place your last name");

    $(".form__email").attr("aria-label", lang === "PT" ? "Local para colocar seu email" : "Local to place your email");

    $(".form__mensagem").attr("placeholder", lang === "PT" ? "Mensagem" : "Message");
    $(".form__mensagem").attr("aria-label", lang === "PT"? "Local para colocar sua mensagem" : "Local to place your message");
    
    $(".button-modal").text(lang === "PT" ? "Enviar" : "Submit");
    $(".button-modal").attr("aria-label", lang === "PT" ? "Enviar sua mensagem" : "Submit your message");

    //Banner
    $(".descricao__banner").html(lang === "PT" ? "Web designer, programador front-end<br/> e <br/>entusiasta das IAs" : "Web designer, front-end programmer<br/> and <br/>AI enthusiast");

    //Sobre mim
    $(".titulo__sobremim").text(lang === "PT" ? "Sobre mim" : "About me");
    $(".descricao__sobremim").html(lang === "PT" ? "Sou Caio Guelli, um web designer e programador front-end, apaixonado por tecnologia e determinado a viver como freelancer. Busco constantemente aprender novas linguagens para me tornar um poliglota digital, enquanto nutro minha curiosidade pelo mundo e minha meta de ser um polímata.<br/>Desde os 14 anos, estou envolvido no mundo da programação e sigo encantado pelas novas tecnologias, incluindo a inteligência artificial, que otimiza meu trabalho de maneira ampla. Meu lema é &quot;se eu não sei algo, dou meu jeito e aprendo&quot;.<br/>Convido você a explorar meu portfólio e testemunhar minha paixão pela criatividade e inovação. Estou pronto para oferecer soluções personalizadas em design e programação front-end. Juntos, podemos transformar suas ideias em realidade e construir um futuro digital brilhante." : "I'm Caio Guelli, a web designer and front-end programmer, passionate about technology and determined to live as a freelancer. I am constantly looking to learn new languages to become a digital polyglot, while nurturing my curiosity for the world and my goal of being a polymath.<br/>Since I was 14, I have been involved in the world of programming and I remain enchanted by new technologies, including artificial intelligence, which broadly optimizes my work. My motto is &quotif I don't know something, I figure it out and learn.&quot <br/>I invite you to explore my portfolio and witness my passion for creativity and innovation. I am ready to provide customized solutions in design and front-end programming. Together, we can turn your ideas into reality and build a bright digital future.");

    //Minhas tecnologias
    $(".titulo__minhastecnologias").text(lang === "PT" ? "Minhas tecnologias" : "My technologies");
    $(".descricao__minhastecnologias").text(lang === "PT" ? "Estas são apenas algumas das fascinantes tecnologias que já desbravei. Estou constantemente atualizando meu conhecimento e prática, ansioso para abraçar o futuro e abraçar ainda mais inovações. À medida que aprimoro minhas habilidades nessas tecnologias. Estou preparado para criar soluções incríveis e surpreender você. Venha descobrir outras habilidades impressionantes que já possuo e ainda vou possuir ao longo da minha jornada!" : "These are just a few of the fascinating technologies I have already explored. I am constantly updating my knowledge and skills, looking forward to embracing the future and embracing even more innovations. As I enhance my abilities in these technologies, I am prepared to create incredible solutions and surprise you. Come discover other impressive skills that I already possess and will continue to acquire throughout my journey!");

    $(".botao__tecnologias").text(lang === "PT" ? "Ver mais" : "View more");
    $(".botao__tecnologias").attr("aria-label", lang === "PT"? "Ver mais tecnologias que eu tenho conhecimento" : "View more technologies that I have knowledge of");

    //Projetos
    $(".titulo__projetos").text(lang === "PT" ? "Meus projetos" : "My projects");

    //Informações de contato
    $("#informacoescontato").text(lang === "PT" ? "Informações de contato -" : "Contact information -");
    $("#paragrafo__rodape").text(lang === "PT" ? "Sinta-se à vontade para entrar em contato comigo a qualquer momento." : "Feel free to reach out to me any time");

    $("#consultetambem").text(lang === "PT" ? "Consulte também -" : "Check it out -");
    $(".github-icone").attr("aria-label", lang === "PT" ? "Ícone que leva para o meu GitHub" : "Icon that takes you to my GitHub");
    $(".linkedin-icone").attr("aria-label", lang === "PT" ? "Ícone que leva para o meu Linkedin" : "Icon that takes you to my Linkedin");

    //Ops
    $(".texto__ops").text(lang === "PT" ? "Desculpe, ainda estamos trabalhando nisso, volte depois e talvez tenha algo aqui!" : "Sorry, we are still working on it, come back later and there might be something here!");
    $(".button__ops").text(lang === "PT" ? "Me leve de volta" : "Take me back");

    //Sucesso
    $(".titulo__sucesso").text(lang === "PT" ? "Sucesso" : "Success");
    $(".texto__sucesso").text(lang === "PT" ? "O seu email foi enviado com sucesso, você receberá uma resposta em breve!" : "Your email has been sent successfully, you will receive a response soon!");
    $(".button__sucesso").text(lang === "PT" ? "Me leve de volta" : "Take me back");
    $(".botao__sucesso").attr("aria-label", lang === "PT"? "Botão para voltar para a home" : "Button to return to the home");

    saveSettings();
}

// Função para alternar o tema
function toggleTheme() {
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

    // Verifica se o tema atual é claro ou escuro
    var isDarkTheme = document.body.classList.contains("dark-theme");

    // Alterna o tema
    document.body.classList.toggle("dark-theme");

    // Atualiza as imagens de acordo com o tema
    icon.src = isDarkTheme ? "IMAGENS-ÍCONES/Sol_preto.svg" : "IMAGENS-ÍCONES/Lua_branca.svg";
    br.src = isDarkTheme ? "IMAGENS-ÍCONES/Idioma_portugues_preto.svg" : "IMAGENS-ÍCONES/Idioma_portugues_branco.svg";
    en.src = isDarkTheme ? "IMAGENS-ÍCONES/Idioma_ingles_preto.svg" : "IMAGENS-ÍCONES/Idioma_ingles_branco.svg";
    logo.src = isDarkTheme ? "IMAGENS-ÍCONES/Logo_1440_preto.svg" : "IMAGENS-ÍCONES/Logo_1440_branco.svg";
    fechar.src = isDarkTheme ? "IMAGENS-ÍCONES/X_branco.svg" : "IMAGENS-ÍCONES/X_preto.svg";
    logopequeno.src = isDarkTheme ? "IMAGENS-ÍCONES/Logo_1160_preto.svg" : "IMAGENS-ÍCONES/Logo_1160_branco.svg";
    htmlbloco.src = isDarkTheme ? "IMAGENS-ÍCONES/Htmlbloco_preto.svg" : "IMAGENS-ÍCONES/Htmlbloco_branco.svg";
    cssbloco.src = isDarkTheme ? "IMAGENS-ÍCONES/Cssbloco_preto.svg" : "IMAGENS-ÍCONES/Cssbloco_branco.svg";
    jsbloco.src = isDarkTheme ? "IMAGENS-ÍCONES/Jsbloco_preto.svg" : "IMAGENS-ÍCONES/Jsbloco_branco.svg";
    phpbloco.src = isDarkTheme ? "IMAGENS-ÍCONES/Phpbloco_preto.svg" : "IMAGENS-ÍCONES/Phpbloco_branco.svg";
    figmabloco.src = isDarkTheme ? "IMAGENS-ÍCONES/Figmabloco_preto.svg" : "IMAGENS-ÍCONES/Figmabloco_branco.svg";
    wpbloco.src = isDarkTheme ? "IMAGENS-ÍCONES/Wpbloco_preto.svg" : "IMAGENS-ÍCONES/Wpbloco_branco.svg";
    gptbloco.src = isDarkTheme ? "IMAGENS-ÍCONES/Gptbloco_preto.svg" : "IMAGENS-ÍCONES/Gptbloco_branco.svg";
    tailwindbloco.src = isDarkTheme ? "IMAGENS-ÍCONES/Tailwindbloco_preto.svg" : "IMAGENS-ÍCONES/Tailwindbloco_branco.svg";
    canvabloco.src = isDarkTheme ? "IMAGENS-ÍCONES/Canvabloco_preto.svg" : "IMAGENS-ÍCONES/Canvabloco_branco.svg";
    logorodape.src = isDarkTheme ? "IMAGENS-ÍCONES/Logopequeno_1440_preto.svg" : "IMAGENS-ÍCONES/Logopequeno_1440_branco.svg";
    githubicone.src = isDarkTheme ? "IMAGENS-ÍCONES/GitHub_preto.svg" : "IMAGENS-ÍCONES/GitHub_branco.svg";
    linkedinicone.src = isDarkTheme ? "IMAGENS-ÍCONES/Linkedin_preto.svg" : "IMAGENS-ÍCONES/Linkedin_branco.svg";

    saveSettings();
}

// Carrega as configurações ao carregar a página
$(document).ready(function () {
    loadSettings();
});




// Evento de clique no ícone de tema
icon.onclick = function () {
    toggleTheme();
    saveSettings();
};

// Eventos de clique nas bandeiras de idioma
br.onclick = function () {
    toggleLanguage("PT");
    saveSettings();
};

en.onclick = function () {
    toggleLanguage("EN");
    saveSettings();
};

// Salva as configurações ao fechar a página
$(window).on('beforeunload', function () {
    saveSettings();
});