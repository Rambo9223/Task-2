const cars = ["Ford Mustang", "Aston Martin DB-9","Tesla","VW Beetle","Hummer"] ; // the data array of cars 
const favourite = "Aston Martin DB-9" // the variable that is my favourite veichle from the data array 
const output_Is = "is my favouite veichle"; // the output statement for my favourite veichle 
const output_Is_Not = "is not my favourite veichle"; // the output statement for the data array that are not my favourite veichles 
const the = "The";  

for(let i = 0; i < cars.length; i++){
    // if else statement written in shorthand
    (favourite === cars[i])? 
        console.log(`${the} ${cars[i]} ${output_Is}`):console.log(`${the} ${cars[i]} ${output_Is_Not}`)
    }

