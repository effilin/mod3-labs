// Question 1
//
let puppy = 'archie more';
const sentence = 'hello, what a great day.';
let capitalize = puppy.charAt(0).toUpperCase() + puppy.slice(1);
console.log(capitalize);

function capitalizeItAll(string) {
 const wordsArr = string.split(" ");
 for( let i = 0; i < wordsArr.length; i++ ) {
   const word = wordsArr[i];
   const firstL = word[0];
   const rest = word.substring(1);
   const capL = firstL.toUpperCase();
   const upWords = capL + rest;
   wordsArr2.push(upWords);
 };
 return wordsArr2.join(' ');
 };
 const wordsArr2=[];
console.log(capitalizeItAll(sentence));

 


// Question 2
//
function truncate(str , max) {
    const x = parseInt(max);
    const text = String(str);
    const wordLength = text.length;
    if( wordLength > x) {
        const shortened = text.slice(0, x);
        console.log(shortened + "..." );
    }
    else if ( wordLength == 0) {
        const err = "not a sentence";
        return err
    }
    else {
            return text;
        }
    };

truncate(sentence, 10);

function truncateIt(str, max) {
    const x = parseInt(max);
    const text = String(str);
    const wordLength = text.length;
    const shortened = text.slice(0, x);
    return wordLength > x ? console.log(shortened + "...") : console.log(text);
}
truncateIt(sentence, 13);
const carterS = "Tiger elephant cheetah cow cat pig riendeer dog mouse" 
truncateIt(carterS, 53);

//Question 3
//
const animals = ['Tiger', 'Giraffe'];
animals.push("Zebra");
animals.push('Flamingo');
console.log(animals);
animals.unshift("Rhino");
animals.unshift("Hyena");
console.log(animals);
animals.sort();
console.log(animals);

function replaceMiddleAnimal ( newValue) {
    const middle = Math.round((animals.length)/2);
    animals[middle] = newValue;
    console.log(animals);
}
replaceMiddleAnimal( 'Dog' );

function findMatchingAnimals (beginsWith) {
   const results = animals.filter((animal) => animal.toLowerCase().startsWith(beginsWith.toLowerCase()));
   return results;
}

console.log(`Testing findMatchingAnimnal ${findMatchingAnimals('Tiger')}`)
    
// Question 4
//
function camelCase(cssProp) {
    const words = cssProp.split('-');
    const camelCaseWords = [];
    for( let i=0; i < words.length; i++) {
        if ( i===0) {
            camelCaseWords.push(words[i]);
        } else {
            const word = words[i];
            const firstL = word.charAt(0);
            const capitalize = firstL.toUpperCase();
            const rest = word.slice(1);
            const camelCased = capitalize + rest;
            camelCaseWords.push(camelCased);
        }
    }   
    return camelCaseWords.join('');
    }
console.log(camelCase('margin-left'));

//B:
function camelCase2(cssProp) {
    const text = cssProp.split('-');
    const finishIt = [];

    for ( const word in text ) 
        if( text[0]) { 
            finishIt.push(text[word]);
        } else {
            const restWords = text.map((word) => word.charAt(0).toUpperCase())+word.slice(1); 
            const camelCased = finishIt+restWords;
            camelCased.join('');
            console.log(finishIt);
        }

    }

    console.log(camelCase2('background-image'));


function camelCase3(cssProp) {
    const text = String(cssProp);
    const indexHere = text.indexOf('-');
    const finishIt = [];
    for( let i = 0; i < text.length; i++) {
        const letter = text[i];
        if ( letter != '-') {
            finishIt.push(letter);
        }
        else {
             finishIt.push(letter.replace('-', ''));
             text[indexHere +1].toUpperCase();

    }
}
console.log(finishIt.join(""));
}

camelCase('margin-left');
camelCase2('background-image');
camelCase3("margin-right")

// Question 5
//
//A: toFixed()  returns a string, with the number written to as many decimal points as you specify.
// console.log(fixedTwenty + fixedTen) would concatenate two strings not add two numbers
//B: 
 function currencyAddition (float1, float2) {
    const result = ((float1 * 10 + float2 * 10)/ 10);
    console.log(result);

 }
 currencyAddition(.500, .750);
 //C:
 function currencyOperation (float1, float2, operation, numDecimals) {
    
 
    switch(operation) { 
        case '+': 
          const result = ((float1 * 10 + float2 * 10)/ 10);
          console.log(result);
          break;
        case '-': 
          const result2 = ((float1 * 10 - float2 * 10)/ 10);
          console.log(result2);
          break;
        case '*':
            const result3 = ((float1 * 10) * (float2 * 10)) / 10;
            console.log(result3);
            break;
        case '/':
            const result4 = float1 / float2; 
            console.log(result4);
            break;
    }
 }
 currencyOperation(.2, .1, '/')
// Question 6
//
const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const names = ['Virginia','Stu','Dory','Nemo','Andy','Stu', 'Mary', 'Dory']

function unique(duplicatesArray) {
    return duplicatesArray.filter((item, index) => duplicatesArray.indexOf(item) === index )
console.log(results);
}
console.log(`Testing colors ${unique(colors)}`);
console.log(`Testing testScores ${unique(testScores)}`);
console.log(`Testing names ${unique(names)}`);

// Question 7
//
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

 // A:
    function getBookTitle(bookId) {
       const foundBook = books.find(({id}) => id === bookId);
       return foundBook.title;
    }
    console.log(getBookTitle(2));
// B:

function getOldBooks() {
    const oldBooks = books.filter(({year}) => year < 1950);
    const book = oldBooks.map((book) => book.title);
    return book
   }
   console.log(getOldBooks());

function addGenre() {
    const classicBooks = books.map((book) => ({ ...book, genre:'classic'}));
    return classicBooks[1];
};
console.log(addGenre());

function getTitles(authorInitial) {
    const findAuthor = books.filter(({author}) => author.startsWith(authorInitial));
    const bookTitles = findAuthor.map((book) => book.title);
return bookTitles;
}
console.log(getTitles('H'));

function latestBook() {
    const bookYear = [];
    let newestBook = 0;
    books.forEach((book) => bookYear.push(book.year));
    bookYear.find((year) => {
        if (year > newestBook) {
            newestBook = year;
        }});
    return newestBook;
}
console.log(latestBook())

//Question 8
//
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
//A:
const phoneBookDEF = new Map()
//B:
const phoneBookABCArr = [
    { name:'Dan', phoneN: 3401231234},
    { name:'Eva', phoneN: 2343454567},
    { name:'Freya', phoneN: 5676787890},
];
phoneBookABCArr.forEach((person) => {phoneBookDEF.set(person.name, person.phoneN)});
console.log(phoneBookDEF);
//C:
phoneBookABC.set('Caroline','2739812268');
console.log(phoneBookABC)
//D:
function printPhoneBook(contacts) {
    contacts.forEach((value, key) => {return console.log( key + ': ' + value)});
}
printPhoneBook(phoneBookABC);
//E:
const phoneBook = new Map([...phoneBookABC]);
phoneBookDEF.forEach((value, key) => phoneBook.set( key, value));
//F:
printPhoneBook(phoneBook)

//Question 9
//
let salaries = {
    "Timothy" : 35_000,
    "David" : 25_000,
    "Mary" : 55_000,
    "Christina" : 75_000,
    "James" : 43_000
    };
//A:

 
  function sumSalaries(salaries) {
    let i= 0;
    let salaryArr = Object.values(salaries);
    salaryArr.forEach((salary) => i += salary);
    console.log(i);
    return i;
    }
console.log( `Sum of Salaries: $${sumSalaries(salaries)}`);
//B:

 function topEarner(salaries) {
  const values = Object.values(salaries);
  const maxSalary = Math.max(...values);
  const topEarner = Object.keys(salaries).find((key) => salaries[key] === maxSalary);
  return topEarner;
 } 

console.log(topEarner(salaries));




 //Question 10
 //
 const now = new Date();
 //A:
function minToday() {
    const hours = now.getHours();
    let minSoFar = (hours * 1000) + now.getMinutes();
    return minSoFar
}
 console.log(minToday());
//:B:
function secondsToday() {
    const hours = now.getHours();
    const minSoFar = (hours * 1000) + now.getMinutes();
    const secSoFar = (minSoFar * 1000) + now.getSeconds();
    return secSoFar
}
console.log(secondsToday());
//C:
//
 function myBirthday(year, month, day) {
    const now = new Date();
    const myBirthday = new Date(year, month, day);// class
    const howOldYear = now.getFullYear()-myBirthday.getFullYear();
    const monthsOld = (howOldYear*12)+(now.getMonth() + 1);
    const daysOld = (monthsOld*30)+(now.getDate());
    const old = `I am ${howOldYear} years old, ${monthsOld} months old and ${daysOld}`;
    return old;

}
console.log(myBirthday(1990, 2, 16));
//:D

function daysInBetween(date1, date2) {
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    const yearDiff = firstDate.getFullYear()-secondDate.getFullYear();
console.log(yearDiff);
}
daysInBetween('2020-11-1', '2022-13-4');