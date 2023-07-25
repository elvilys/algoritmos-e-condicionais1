let eleitores = 70;
let votosBrancos = 10;
let votosNulos = 20;

let votosValidos = eleitores - votosBrancos - votosNulos;

const percentualBrancos = (votosBrancos / eleitores) * 100;
const percentualNulos = (votosNulos / eleitores) * 100;
const percentualValidos =( votosValidos / eleitores) * 100;


document.write(`votos validos ${eleitores} percentual votos brancos ${percentualBrancos}% votos nulos ${percentualNulos}% <br>
votos válidos ${percentualValidos}`)