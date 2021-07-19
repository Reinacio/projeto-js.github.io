const livros = require('./database')

// pegar o input

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N')

//se for sim, mostra as categorias disponíveis, pergunta categoria ela deseja

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Produtividade', '/História brasileira', '/Américas',
     '/Tecnologia', '/Estilo de vida')

        const entradaCategoria = readline.question('Qual categoria voce escolhe:')
        const retorno =  livros.filter(livro => livro.categoria === entradaCategoria)
        console.table(retorno)

}



//se não, mostra todos os livros em  ordem crescente pela quantidade páginas
else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis:')
    console.table(livrosOrdenados)
}