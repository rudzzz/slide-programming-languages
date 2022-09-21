//  pegando todos os elementos com a classe slide, retorna um array
const slides = document.querySelectorAll('.slide');
// botão para  passar slide
const proximo = document.querySelector('#proximo');
// botão para voltar slide
const anterior = document.querySelector('#anterior');

// função para passar slide
function proximoSlide(){
    // console.log('foi')
    // selecionando div com a classe atual
    const atual = document.querySelector('.atual');
    // removendo a classe atual da primeira div
    atual.classList.remove('atual');
    // se tiver um proximo elemento irmao
    if(atual.nextElementSibling){
        // adiciona a classe atual para esse elemento
        atual.nextElementSibling.classList.add('atual');
    }
    else{
        // senão, adiciona a classe atual no primeiro elemento do array de elementos
        slides[0].classList.add('atual');
    }
    // 
    setTimeout(atual.classList.remove('atual'));
}

function slideAnterior(){
    // console.log('voltou');
    // selecionando div com a classe atual
    const atual = document.querySelector('.atual');
    // removendo a classe atual da div que está
    atual.classList.remove('atual');

    // verifica se existe um elemento anterior a ele
    if(atual.previousElementSibling){
        // se tiver, adiciona a classe atual a ele
        atual.previousElementSibling.classList.add('atual');
    }
    else{
        // senão, coloca a classe atual no elemento anterior a ele 
        slides[slides.length -1].classList.add('atual');
    }
    // 
    setTimeout(atual.classList.remove('atual'));
}

// adicionando evento nos botoes 
proximo.addEventListener('click', proximoSlide);
anterior.addEventListener('click', slideAnterior);