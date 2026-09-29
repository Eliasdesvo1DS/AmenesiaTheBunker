
// ARRAY DE IMAGENS
let imagens = [
    "./assets/imagem1.jpeg",
    "./assets/imagem2.jpeg",
    "./assets/imagem3.jpeg"
];
//Posição que vai iniciar as imagens
let index=0;
//Tempo para trocar as imagens
let tempo = 3000; // 3 segundos
//Função do slideshow
function slideshow(){
    // Dom - pega o ID e passa o caminho das imagens
    document.getElementById("imgBanner").src = imagens[index];
    //Incremento
    index++; 

    //Estrutura cindicional if 
    if(index == imagens.length){
        index=0;
    }
    //Método settimeout para executar a função e chamar o tempo
    setTimeout('Slideshow()',tempo)
}
//Executando a função
slideshow();









const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener('click',()=>{
    navMenu.classList.toggle("active");
    menuIcone.classList.toggle("open")
})

