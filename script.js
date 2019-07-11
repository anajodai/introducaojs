// console.log('Hello World');

// let nomeDoUsuario = prompt('Qual é o seu nome?');
// let idade = prompt('Quantos anos você tem?');
// let programador = confirm('Você é um programador?');

// alert('Olá ' + nomeDoUsuario + ' , você tem ' + idade + ' anos.')
// // console.log(nomeDoUsuario);
// // console.log(idade);
// // console.log(vivo);

// // console.log ('Trocando nome');
// // nomeDoUsuario = 'Ana Carolina';
// // console.log (nomeDoUsuario);

// if (programador) {
//     alert('Você é um programador');
// }

// else if (Number(idade) >= 16 && Number(idade) <25){
//     alert ('Venha para a Estação Hack!')
// }

//  else{
//      alert('Você não é um programador :(');
//  }

 //Tabela Verdade

 let nomeDoAluno = prompt('Qual seu nome?');
 let materia = prompt('Digite a matéria.');
 let nota = prompt('Digite sua nota.');
 
 let media = 6 
 if (Number(nota) >= media){
     alert('Parabéns, ' + nomeDoAluno + ' você foi aprovado na matéria ' + materia + '!');
 }
 
 else if (Number(nota) >= media - 0.5) {
    alert(nomeDoAluno + ', você foi aprovado na matéria ' + materia + ' pelo sistema.')
 }

 else{
     alert('Que pena, ' + nomeDoAluno + ', sua nota não foi suficiente na matéria ' + materia);
 }
