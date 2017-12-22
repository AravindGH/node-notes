console.log('starting the app');

//require is a function to 
//just passing one string withing the require.
const fs = require('fs');
const os = require('os');
//local lib no need of relative path
const notes = require('./notes');

//this is a third party library and its been tested and used in production env as well.
const _ = require('lodash');

// for getting the values from the cli using yargs
const yargs = require('yargs')


console.log(process.argv);

var command = process.argv[2];

if (command === 'add') {
    console.log("added to the notes");
} else if (command === 'list') {
    console.log("list is added");
} else if (command === 'read') {
    console.log("reading the file");
} else if (command === "erase") {
    console.log("erasing the file");
} else {
    console.log("not found");
}










/**********************************These are for the reading purpose*******************************/
// var user = os.userInfo();
// console.log(user);

// var res = notes.addNotes();
// console.log(res);

// var addition = notes.add(9,-2);
// console.log('addition Operation completed');

// //fs.appendFile('greeting.txt','hello,this is aravind');
// //for fs.appendFile will throw error if you are using the v7 or greater then it will throw error message

// // to fix this, we can use this 
// //fs.appendFileSync('usingFileSync.txt','Hello, this is fileSync');

// //this is one way
// //fs.appendFile('greeting.txt',"hello"+user.username+"!");

// //the other and is the best way for string concatenation are
// // fs.appendFile('greeting.txt','hello ${user.username}! '+'you are'+notes.age);


// /**************************use of Lodash utility************************************************/

// console.log(_.isString('abc'));
// console.log(_.isString(2));

// //to filter the duplicates in the array..
// var filteredArray = _.uniq(['Arav',1,'Arav',3,4,2,5,4,6,8,8]);
// console.log(filteredArray);

// /***********************************************************************************************/