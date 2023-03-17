const cars = ["Ford Mustang", "Aston Martin DB-9","Tesla","VW Beetle","Hummer"] ; // the data array of cars 
const favourite = "Aston Martin DB-9" // the variable that is my favourite veichle from the data array 
const output_Is = "is my favouite veichle"; // the output statement for my favourite veichle 
const output_Is_Not = "is not my favourite veichle"; // the output statement for the data array that are not my favourite veichles 
const the = "The";  

for(let i = 0; i < cars.length; i++){/* In this loop i is our varable that will change in value, we start it at 0 to be able output the cars index value from 0-4 
our stopping condition is that i is less than cars.length which would be 5, we add 1 to i in each loop and output the below statements*/

    if(favourite === cars[i]){ /* We add the if/else statement that if the variable favourite is equal to any of the data in the arrray,
    we output a statement to identify which data entry is our favourite car */
        console.log(`${the} ${cars[i]} ${output_Is}`);
    } else {//else we output a statement that the other data entries in the array are not our favourite veichles.
        console.log(`${the} ${cars[i]} ${output_Is_Not}`)
    }
}
