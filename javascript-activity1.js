// ! Problem #1: What should the following evaluations return? 

    // 2 == '2' // ---> true
    // 'he' == 'she' // ---> false
    // 2 === 2 // ---> true
    // 'true' == true // ---> false
    // true === true // ---> true
    // 'true' != true // ---> true
    // 'true' !== true // ---> true


// ! Problem #2: What are the three different ways you can declare a variable? And what is the differences between them? 

    // The three different ways to declare a variable are var, let, and const. 
    // The difference between them, is that var is used to declare a variable globally. While const and let are declared locally and can only be accessible within the block where the variable is defined. 
    // However, let can be re-assigned, while const cannot be re-assigned.


// ! Problem #3: Write a simple function for each type of these functions:

    // - First-Class Function

        // const addFunct = (x, y) =>{
        //     return x + y;
        // }

        // console.log(addFunct(3,3))

    // - Higher-Order Function

        // const addFunct = (x, y) => {  
        //     return x + y  
        // }  
        
        // function higherOrderFunct(x, addReference) {  
        //     return addReference(x, 10)  
        // }  
        
        // console.log(higherOrderFunct(50, addFunct))

    // - Callback Function

        // const subFunct = (x, y) => {  
        //     return x - y  
        // }  
        
        // function higherOrderFunct(x, subReference) {  
        //     return subReference(x, 2)  // <---- CALLBACK
        // }  
        
        // console.log(higherOrderFunct(17, subFunct))


// ! Problem #4: What is the value of the console.log of “a”, “b”, and “c” shown in the code below?

        // const a = 'hi';

        // console.log(c); // ---> undefined

        // const someFunction = (arg) => {
        //     const b = 'bye';

        //     if (arg) {
        //         const c = 'see ya!';
        //         console.log(a); // ---> hi 
        //         console.log(b); // ---> bye
        //     }
        // }

// ! Problem #5: Given the following data structure, write a for loop using:

// const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        // FOR 

            // for (let i = 0; i < someArray.length ; i++ ){
            //     console.log(someArray[i]);
            // }

        // For ..Of

            // for (let i of someArray) {
            //     console.log(i)
            // }

//! Problem #6: Given the following data structure:

// const someArray = [1, 2, 3, 4, 5];

//? - Use the concat() method to merge the two arrays to return: [1, 2, 3, 4, 5]

    // const someArray = [1, 2, 3];
    // const someArray1 = [4,5]

    // console.log(someArray.concat(someArray1))

//? - Use the length property to return the length of the array

    // console.log(someArray.length)

//? - Use the filter() method to filter out the element “3” and return: [1, 2, 4, 5]

    // const filterOut3 = someArray.filter(num => num !== 3)
    // console.log(filterOut3); 

//? - Use the find() method to find and return the value of 5.

    // const findNumber5 = someArray.find(num => num === 5);
    // console.log(findNumber5)

//? - Use the slice() method to return back this array: [3, 4]

    // console.log(someArray.slice(2, 4))

//? - Use the splice() method to return back this array: [1, 2, 5]

    // const spliceArray = someArray.splice(2,2)
    // console.log(someArray)

//? - Use the includes() method to return back TRUE when I pass in “4” into the includes method.

    // console.log(someArray.includes(4));

//? - Use the indexOf() method to return back the index of the element “2”

    // console.log(someArray.indexOf(2));

//? - Use the isArray() method to return back TRUE when I pass in the array

    // console.log(Array.isArray(someArray))

//? - Use the join() method to return back: “1, 2, 3, 4, 5”

    // console.log(someArray.join(', '))

//? - Use the map() method to return back a new array: [2, 4, 6, 8, 10]

    // const returnNew = someArray.map( x => {
    //     return x * 2
    // })

    // console.log(returnNew)

//? - Use the pop() method to return back a new array: [1, 2, 3, 4]

    // console.log(someArray.pop())
    // console.log(someArray)

//?- Use the push() method to return back a new array: [1, 2, 3, 4, 5, 6]

    // console.log(someArray.push(6))
    // console.log(someArray)


//? - Use the shift() method to return back a new array: [2, 3, 4, 5]

    // console.log(someArray.shift())
    // console.log(someArray)

//? - Use the unshift() method to return back a new array: [0, 1, 2, 3, 4, 5]

    // console.log(someArray.unshift(0))
    // console.log(someArray)

//? - Sort this array to return [9, 1, 3, 5] using the sort() method

    // const someArray2 = [9, 1, 3, 5];

    // someArray2.sort()
    // console.log()

//? - Use the reduce() method to return back the sum of all numbers in the array

    // const returnSum = someArray.reduce((previousValue, currentValue) => previousValue + currentValue, 0)

    // console.log(returnSum)

//! - Problem #7: Given the following data structure:

    // const someObject = {
    //     color: 'black'
    // }

    // console.log((someObject))

//? - Use the assign() method to add a new key value pair of: name: ‘john doe’

    // Object.assign(someObject, {name: 'john doe'})
    // console.log((someObject))

//? - Use the dot notation to add a new key value pair of: age: 22

    // someObject.age = 22;
    // console.log((someObject))

//? - Use the bracket notation to add a new key value pair of: address: ‘123 test address’

    // someObject['address'] = '123 test address';
    // console.log((someObject))

//? - Use the keys() method to return a array back of the keys: [“color”, “name”, “age”, “address”]

    // console.log(Object.keys(someObject))

//? - Use the values() method to return a array back of the values: [“black”, “john doe”, “22”, “123 test address”]

    // console.log(Object.values(someObject))

//? - Use the for…in loop against this object to console.log each of the keys values. 

    // for (let x in someObject){
    //     console.log(`${someObject[x]}`);
    // }

//! Problem #8: Given the following data structure: 

    // for (const key of numbers) {
    //     console.log(key['num']);
    // }

//! Problem #9: Create a new Set() object

    // const newObj = new Set();

//? - Add a new value of: ‘john doe’

    // newObj.add('john doe')

//? - Check if the value of ‘john doe’ exists

    // console.log(newObj.has('john doe'))
    // console.log(newObj)

//? - Remove the value of ‘john doe’

    // console.log(newObj.delete('john doe'))
    // console.log(newObj)

//! Problem #10: Create a new Map() object

    // const newProfile = new Map();

//? - Add a new key-value pair of: name: ‘john doe’

    // newProfile.set('name', 'john doe')
    // console.log(newProfile)

//? - Check if the value ‘john doe’ exists

    // console.log([...newProfile.values()].includes('john doe'))

//? - Remove the key-value pair of ‘john doe’

    // newProfile.delete('name')
    // console.log(newProfile)

//! Problem #11: Explain what asynchronous programming means in 3 sentences. 

    // Asynchronous programming allows you to run and execute multiple tasks at the same time. 
    // It enables your program to start a potentially long running task and while still being responsive with other tasks.
    // Asynchronous programming improves performances and responsiveness of your programs, 
    // like for example, you will not have to spend a long time waiting on loading screens because you will not have to wait for a data to load at each new screen.

//! Problem #12: Explain what call back hell is.

    // Callback hell occurs when a complex nested callbacks happen. This happens when every callback takes an argument that is a result from your previous callbacks.
    // When your code structure looks like a pyramid, your code becomes complicated, making it difficult for your to read and maintain it. 
    // And once there is an error to one of your functions, the other functions might get affected.

//! Problem #13: Explain what is a promise and describe the possible states of promises.

    // A promise is simply a placeholder for an asynchronous task which is yet to be completed. It is a way to easily manage multiple asynchronous operations where
    // callbacks can create callback hell leading to unmanageable code. 
    // A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
    // Fulfilled is the action related to the promise succeeded. Rejected is the action related to the promis failed. While Pending, is not fulfilled or rejected yet. 

//! Problem #14: What is async/await?

    // Async and await are extensions of promises. Async means a function always RETURN a promise. If a promise is not returned, Javascript automatically wraps it in a resolved promise with its value.
    // Await function is used to WAIT for the promise. It makes the Javascript wait until that promises settles and returns its result. It can only be used inside a Async block.

//! Problem #15: Using Git, please push this code up to your GitHub repo following the directions: 