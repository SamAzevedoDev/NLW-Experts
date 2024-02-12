const perguntas = [
  {
    pergunta: "Quantos livros compõem o Novo Testamento?",
    respostas: [
      "27",
      "39",
      "66",
    ],
    correta: 0
  },
  {
    pergunta: "Qual dos seguintes não é um dos Dez Mandamentos?",
    respostas: [
      "Não matarás",
      "Honrar pai e mãe",
      "Não roubarás",
    ],
    correta: 2
  },
  {
    pergunta: "Quem era o profeta que realizou o milagre da multiplicação dos pães e peixes?",
    respostas: [
      "Isaías",
      "Ezequiel",
      "Eliseu",
    ],
    correta: 2
  },
  {
    pergunta: "Qual era o nome do faraó que reinava no Egito durante o Êxodo?",
    respostas: [
      "Ramsés II",
      "Tutmés III",
      "Amenhotep III",
    ],
    correta: 0
  },
  {
    pergunta: "Qual foi o primeiro concílio ecumênico da história da igreja cristã?",
    respostas: [
      "Concílio de Nicéia",
      "Concílio de Trento",
      "Concílio de Constantinopla",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do rei da Pérsia que emitiu o decreto para reconstruir Jerusalém?",
    respostas: [
      "Ciro",
      "Dario",
      "Artaxerxes",
    ],
    correta: 0
  },
  {
    pergunta: "Qual dos seguintes profetas escreveu o menor livro do Antigo Testamento?",
    respostas: [
      "Obadias",
      "Malaquias",
      "Naum",
    ],
    correta: 2
  },
  {
    pergunta: "Qual dos seguintes não é um dos evangelhos sinóticos?",
    respostas: [
      "Mateus",
      "João",
      "Marcos",
    ],
    correta: 1
  },
  {
    pergunta: "Qual foi o concílio ecumênico que definiu a doutrina da Santíssima Trindade?",
    respostas: [
      "Concílio de Niceia",
      "Concílio de Éfeso",
      "Concílio de Calcedônia",
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o líder da Reforma Protestante na Suíça?",
    respostas: [
      "Martinho Lutero",
      "João Calvino",
      "Ulrico Zuínglio",
    ],
    correta: 2
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template');

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
   const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta )
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      } 
      
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }




 quizItem.querySelector('dl').appendChild(dt) 
}


quizItem.querySelector('dl dt').remove()

  quiz.appendChild(quizItem)
}
