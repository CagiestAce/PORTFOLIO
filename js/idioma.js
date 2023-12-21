//Português
$(function() {
    $(".br").click(function() {
        
        //Menu de navegação
        $(".idioma").text("PT");

        $(".menu").eq(0).text("Tecnologias");
        $(".tecnologias__label").attr("aria-label", "Leva até a parte das minhas tecnologias do site");

        $(".menu").eq(1).text("Projetos");
        $(".projetos__label").attr("aria-label", "Leva até a parte dos meus projetos do site");

        $(".menu").eq(2).text("Contato");
        $(".contato__label").attr("aria-label", "Abre um pop-up para entrar em contato comigo");

        //Modal
        $(".modal__close__popup").attr("aria-label", "Fechar pop-up");

        $(".titulo__modal").text("Vamos começar um projeto juntos!");
        $(".paragrafo__modal").text("Sinta-se à vontade para entrar em contato comigo para transformar o seu projeto em realidade.");

        $(".form__nome").attr("placeholder", "Nome");
        $(".form__nome").attr("aria-label", "Local para colocar seu primeiro nome");

        $(".form__sobrenome").attr("placeholder", "Sobrenome");
        $(".form__sobrenome").attr("aria-label", "Local para colocar seu sobrenome");

        $(".form__email").attr("aria-label", "Local para colocar seu email");

        $(".form__mensagem").attr("placeholder", "Mensagem");
        $(".form__mensagem").attr("aria-label", "Local para colocar sua mensagem");

        $(".button-modal").text("Enviar");
        $(".button-modal").attr("aria-label", "Enviar sua mensagem");

        //Banner
        $(".descricao__banner").html("Web designer, programador front-end<br/> e <br/>entusiasta das IAs");

        //Sobre mim
        $(".titulo__sobremim").text("Sobre mim");
        $(".descricao__sobremim").html("Sou Caio Guelli, um web designer e programador front-end, apaixonado por tecnologia e determinado a viver como freelancer. Busco constantemente aprender novas linguagens para me tornar um poliglota digital, enquanto nutro minha curiosidade pelo mundo e minha meta de ser um polímata.<br/>Desde os 14 anos, estou envolvido no mundo da programação e sigo encantado pelas novas tecnologias, incluindo a inteligência artificial, que otimiza meu trabalho de maneira ampla. Meu lema é &quot;se eu não sei algo, dou meu jeito e aprendo&quot;.<br/>Convido você a explorar meu portfólio e testemunhar minha paixão pela criatividade e inovação. Estou pronto para oferecer soluções personalizadas em design e programação front-end. Juntos, podemos transformar suas ideias em realidade e construir um futuro digital brilhante.");

        //Minhas tecnologias
        $(".titulo__minhastecnologias").text("Minhas tecnologias");
        $(".descricao__minhastecnologias").text("Estas são apenas algumas das fascinantes tecnologias que já desbravei. Estou constantemente atualizando meu conhecimento e prática, ansioso para abraçar o futuro e abraçar ainda mais inovações. À medida que aprimoro minhas habilidades nessas tecnologias. Estou preparado para criar soluções incríveis e surpreender você. Venha descobrir outras habilidades impressionantes que já possuo e ainda vou possuir ao longo da minha jornada!");
        
        $(".botao__tecnologias").text("Ver mais");
        $(".botao__tecnologias").attr("aria-label", "Ver mais tecnologias que eu tenho conhecimento");

        //Projetos
        $(".titulo__projetos").text("Meus projetos");

        //Informações de contato
        $("#informacoescontato").text("Informações de contato -");
        $("#paragrafo__rodape").text("Sinta-se à vontade para entrar em contato comigo a qualquer momento.");

        $("#consultetambem").text("Consulte também -");
        $(".github-icone").attr("aria-label", "Ícone que leva para o meu GitHub");
        $(".linkedin-icone").attr("aria-label", "Ícone que leva para o meu Linkedin");

        //Ops
        $(".texto__ops").text("Desculpe, ainda estamos trabalhando nisso, volte depois e talvez tenha algo aqui!");
        $(".button__ops").text("Me leve de volta");
        $(".button__ops").attr("aria-label", "Botão para voltar para a home");

        //Sucesso
        $(".titulo__sucesso").text("Sucesso");
        $(".texto__sucesso").text("O seu email foi enviado com sucesso, você receberá uma resposta em breve!");
        $(".button__sucesso").text("Me leve de volta");
        $(".button__sucesso").attr("aria-label", "Botão para voltar para a home");
    });
});

//English
$(function() {
    $(".en").click(function() {

        //Menu de navegação
        $(".idioma").text("EN");
        
        $(".menu").eq(0).text("Tecnologies");
        $(".tecnologias__label").attr("aria-label", "Takes you to the my technologies part of the website");

        $(".menu").eq(1).text("Projects");
        $(".projetos__label").attr("aria-label", "Takes you to the my projects part of the website");

        $(".menu").eq(2).text("Contact");
        $(".contato__label").attr("aria-label", "Opens a pop-up to contact me");

        //Modal
        $(".modal__close__popup").attr("aria-label", "Close pop-up");

        
        $(".titulo__modal").text("Let's start a project together!");
        $(".paragrafo__modal").text("Feel free to contact me to turn your project into reality.");
        
        $(".form__nome").attr("placeholder", "Name");
        $(".form__nome").attr("aria-label", "Local to place your first name");
        
        $(".form__sobrenome").attr("placeholder", "Last name");
        $(".form__sobrenome").attr("aria-label", "Local to place your last name");
        
        $(".form__email").attr("aria-label", "Local to place your email");
        
        $(".form__mensagem").attr("placeholder", "Message");
        $(".form__mensagem").attr("aria-label", "Local to place your message");

        $(".button-modal").text("Submit");
        $(".button-modal").attr("aria-label", "Submit your message");
        
        //Banner
        $(".descricao__banner").html("Web designer, front-end programmer<br/> and <br/>AI enthusiast");

        //Sobre mim
        $(".titulo__sobremim").text("About me");
        $(".descricao__sobremim").html("I'm Caio Guelli, a web designer and front-end programmer, passionate about technology and determined to live as a freelancer. I am constantly looking to learn new languages to become a digital polyglot, while nurturing my curiosity for the world and my goal of being a polymath.<br/>Since I was 14, I have been involved in the world of programming and I remain enchanted by new technologies, including artificial intelligence, which broadly optimizes my work. My motto is &quotif I don't know something, I figure it out and learn.&quot <br/>I invite you to explore my portfolio and witness my passion for creativity and innovation. I am ready to provide customized solutions in design and front-end programming. Together, we can turn your ideas into reality and build a bright digital future.");

        //Minhas tecnologias
        $(".titulo__minhastecnologias").text("My technologies");
        $(".descricao__minhastecnologias").text("These are just a few of the fascinating technologies I have already explored. I am constantly updating my knowledge and skills, looking forward to embracing the future and embracing even more innovations. As I enhance my abilities in these technologies, I am prepared to create incredible solutions and surprise you. Come discover other impressive skills that I already possess and will continue to acquire throughout my journey!");

        $(".botao__tecnologias").text("View more");
        $(".botao__tecnologias").attr("aria-label", "View more technologies that I have knowledge of");

        //Projetos
        $(".titulo__projetos").text("My projects");

        //Informações de contato
        $("#informacoescontato").text("Contact infomation -");
        $("#paragrafo__rodape").text("Feel free to reach out to me any time");
        $("#consultetambem").text("Check it out -");
        $(".github-icone").attr("aria-label", "Icon that takes you to my GitHub");
        $(".linkedin-icone").attr("aria-label", "Icon that takes you to my Linkedin");

        //Ops
        $(".texto__ops").text("Sorry, we are still working on it, come back later and there might be something here!");
        $(".button__ops").text("Take me back");
        $(".button__ops").attr("aria-label", "Button to return to the home");

        //Sucesso
        $(".titulo__sucesso").text("Success");
        $(".texto__sucesso").text("Your email has been sent successfully, you will receive a response soon!");
        $(".button__sucesso").text("Take me back");
        $(".button__sucesso").attr("aria-label", "Button to return to the home");
    });
});

//Fechar ao click

const Modalidioma = document.querySelector('#modalidioma');
const openModalIdioma = document.querySelector('.open-button-idioma');
const closeModalBr = document.querySelector('.close-button-br');
const closeModalEn = document.querySelector('.close-button-en');

openModalIdioma.addEventListener('click', () => {
    Modalidioma.showModal();
})

closeModalBr.addEventListener('click', () => {
    Modalidioma.close();
})

closeModalEn.addEventListener('click', () => {
    Modalidioma.close();
})
