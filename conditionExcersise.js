/* 1 Create a function that takes 3 parameters called floor, ceiling and num. All 3 parameters should be
 numbers. Return true if num is between floor and ceiling. Otherwise return false. */
// function measurements(floor, ceiling, num) { 
//     if (num < ceiling && num > floor) {
//         return (true)
//     } else {
//         return (false)
//     }
// }
// let results = measurements(7, 10, 9);
// console.log(results)

/* 2 Create a function that takes 1 parameter that is an object with 2 properties, name and age. Return true 
if the person's age is greater than 30 or their name contains the letter x (case insensitive). 
Otherwise return false. */
func


let person1 = {
    name: Alex,
    age: 21
}

function checkNameAndAge(person) {
    let isOver30 = person.age > 30;
    let foundX = false;
    for (let i = 0; i < person.name.length; i++) {
        let letter = person.name[i].toLowerCase();
        if(letter == "x") {
            foundX = true;
            break;
        }
    }
    if(isOver30 || foundX) {
        return true;
    } else {
        return false;
    }
}

let person1 = {
    name: "Xavier",
    age: 29
}

// console.log(checkNameAndAge(person1));

let person2 = {
    name: "Dan",
    age: 24
}

// console.log(checkNameAndAge(person2));

let person3 = {
    name: "Dave",
    age: 37
}

// console.log(checkNameAndAge(person3));

let person4 = {
    name: "Xanathar",
    age: 45
}

// 3 Create a function that takes 3 parameters. The first should be an object with two properties name and age. The second should be a number, the third should be a string. The function should return true if the age of the object is equal to the second parameter and the name is not equal to the third parameter. Otherwise return false.
function checkAgeNotName(person, age, nameNotToMatch) {
    let ageMatch = person.age == age;
    let namesMatch = person.name == nameNotToMatch;
    if (ageMatch && !namesMatch) {
        return true;
    } else {
        return false;
    }
}

let personLuke = {
    name: "Luke",
    age: 23
};
let ans = checkAgeNotName(personLuke, 24, "Luke")
// console.log(ans);

let pets = [
    {
        name: "Rex",
        age: 4,
        ownerName: "Luke"
    }, {
        name: "Spot",
        age: 7,
        ownerName: "Jade"
    }, {
        name: "Scooby",
        age: 3,
        ownerName: "Shaggy"
    }, {
        name: "Lucky",
        age: 1,
        ownerName: "Luke"
    }, {
        name: "Sadie",
        age: 3,
        ownerName: "Daniel"
    }, {
        name: "Duke",
        age: 5,
        ownerName: "Sabine"
    }
];

