const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var x = 10;",
        "variable x = 10;",
        "let x = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a saída do seguinte código: console.log(typeof([]))?",
      respostas: [
        "object",
        "array",
        "undefined",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função usada para imprimir algo no console em JavaScript?",
      respostas: [
        "console.print()",
        "print()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes não é um tipo de dado primitivo em JavaScript?",
      respostas: [
        "string",
        "array",
        "number",
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara o valor e o tipo de dois operandos",
        "Compara apenas o valor de dois operandos",
        "Atribui um valor a uma variável",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão 5 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "Error",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "removeLast()",
        "pop()",
        "deleteLast()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de escrever um comentário de linha única em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de negação lógica em JavaScript?",
      respostas: [
        "&&",
        "!",
        "||",
      ],
      correta: 1
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