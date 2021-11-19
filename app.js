const livros = require('./database') // essa linha de codigo serve que requisitar, ou importar um arquivo exports

// pegar input
const readline = require('readline-sync') // essa linha tem a função de importar o readline-sync que serve para criar o input no terminal 


var sair = 'S'
while(sair === 'S'){ // estrutura de repetição while que vai cria o laço 
    let SearchCateg = readline.question("Deseja buscar livros ? (S/N) ")
    SearchCateg = SearchCateg[0].toUpperCase()
    if(SearchCateg === 'S' ){
        
        funcBooks()
    }else{
        console.log('Esses são todos os livros: ')
        console.table(livros.sort((a,b) => a.paginas - b.paginas))

        sair = 'exit'
    }
}

// função que vai mostrar os livros pesquisados
function funcBooks(){
    
    console.log('Essas são as categorias disponíveis: ') // vai mostrar no terminal as categorias 
    const todasCategorias = livros.map(categoria => categoria.categoria) // esse metodo vai mapear todas as categorias e vai passar para a variavel const
    console.table(todasCategorias) // vai mostrar no terminal todas as categorias em forma de tabela
    

    const getCategoria = readline.question('Entre com a categoria ou o index dela: ') // require que vai solicitar a categoria ou o index da categoria que deseja localizar
    const categoriaEncontrada = todasCategorias.includes(getCategoria) // essa linha de codigo vai verificar através do includes se a categoria foi encontrada na array todasCategorias caso seja encontrado, vai retornar true
    
    // esse condicional vai verificar se foi encontrado a categoria ou se o indice está entre todas as categorias 
    if (categoriaEncontrada === true || (Number(getCategoria) >= 0 && Number(getCategoria) < todasCategorias.length)){
        const retornoBooks = livros.filter(retBooks => retBooks.categoria === getCategoria || retBooks.categoria === todasCategorias[getCategoria] )
        console.log('\nTodas as informações dos livros:')
        console.table(retornoBooks)

    }else console.log('Categoria não encontrada!')
}