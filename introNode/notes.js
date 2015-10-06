// var fs = require('fs')

// var notesText = fs.readFileSync('./node_nodes.txt', 'utf-8')
// console.log(notesText)

// fs.writeFileSync('notes_copy.txt', notesText)
// console.log(notesText)


// write a node script that copies a text filex

// example:

// node copy.js will read source.txt destination.txt 

var fileToRead = process.argv[2]
var fileToWrite = process.argv[3]


var fs = require('fs')

var notes2 = fs.readFileSync(fileToRead, 'utf-8')

fs.writeFileSync(fileToWrite, notes2)
console.log(notes2)


// ---------------demo solution, raphael--------------------
// var fs = require('fs')

// var sourceFileName = process.argv[2]
// var targetFileName = process.argv[3]

// var sourceFileContents = fs.readFileSync(sourceFileName, 'utf-8')

// fs.writeFileSync(targetFileName, sourceFileContents)
