/*
01 - Para finalizar a primeira tarefa do Orquestrador
- Perguntar pelo Termo de Busca

foi necessário os blocos abaixo e instalar a biblioteca
readline-syn
método askAndReturnSearchTerm

*/
const readline = require('readline-sync')

function start() {
	const content = {}

	content.searchTerm 	=	askAndReturnSearchTerm()
	content.prefix 		=	askAndReturnPrefix() 

	function askAndReturnSearchTerm(){
		return readline.question('Type a Wikipedia search term: ')
	}

	function askAndReturnPrefix() {
		const prefixes 				= 	['Who is','What is','The history of']
		const selectedPrefixIndex 	=	readline.keyInSelect(prefixes,'Choose on Option: ')
		const selectedPrefixText	=	prefixes[selectedPrefixIndex]
		
		/* console.log(selectedPrefixText)		*/
		return selectedPrefixText;
	}

	console.log(content)
}

start() 