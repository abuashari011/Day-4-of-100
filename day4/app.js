// ========Array=========
let fruits = ['Banana','Pew','Guava','Pineapple'];
let sort = fruits.sort();
let reverse = fruits.reverse();
console.log(fruits);
console.log(sort);
console.log(reverse);

//======== sort the Number ==========
let number = [1,4,5,2,4,5,8];
number.sort(
    function(a,b){
        return a - b;
    }
)
// console.log(number);
// let myArrayMin = function(number){
//     return Math.min.apply(null,number);
// }
// console.log(myArrayMin())
let max = Math.max.apply(null,number);
let min = Math.min.apply(null,number);
console.log(min);
console.log(max);

// S0rting the object;

let details = [
    {person: 'Ashari',roll: 4},
    {person: 'Priasish',roll : 5},
    {person: 'Zayed',roll: 3},
    {person: 'Sayed',roll: 10},
];
console.log(details);
details.sort(
    function(a,b){
        return a.roll - b.roll
    }
)
console.log(details);
details.sort(
    function(a,b){
        let x = a.person.toLocaleLowerCase();
        let y = b.person.toLocaleLowerCase();
        if(x<y){return -1}
        if(x>y){return 1}
        return 0;
    }
);
console.log(details);

let newArray = ['Ashari',undefined,'Priasish',9,4,'Zayed','Rojel',1,null];
newArray.sort();
// newArray.reverse();

let count = 0;
console.log(newArray);
for(let i = 0; i < newArray.length; i++){
    if(!newArray[i]){
        count++;
    }
}
console.log(count)



//********************************************/
// ================ Finding deta Game===============
//=============================================


let isFound = false;
let find = 8;
let arr2 = [2,4,56,766,7,8,8,122,546,8];
let foundCount = 0;
for( let i = 0; i < arr2.length; i++){
    if ( arr2[i] === find){
        console.log('Data found at the index of ' + (i+1));
        foundCount++;
        isFound = true;
    }
}
if(!isFound){
    console.log('Data Not Found');
}else {
    console.log('Data found in '+ foundCount + ' Times')
}