//So, Thanks for time. I will put these codes in the descirption you can access from there and run and learn each method one by one..

// Thanks You 






// so, the next method is as follow 

//Lets me comments all the uncommented code to discuss one of the important debugging fashion that is used by everyone.

// So, for now we were using a default pre-defined console object to print on the default terminal for node. Now we will see how to console the message in the debugging file 
// const fs = require('fs') // importing fs module
// const {Console} = require('node:console') // importing Console object from node:console

// const output = fs.createWriteStream('./stdout.log') // creating writestream to file in which we want to write the console message
// const errorOutput = fs.createWriteStream('./stderr.log'); // creating write stream for error message 

// const logger = new Console({stdout : output, stderr : errorOutput}) // Here we are creating a new console object from console module. This helps us to create new console, which will help us to write messages to custom file

// //So, if we write as below 
// logger.log("Hi all, I am software engineer and working in it service based company based in hyderabad...") 
//Since, we donot have logger file , writestream will create the file and log the output to that  file. Lets see 
//So, this is how we use in our project to log all our messages as well as error to our files and we keep the track of our system..

//There is methods for getting the execution time of the program , so console.time() && console.timeEnd().  Lets see 

// console.time();

// console.group() && console.groupEnd() 
// The two method above is used to provide intendation to the message that prints in the console
//Lets see 

// console.log("Hi Everyone")
// console.group();//1st intendation
// console.log('My name is Amrit Anand and i am currently working as software engineer in hyderabad')
// console.group(); //2nd intendation
// console.log('I am working as full stack developer. Technologies includes nextjs, reactjs and graphql')
// console.groupEnd();
// console.groupEnd();
// console.log("Finished with my introduction")

//Lets now print to console..., from the output we can understand how that work





// console.table([{a : 1, b: 4}, {a: 9, b: 12}]) // This functions seeks for object like data and console the table , lets check..

// console.debug('Hello world') // This method is alias of console.log() method


// console.count('rohan') // .count method is used to count the specific string label provided. Also, it logs the count of occurrence of that label onto the console
// console.count('amrit')
// console.count('amrit')
// console.count('amrit')
// console.count('rohan')
// console.count('mohan')
//we can see above method counts the no of occurrence of certain label and logs to the console.. Node internally maintains the counter.

// console.log('Hello world ..') // used to print onto the console..

// console.error(new Error('Error occurred')) // Help us to log error onto console

// console.warn('Warning ...code broke..') // helps us to log warning message to console

// //Here we shall put timeEnd methods 
// console.timeEnd(); // So, we can see execution time into the console of node terminal 