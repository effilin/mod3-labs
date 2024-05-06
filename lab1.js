"" + 1 + 0 // 1  //
"" - 1 + 0 // undefined //
true + false // 1 //
!true // 0 //
6 / "3" // 2 //
"2" * "3" // 6 //
4 + 5 + "px" // 45px //
"$" + 4 + 5 // $45 //
"4" - 2 // 2 //
"4px" - 2  // undefined //
" -9 " + 5 // -95 //
" -9 " - 5 // -14 //
null + 1 // undefined //
undefined + 1 // 1 //
undefined == null // true //
undefined === null // false //
" \t \n" - 2 // undefined //
console.log ('' + 1 + 0)
console.log( "" - 1 + 0 )
console.log( true + false )
console.log( !true )
console.log( 6 / "3" )
console.log( "2" * "3" )
console.log( 4 + 5 + "px" )
console.log( "$" + 4 + 5)
console.log( "4" - 2 )
console.log( "4px" - 2  )
console.log( " -9 " + 5  )
console.log( " -9 " - 5 )
console.log( null + 1)
console.log( undefined + 1)
console.log( undefined == null)
console.log( undefined === null)
console.log( " \t \n" - 2)

// question 2
//
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four
let multiplication = three * four
let division = three / four
let subtraction = three - four
let lessThan1 = three < four
let lessThan2 = thirty < four
//1 
console.log(addition)
// this is concatenating two strings. to fix it we could use numbers 
// or we can convert the string to a number with Number()
let Naddition = Number(three) + Number(four)
console.log (Naddition)
console.log(multiplication)
console.log(division)
console.log(lessThan1)
console.log(lessThan2) 
// returns true but is false. Strings are compared alphabetically.
//turn it into a number to compare number

//question 3
//
if (0) console.log('#1 zero is true')// 0 returns false
if ("0") console.log('#2 zero is true') // a string returns true
if (null) console.log('null is true') // null returns false
if (-1) console.log('negative is true') // numbers other than 0 return true
if (1) console.log('positive is true') // numbers other than 0 return true
// implicit boolean conversions 

// question 4
//
let a = 8, b = 5;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}
let resultNew = (a + b < 10) ? `${a} +  ${b} is less than 10` : `${a} + ${b} is greater than 10`;
 console.log(resultNew)
 // x += 10 would read : x = x + 10
 
 //question 5
 //
 const name1 = "Effie" ;
 function getGreeting(name1) {
    return 'Hello ' + name1 + '!';
    }
// above is a function declaration. it can be hoisted and work before it is defined

   const getGreetingB = function (name1) {
      return " Hello " + name1 + " ! " ;
   }
   // this is a function expression. it is not hoisted and can't be used before it is defined. 

   const getGreetingC = (name1) => { return " Hello " + name1 + " ! " };
   // this is an arrow function 

   console.log( getGreeting(name1));
   console.log( getGreetingB(name1));
   console.log( getGreetingC(name1));

   //Question 6
   //
   const westley = {
      name: 'Westley',
      numFingers: 5
      }

      const rugen = {
      name: 'Count Rugen',
      numFingers: 6
      }

      const inigo = {
        firstName: 'Inigo',
        lastName: 'Montoya',
        
        greeting(person) {
            let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`;
            console.log(greeting + this.getCatchPhrase(person));
         },

         getCatchPhrase: (person) => person.numFingers == 6 ? ' You killed my father. Prepare to die.': ' Nice to meet you',

      }

      inigo.greeting(westley)
      inigo.greeting(rugen)

      //Question 7
      //
      const basketballGame = {
         score: 0,
         fouls: 0,

         freeThrow(score) {
             this.score++;
             return this;
             },

         basket(score) {
              this.score += 2;
              return this;
         },

         threePointer(score) {
            this.score += 3;
            return this;
         },
         foulCount(fouls) {
            this.fouls++;
            return this;
         },

         halfTime(score, fouls) {
            console.log('Halftime score is ' + this.score + '.' + ' Foul count:' + this.fouls);
         },
         fullTimeFinal(score, fouls) {
           console.log('Final Score is ' + this.score + '.' + ' Foul count:' + this.fouls);
         },
      }
         //modify each of the above object methods to enable function chaining as below:
         basketballGame.basket().foulCount().freeThrow().freeThrow().foulCount().basket().threePointer().foulCount().halfTime();
         basketballGame.basket().threePointer().foulCount().freeThrow().freeThrow().basket().basket().fullTimeFinal();

// Question 8:
//
const sydney = {
   name: 'Sydney',
   population: 5_121_000,
   state: 'NSW',
   founded: '26 January 1788',
   timezone: 'Australia/Sydney'
}

function printCity(city) {
  for (let key in city)    {
   console.log(`${key}: ${city[key]}`);
  }    
}
  const richmond = {
   name: 'Richmond',
   population: 60_000_000,
   state: 'Virginia',
   founded: '1737',
   timezone: 'Eastern standard'
  }

printCity(sydney);
printCity(richmond);

// Question 9
//
let teamSports = ['Hockey', 'Cricket', 'Volleyball'] /* This is an Array */
const teamSportsDeep =JSON.parse(JSON.stringify(teamSports));
let dog1 = 'Bingo'; /* this is an variable */
let cat1 = { name: 'Fluffy', breed: 'Siberian' }; /* this is an object with properties */
const Cat1Deep =JSON.parse(JSON.stringify(cat1));
let moreSports = teamSportsDeep;
  moreSports.push("Snowboarding");
  moreSports.unshift("Soccer");

  console.log(teamSports); // team sports did change because it is an Array

let dog2 = dog1;
dog2 ='Ellie';

let cat2 = Cat1Deep;
cat2.name = 'Archie';
console.log(moreSports); // moreSports was made into an array, therefor changeable
console.log(dog1); // dog1 is a variable, it is not changeable
console.log(cat2); // an object with properties is changeable
console.log( typeof(dog1));
console.log( typeof(teamSports));
console.log( typeof(cat1));
console.log(teamSportsDeep);
console.log(Cat1Deep);

//Question 10
//

class Person {
   constructor(name, age) {
   this.name = name;
   this.age = age;
   this.human = true;
   this.driving = () => this.age > 16;
};
};
let effieN = new Person('Eva', 34 );
console.log(effieN);
let ellieN = new Person('Ellie', 54 );
console.log(ellieN);
let archieN = new Person('Archie', 3 );
console.log(archieN);
console.log(archieN.driving());
