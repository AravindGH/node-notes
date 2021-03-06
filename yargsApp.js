//Always follow this DRY principle..
//Don't Repeat yourself

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


console.log("process :" + process.argv);

//const for storing the title, we did this to achieve the DRY concept
const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

//const for storing the body,||y we did this to achieve the DRY concept
const bodyOptions = {
    describe: 'The body of the note',
    demand: true,
    alias: 'b'
};

const argv1 = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    }
    )
    .command('list', 'List of notes')
    .command('read', 'read a notes', {
        title: titleOptions
    })
    .command('erase', 'erase the notes', {
        title: titleOptions
    })
    .help()
    .argv;
//help command help the user to know what is the argument that is required for the method.
//yargs.command is really useful one where we would be able to set the alias name for the command 
//line arguments as well...

/*******************************************************************************/
var command = process.argv[2];
console.log('command: ', command);
console.log('process', process.argv);
console.log('Yargs', argv1); //this is the variable comes from the yargs lib

/* if condition checking*/
if (command === 'add') {
    var note = yargsNotes.addNote(argv1.title, argv1.body)
    //if(typeof note === undefined ){ check for an object is not working. But Lo-dash rocks...
    if (_.isObject(note)) {
        console.log('Object has been create: ' + note);
        yargsNotes.logNote(note);
    } else {
        console.log('Record is not created already exists...');
    }
} else if (command === 'list') {
    var allNotes = yargsNotes.getAllNotes();
    yargsNotes.logNote(allNotes);
    console.log(`printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => yargsNotes.logNote(note)
    );

} else if (command === 'read') {
    var note = yargsNotes.getReader(argv1.title);
    if (note) {
        console.log('Values are read values');
        yargsNotes.logNote(note);
    } else {
        console.log('No values found for the given keyword');
    }
} else if (command === "erase") {
    var noteRemoved = yargsNotes.removeFile(argv1.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log("not found");
}