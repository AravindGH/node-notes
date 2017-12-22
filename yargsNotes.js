console.log("Yargs Notes");
console.log("/******************/");

const fs = require('fs');

//fecthing notes functions
var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}
/*****************************************************************/

//save notes functions
var saveNotes = (notes) => {

    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

/*****************************************************************/

var addNote = (title, body) => {

    console.log('Adding note', title, body);

    //adding the notes..
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    })

    if (duplicateNotes.length === 0) {
        //need to push it to the notes array by the following
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAllNotes = () => {
    console.log('Listing all the notes that are available');
};

var removeFile = (title) => {
    console.log('Removing the file with a name :' + title);
    //fetching the notes
    //filter notes, removing the one with title of arguments
    //save new notes array...
    var notes1 = fetchNotes();
    /********************My way of deleting**********************/
    // var temp = [];
    // function chck(notes1) {
    //     for(var j=0; j< notes1.length;j++){
    //         if(notes1[j].title !== title){

    //             console.log(temp.push(notes1[j]));
    //         }
    //     }
    //     return temp;
    // }
    /***************************************************** */
    //chck(notes1);
    var filteredNotes = notes1.filter((note) => note.title !== title); //best way
    saveNotes(filteredNotes);
    console.log(filteredNotes);

    return notes1.length !== filteredNotes.length;
};


var getReader = (title) => {
    console.log('Reading the file with name :' + title);
    var notes = fetchNotes();//fetching the notes from the file.
    var filtered = notes.filter((note) => note.title === title); //for finding the matching element
    return filtered[0];
}; //end of getReader module...

module.exports = {
    //addNotes: addNotes ; or addNotes both are same here.
    addNote,
    //Listing the notes that are available..
    getAllNotes,
    //reader for reading the file.
    getReader,
    //remover for removing the file.
    removeFile
};



