/**Program to generate 1000 aleatory names
 * 
 */

const namesMax = 1000;
console.log(`Program to generate ${namesMax} aletory names`)
const { faker } = require('@faker-js/faker');
const fs = require('fs')


var first_line = "This file contains 1000 aleatory names:\n";
fs.writeFile("1000Names.txt",first_line,err => {
    if (err) {
        console.log(err)
    }else{
        console.log("The file was create successfully")
    }
});

for (let i = 0; i < namesMax; i++) {
    let randomName = faker.name.findName(); // Rowan Nikolaus
    fs.appendFile("1000Names.txt",`${i+1}) ${randomName}\n`,err => {
        if (err) {
            console.log(err)
        }
    });
}

console.log(`\n...Finished`)
