const readline = require ('readline-sync')

tipoImovel = readline.question ('insira o tipo do imovel desejado (casa/apartamento): ')
areaImovel = parseFloat (readline.question('insira o tamanho do imovel em metros quadrados: '))
valorImovelMetroQuadrado = parseFloat (readline.question ('insira o valor do metro quadrado: '))

valorAluguel = areaImovel * valorImovelMetroQuadrado

console.log (
    tipoImovel,
    '- área do imóvel: ', areaImovel, 'm² - valor do metro quadrado: R$', valorImovelMetroQuadrado,
    '- valor do aluguel: R$', valorAluguel

)
