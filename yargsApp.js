

console.log('Reading the cli value using the Yargs');

//require is a function to 
//just passing one string withing the require.
const fs = require('fs');
const os = require('os');
//local lib no need of relative path
const yargsNotes = require('./yargsNotes.js');

//this is a third party library and its been tested and used in production env as well.
const _ = require('lodash');

// for getting the values from the cli using yargs
const yargs = require('yargs');


console.log("process :"+process.argv);

const argv1 = yargs.argv;
var command = process.argv[2];
console.log('command: ',command);
console.log('process',process.argv);
console.log('Yargs',argv1); //this is the variable comes from the yargs lib

/* if condition checking*/
if (command === 'add') {
  var note = yargsNotes.addNote(argv1.title,argv1.body)
    //if(typeof note === undefined ){ check for an object is not working. But Lo-dash rocks...
        if(_.isObject(note)){
        console.log('Object has been create: '+ note);
        console.log(`Node Title : ${note.title}`); //injecting with the help of template strings...
    }else{
        console.log('Record is not created already exists...');
    }
} else if (command === 'list') {
    yargsNotes.getAllNotes();
} else if (command === 'read') {
    var note = yargsNotes.getReader(argv1.title);
    if(note){
        console.log('Values are read values');
        console.log('---------------------------');
        console.log(`Values of the title are: ${note.title}`);
        console.log(`Values of the body are: ${note.body}`);
    }else{
        console.log('No values found for the given keyword');
    }
} else if (command === "erase") {
    var noteRemoved = yargsNotes.removeFile(argv1.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log("not found");
}