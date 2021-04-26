// Code your solutions in this file
for (let age = 30; age < 30; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts = ["teddy bear", "drone", "doll"];;

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
    }
    
    return gifts; 
}

let newArray = [];

function writeCards(name,specification){
    for (let i = 0; i < name.length; i++){
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${specification} gift!`); 
    }

    return(newArray); 
}


function countDown(n){
    let countDown = 0;
    while (n >= countDown){
        console.log(n--);
    }
}

