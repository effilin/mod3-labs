//Question 1
//
function makeCounter(startFrom, incrementBy) {
    let currentCount = 0;
    let start = Number(startFrom);
    let increment = Number(incrementBy);

    return function() {
        if ( currentCount === 0 ) {
            currentCount++;
            currentCount + start;
            console.log(start);
            return (start);
        }
         else if ( increment === 1){ 
          currentCount++ ;
          console.log(currentCount);
          return (currentCount);
         }
         else{
            currentCount++ ;
            console.log(currentCount+increment);
            return (currentCount+increment);
      }
         }
    }
    
    let counter1 = makeCounter(2, 5);
    //A:
    let counter2 = makeCounter(1, 2);
counter1();
counter1();
counter2();
counter2();
   
 
    // yes counters were independent
    //


    //Question 2
    //
    function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
//A: 
// #4 will print first because it is calling/ initializing the function.
// #3 will print next because it's timeOut is 0ms
// then #2 will be delayed 20ms
// then #1 will be delay 100ms
//B:
const delayMsg2 = (msg) => console.log(`This message will be printed after a delay: ${msg}`);
setTimeout(delayMsg2, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg2, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg2, 0, '#3: Delayed by 0ms');
delayMsg2('#4: Not delayed at all')
//C:
//
const timer1 = setTimeout(delayMsg2, 20_000, 'This is delayed 10 sec');
//D:
//
let cancelledTimer = setTimeout(delayMsg2, 10_000, 'Not in My House');
clearTimeout(cancelledTimer);
clearTimeout(timer1);

//Question 3:
//A: B: C:
function printMe() {
    console.log('printing debounced message')
    }

function debounce(func, time, message) {
   let timerId;

    return function()  {
        clearTimeout(timerId);
        timerId = setTimeout(func, time);
        console.log( message);
    }
}
    printMe = debounce(printMe, 1000, "Hello"); //create this debounce function for a)
    //fire off 3 calls to printMe within 300ms - only the LAST one should print, after
    //1000ms of no calls
    setTimeout( printMe, 100);
    setTimeout( printMe, 200);
    setTimeout( printMe, 300);

//Question 4:
//
function fib(num, memo) {
    memo = memo || {};
  
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
    return console.log(memo[num] = fib(num - 1, memo) + fib(num - 2, memo));
  }

  function printFibonacci(limit) {
   
     let count = 0;
     let interval1 = setInterval(() => { 
      console.log (fib(count));
      if (count == limit) clearInterval(interval1);
      count++;
      }, 1000);   
  }
printFibonacci(1); 

function printFibonacciTimeouts(delay, limit) {
    let count = 1;
    setTimeout(function fib(count) {
       console.log(count);
       if (count < limit) setTimeout(fib, delay, count+1);
    }, delay, count);
    }

printFibonacciTimeouts(100, 1);

//Question5
//
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
}
};
car.description(); //works
//setTimeout(car.description, 200); //fails because it is evaluating car.description in a global context/ setTimout defaults to the window object.

setTimeout(() => {
car.description();
}, 2000);

console.log({...car,year: 2000});
console.log("Answer to 5:B " + car.description());
//C: the delay caused car to use the new value because it is async and when it called to car.year the value had just been changed
//D:
const boundDescription = car.description.bind(car);
setTimeout(boundDescription, 1000, 'Answer5:D');
//E:
console.log({...car, model: 'deluxe'});
setTimeout(boundDescription, 2000, 'Answer5:E');
//

/// Question 6>
/*
function multiply(a, b,) {
    console.log( a * b );

    }
// A:
const delay = new Function("time", "return setTimeout(() => this, time)")
multiply.prototype = delay;
console.log(multiply.delay(500)(5, 5)); // prints 25 after 500 milliseconds

//B:
function wrapper() {
    return
}
*/
///Question7:
//A 

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    }
    const person1 = new Person('James Brown', 73, 'male')
//A
    Person.prototype.toString = function customString() {
    return `${this.name}`+' is '+`${this.age}`+ " year old "+`${this.gender}`;
 }
    console.log(person1.toString())
//B
    const person2 = new Person('Archiebald Nummer', 3,  'male');
    const person3 = new Person('Ellenor Nummer', 54 , 'female');
    console.log(person2.toString());
    console.log(person3.toString());
//C
function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender);
    this.cohort = cohort;
}
Student.prototype.toString = function customString() {
    return `${this.name}`+' is '+`${this.age}`+ " year old "+`${this.gender}` +' cohort: '+`${this.cohort}`;
}
//D
 const student1 = new Student('J Jones', 21, 'male', 'freshmen');
 const student2 = new Student('M Myers', 23, 'female', 'junior');

 console.log(student1.toString());
 console.log(student2.toString());

//Question 8
//
class DigitalClock {
    constructor(prefix) {
    this.prefix = prefix;
    }
    display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
    date.getSeconds()];
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
    clearInterval(this.timer);
    }
    start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
    }
    }
    const myClock = new DigitalClock('my clock:')

    class PrecisionClock extends DigitalClock {
        display() { 
            super.display();
            this.precision();
        }
        precision() {
            let date2 = new Date();
            let ticks = date2.getMilliseconds();
            return console.log(`${ticks}`);
        }
    }
    const showMeTicks = new PrecisionClock('Show Me the Ticks');
    
    showMeTicks.precision();

    class AlarmClock extends DigitalClock {

        wakeUp(hh = 7, mm = 0) {
            let date3 = new Date();
            let [hours, mins] = [date3.getHours(), date3.getMinutes()];
            if (hh === hours && mm === mins)
                console.log("Wake UP!")
            super.stop();    
        }
    }
    const setAlarm = new AlarmClock('wake me up');
    setAlarm.start();
    setAlarm.wakeUp(8,2);