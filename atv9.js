const maca = 12;
let menorDoze = maca * 0.30;
let maiorDoze = maca * 0.25;

if (maca <= 11){
    document.write(`O valor para sua quantidade de maças é de: R$ ${menorDoze}`)
}else {
    document.write(`O valor para sua quantidade de maças é de: R$ ${maiorDoze}`)
}
