///////////////////////////////////////////////////////////////
// Criação de um array, onde vão ficar guardados os dados de cada pessoa.
let registros = []

// Loop de ciclo while. Se guardam as informações de pessoas. Neste caso nome, idade e cor favorita.
while (true) {

  // Registros
  // Se pergunta para inserir nome da pessoa. Aquele valor ficará como tipo string e sempre sera maiúscula só a primeira letra. 
  let nome = prompt('Qual o nome?').toLowerCase()
  nome = nome[0].toUpperCase() + nome.slice(1)

  // Criação variável de idade e de ciclo while para perguntar pelo valor.
  let idade
  while (true) {
    // Se pergunta a idade da pessoa. Aquele valor ficará como tipo number.
    idade = Number(prompt('Qual a idade?'))
    // Se o valor é um número(tipo number), o ciclo se quebra e o valor se guarda na variável idade. Se não é um número, se produce uma alerta de valor inválido e pergunta de novo a idade.
    if (! Number.isNaN(idade)) {
      break
    }
    alert('Idade inválida, por favor digite um número')
  }

  // Se pergunta para inserir a cor favorita da pessoa. Aquele valor ficará como tipo string e sempre sera maiúscula só a primeira letra. 
  let corFavorita = prompt('Qual é a cor favorita?').toLowerCase()
  corFavorita = corFavorita[0].toUpperCase() + corFavorita.slice(1)

  // Criação de objeto onde se guardam os dados de cada pessoa. Um objeto por ciclo while, para cada pessoa e seus dados.
  let pessoa = {
    // nome: nome,
    // idade: idade,
    // cor: corFavorita
    nome, 
    idade,
    cor: corFavorita
  }

  // O objeto pessoa é enviado para o array registros, declarado no começo, ficando na posição [x] do array, começando desde [0]. 
  registros.push(pessoa)

  // Se pergunta se de deseja adicionar um outro registro, se a resposta é positiva(true) o ciclo while começa de novo. Se a resposta é negativa(false), se quebra o ciclo while e termina o loop de entrada de informações.
  let outroRegistro = confirm('Deseja fazer outro registro?')
  if (outroRegistro === false) {
    break
  }
}

// É mostrados; uma tabela com o conteúdo do array, e o array com seu conteúdo num formato mais descritivo.
console.table(registros)
console.log(registros)

///////////////////////////////////////////////////////////////
// COMPARAÇÕES

// Se declara variável para guardar as pessoas mais velhas do registro, se fazendo um chamado à função: obterMaisVelhos(registros).
let maisVelhos = obterMaisVelhos(registros)

// Se faz um console.log pra indicar que se vão mostrar as pessoas mais velhas encontradas, e dentro do ciclo for se faz um chamado direto dos parámetros nome e idade daquelas pessoas mais velhas.
console.log('As pessoas mais velhas encontradas nos registros foram:')
for (let pessoa of maisVelhos) {
  console.log(`${pessoa.nome}: ${pessoa.idade} anos`)
}

// Se declara variável para agrupar e guardar grupos po cores do registro, se fazendo um chamado à função: obterAgrupamentoPorCores(registros).
let gruposPorCores = obterAgrupamentoPorCores(registros)

// Se declara um ciclo for para percorrer as cores de cada pessoa e agrupar pessoas por cores.
for (let cor of Object.keys(gruposPorCores)) {
  console.log(`Pessoas que preferem a cor ${cor}:`)

  // Ciclo for para percorrer e mostrar pessoas dependendo da cor.
  for (let pessoa of gruposPorCores[cor]) {
    console.log(`- ${pessoa.nome}`)
  }
}

////////////////////////////////////////////////////////////////
// FUNÇÕES

// Função pras pessoas mais velhas. 
function obterMaisVelhos(registros) {
  // Se cria a variável interna maisVelhos.
  let maisVelhos = [ registros[0] ]

  for (let registro of registros.slice(1)) {
    if (registro.idade > maisVelhos[0].idade) {
      maisVelhos = [ registro ]
    } else if (registro.idade === maisVelhos[0].idade) {
      maisVelhos.push(registro)
    }
  }
  return maisVelhos
}

// Função para separar e agrupar pessoas pela cor.
function obterAgrupamentoPorCores(registros) {
  // Se cria variável interna gruposdeCores
  let gruposdeCores = {}
  
  for (let registro of registros) {
    if (typeof gruposdeCores[registro.cor] === 'undefined') {
      gruposdeCores[registro.cor] = [ registro ]
    } else {
      gruposdeCores[registro.cor].push(registro)
    }
  }
  return gruposdeCores
}