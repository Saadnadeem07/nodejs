import greet from "./greet.js"; //.js is compulsory othewise you will run into errors
import { person1, person2, person3 } from "./persons.js"; //naming matters here

//must use person1 ... because exporting this from persons.js
greet("saad");
greet(person1);
greet(person2);
greet(person3);

//console.log(__filename) //can't be used in ES-Modules
//console.log(__dirname) //can't be used in ES-Modules
