

// var obj = {
//     name : 'Aravind'
// };


// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);


// /************************************/
// //String to object
// console.log("Operation string to object");
// var personString = '{"name": "Aravind", "age" : 25}';
// //json.parse
// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

// /************************************/

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString,(err)=>{
if(err){
    console.log("errored");
}else {
    console.log(typeof originalNoteString);
}
});

var noteString = fs.readFileSync('notes.json');
//converting the string to an object 

var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);




