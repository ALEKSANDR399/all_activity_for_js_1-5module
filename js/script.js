
// const logins = ["terlo4", "rafter10", "ghost15"];
// const logindToFind = "ghost15";


// // for (let login of logins) {
// //     console.log("Login", login);
// //     console.log(`${login} === ${logindToFind}:`, login === logindToFind);
// //   if (login === logindToFind) {
// //     message = (`Пользователь с ${logindToFind} найден`)
// //   }

// // }
// // console.log(message);
//  const message = logins.includes(logindToFind) ? "круть" : "хрень";
// // console.log(logins.includes(logindToFind));
// console.log(message);


// const numbers = [23, 31, 45, 2, 10, 33, 89];
// let biggestNumber = numbers[0];


// for (const number of numbers) {
    
//     if (number > biggestNumber) {
//         biggestNumber = number;
//     }
    
// }
// console.log("biggestNumber :", biggestNumber);

// const friends = ['alex', 'dina', 'sara', 'cripto', 'debra', 'li'];
// let string = '';

// string = friends.join(', ');
// console.log(string);
// console.log(friends);

// const string = 'JavaScript';
// const letters = string.split('');
// let invertorString = '';
// for (const letter of letters) {
//     invertorString += letter=== letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }




// // for (const letter of letters) {
// //     // console.log(letter);
// //     if (letter === letter.toLowerCase()) {
// //         // invertorString === letter.toUpperCase();
// //         // console.log('Это нижний регистр -', letter);
// //         invertorString += letter.toUpperCase();
// //     }
// //     else { invertorString += letter.toLowerCase(); }
// // }
// console.log( invertorString);
// const title = "Top 10 benefits of React framework";
// // const normalazedTitle = title.toLowerCase();
// // console.log(normalazedTitle);
// // const words = normalazedTitle.split(' ');
// // console.log(words);
// // const slug = words.join('-');

// // console.log(slug);

// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);

// const array1 = [5, 10, 15, 20];
// const array2 = [30, 40, 50];
// const sum = array1.concat(array2);
// let total = 0;
// for (const number of sum) {
//     total += number;
// }
// // for (let i = 0; i < array1.length; i += 1) {
// //     total += sum;
   
// // }
// // for (let i = 0; i < array2.length; i += 1) {
// //     total += array2[i];
    
// // }
// console.log(total);

// const cards = [
//     "Карточка - 1",
//     "Карточка - 2",
//     "Карточка - 3",
//     "Карточка - 4",
//     "Карточка - 5",
// ];



// const cardToRemove = "Карточка - 3";
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// const remove = cards.splice(2, 1);
// console.log(cards);

// const cardToInsert = 'Карточка-6';
// const insert = cards.splice(3, 0, cardToInsert);
// console.log(cards);

// const cardToUpdate = "Карточка - 4";
// const update = cards.splice(1, 1, cardToUpdate);
// console.log(cards);
// function checkAge(age) {
//   if (checkAge >= 18) {
//     // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }
// console.log();

// checkAge(20);
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     // let sumPriceWords;
    
//     const totalPrice = message.splite(' ').length * pricePerWord;
//     console.log(totalPrice);
//     return totalPrice;
//     // for (const word of message) {
//     //     word = pricePerWord.Number();

//     //     sumPriceWords += word;
//     // }
    
//     // console.log(sumPriceWords);

//    // Change code above this line
// }

// calculateEngravingPrice("message brabus hren vladlen", 10);

// function slugify(title) {
//   // Change code below this line
//     // const normalizedTitle = title.toLowerCase();
//     // console.log(normalizedTitle);
//     // const words = normalizedTitle.split(' ');
//     // console.log(words);
//     // const slug = words.join('-');
//      const slug = title.toLowerCase().split(" ").join("-");
//     console.log(slug);
//   // Change code above this line
// }


// slugify("English home beginer RACK");
// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120
// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведения операции введите сумму больше нуля");
//   } else if (amount > balance) {
//     console.log("Недостаточно средств на счету");
//   } else {
//     console.log("Операция снятия средств проведена успешно");
//   }
//     if (amount === 0) {
//     console.log("Для проведения операции введите сумму больше нуля");
//     return;
//   }

//   // Если условие первого if не выполнилось, его тело пропускается
//   // и интерпретатор доходит до второго if.
//   // Если условие выполняется, вызывается console.log и выход из функции.
//   // Код идущий после тела if  не выполнится.
//   if (amount > balance) {
//     console.log("Недостаточно средств на счету");
//     return;
//   }

//   // Если ни один из предыдущих if не выполнился,
//   // интерпретатор доходит до этого кода и выполняет его.
//   console.log("Операция снятия средств проведена");
// }

// withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
// withdraw(500, 300); // "Недостаточно средств на счету"
// withdraw(100, 300); // "Операция снятия средств проведена успешно"
// function calculateTotal(number) {
//  // Change code below this line
//   let total = 0;
// for(let i = 0; i <= number; i += 1){
//     total += i;
//     console.log(total);

// }
//   return total;
// }
// calculateTotal(1);
// calculateTotal(4);
// calculateTotal(10);
// function findLongestWord(string) {
//   // Change code below this line
    
//     let words = string.split(' ');
//     let theLongestWord = words[0];
// 	for (const word of words) {
//         // console.log(word);
//         if (theLongestWord.length < word.length) {
//             theLongestWord = word;
//         }
//     }
//     console.log(theLongestWord);
// return theLongestWord
//   // Change code above this line
// }
// findLongestWord("The longest word in this strict are qwertyui");
// function createArrayOfNumbers(min, max) {
//     let numbers = [];
//     // numbers.push(min);
//     for (let i = min; i <= max; i +=1) {
//          numbers.push(i);
//     }
//   // Change code below this line
//     console.log(numbers);
//   // Change code above this line
//   return numbers;
// }
// createArrayOfNumbers(3, 7)

// function filterArray(numbers, value) {
//    // Change code below this line
//     let numbers1 =[];
    
//     for (const number of numbers) {
//         if (number > value) {
//             numbers1.push(number);
            
//         }
//     }
//     console.log(numbers1);
//     return numbers1;
//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3)

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//     const hasFruit = fruits.includes(fruit);
//     console.log(hasFruit);
//   return hasFruit; // Change this line
// }
// checkFruit("apple");
// checkFruit("plum");
// checkFruit("pineapple");
// function getCommonElements(array1, array2) {
//     const newArray = [];
//     for (let i = 0; i < array1.length; i += 1) {
//         if (array2.includes(array1[i])) {
//             newArray.push(array1[i]);
//         }
//     }
//     console.log(newArray);
//     return newArray;
// }
// getCommonElements([1, 3, 5], [2, 4, 5, 1])
// // const numbers = [23, 31, 45, 2, 10, 33, 89];
// // let biggestNumber = numbers[0];


// for (const number of numbers) {
    
//     if (number > biggestNumber) {
//         biggestNumber = number;
//     }
    
// }
// console.log("biggestNumber :", biggestNumber);
// function createArrayOfNumbers(start, end) {
//     let numbers = [];
//     for (let i = start; i <= end; i +=1) {
//         if (i % 2 === 0) {
//             numbers.push(i);
//         }
//     }
//   // Change code below this line
//     console.log(numbers);
//   // Change code above this line
//   return numbers;
// }
// createArrayOfNumbers(2, 5);
// createArrayOfNumbers(8, 8);
// createArrayOfNumbers(3, 17);
// createArrayOfNumbers(2, 5);
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//       number = i;
//     //   break;
//   }
// }
// console.log(number);
// function findNumber(start, end, divisor) {
//   let number;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//          return i;
        
//     }
//   }
//     console.log(i);
//   return number;
// }
// findNumber(2, 6, 5);
// function includes(array, value) {
//   // Change code below this line
//     for (let i = 0; i < array.length; i+= 1) {
//         const element = array[i];
//         if (element === value) {
//         return true;
//         }
//     }
//     console.log(true);
//     return false;
//   // Change code above this line
// }
// includes([1, 2, 3, 4, 5], 3);
// const firstNumber=Number(prompt("Please enter first number")),
//       secondNumber=Number(prompt("Please enter second number")),
//       mathOperation=prompt("Please choose mathematical operations"),
//       typeOfOperation=["+","-","*","/","%"]
// let res;
// function mathFunc(fNumber,sNumber, operation){
//     if(!fNumber&&sNumber){
//         return alert("You entered something but not a number, Please check twice your numbers")
//     }
//     if(!typeOfOperation.includes(operation)){
//         return alert("You entered not valid math operation")
//     }
//     switch(operation){
//         case "+":
//             res=fNumber+sNumber;
//             return alert(`the results is ${res}`)
//         break;
//         case "-":
//             res=fNumber-sNumber;
//             return alert(`the results is ${res}`)
//         break;
//         case "*":
//             res=(fNumber*sNumber).toFixed(2);
//             return alert(`the results is ${res}`)
//         break;
//         case "/":
//             res=(fNumber/sNumber).toFixed(2);
//             return alert(`the results is ${res}`)
//         break;
//         case "%":
//             res=(fNumber%sNumber).toFixed(2);
//             return alert(`the results is ${res}`)
//         break;
//     }
// }
// mathFunc(firstNumber,secondNumber,mathOperation);


// const firstElement = Number(prompt("This is first element"));
// const operation = prompt("This is operation");
// const secondElement = Number(prompt("This is second element"));
// const typeOfOperation = ["+", "-", "*","/", "%"];
// let res;

// function calulate(firstElement, secondElement, operation) {
// if (!firstElement && secondElement) {
//     return "This is invalid element";
// }
// if (!typeOfOperation.includes(operation)) {
//     return "This is invalid operation element";
// }
// switch (operation) {
//     case "+":
//         res = (firstElement + secondElement)
//         console.log(res);
//         break;
//     case "-":
//         res = (firstElement - secondElement)
//         console.log(res);
//         break;
//     case "*":
//         res = (firstElement * secondElement)
//         console.log(res);
//         break;
//     case "/":
//         res = (firstElement / secondElement)
//         console.log(res);
//         break;
//     case "%":
//         res = (firstElement % secondElement)
//         console.log(res);
//         break;
//     }
// }
// calulate(firstElement, secondElement, operation)



// 10 работников, выдать зарплату равную
// function takeSalary(workers, totalSumSalary) {
//     let workerSalary = 0;
//     let total = 0;
//     for (const worker of workers) {
//         total += worker;
        
//         workerSalary = totalSumSalary / total;
        
//     }
//     console.log('Cумма', total);
//     console.log(workerSalary);
//     return total;
// }
// takeSalary([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100000)

// function calculateTotalPrice(items) {
//     let total = 0;
//     for (const item of items) {
//         total += item;
//     }
//     console.log(total);
//     return total;
// }
// calculateTotalPrice([54, 28, 34, 45, 78, 66, 90, 25]);

// function logItems(items) {
    
//     for (const item of items) {
//         console.log(item);
//     }
   
// }
// logItems(["den", "bred", "flibus"]);
// logItems([1, 2, 3, 4, 5, 6, ]);
// const herMaior = "qwertyui";
//  const buraBura = ["qwertyui", "trello", "polyser"];

// function findLogin(allLogins, login) {
//     return (allLogins.includes(login))
//         ? `${login} is right`
//         :  `${login} is uncorrect`;
//     // for (const item of allLogins) {
//     //     if (allLogins.includes(login)) {
//     //         return `${login} is right`;
//     //     }
//     // }
// }
// console.log(findLogin(buraBura, herMaior));
// const psihTerorist = [51, 22, 36, 67, 2, 88, 90];
// const findSmallestNumber = function (numbers) {
//     let smallestNumber = numbers[0];
//     for (const number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//     }
//     console.log(smallestNumber);
//     return smallestNumber;
// }

// findSmallestNumber(psihTerorist);
// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertorString = '';

//     for (const letter of letters) {
//         const isInLowerLetters = letter === letter.toLowerCase();

//         invertorString += isInLowerLetters ? letter.toUpperCase() : letter.toLowerCase();
//     }

//     console.log(invertorString);
//     return invertorString;
// }

// changeCase("qWErtyUi");
// changeCase("REtboTner");
// changeCase("PsiHopATKa");
// const slugify = function (string) {
//     // const normalizeString = string.toLowerCase();
//     // const slug = normalizeString.split(" ").join("-");
//     // return slug;
//     return string.toLowerCase().split(" ").join("-");

// }

// slugify("To 10 framework of React Dance");

// const fn = function () {
//     console.log(arguments);
//     const arg = Array.from(arguments); устаревший синтаксис
//     console.log(arg);
// }

// fn(1, 2, 3);
// fn(10, 20, 30, 40, 50);
// fn(3, 4, 5, 6, 7, 8, 9);


// современный синтаксис
// const fn = function (...arg) {
    
//     console.log(arg);
// }

// fn(1, 2, 3);
// fn(10, 20, 30, 40, 50);
// fn(3, 4, 5, 6, 7, 8, 9);


// // если есть разнотипные элементы
// const fn = function (a, b, c, ...arg) {
//     console.log(`${a}, ${b}, ${c}`);
//     console.log(arg);
// }

// fn("hello", 1, 2, 3);
// fn("h1",10, 20, 30, 40, 50);
// fn("hren petrovich" ,3 , 4, 5, 6, 7, 8, 9);

// const add = function(...args){
//     console.log(args);
//     let total = 0;

//     for (const arg of args) {
//         total += arg;
//     }

//     return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(10, 20, 30, 40, 50));
// const filterNumbers = function (array, ...args) {
//     const newMasiv = [];

//     for (const element of array) {
//         if (args.includes(element)) {
//             // console.log(`${element} есть везде`);
//             newMasiv.push(element);
//         }
//     }
//     console.log(newMasiv);
//     return newMasiv;
// };
// filterNumbers([1, 2, 3, 4, 5], 10, 20, 3, 40, 5);
// filterNumbers([25, 30, 35, 40], 118, 32, 30, 40, 50);
// filterNumbers([100, 200, 300, 400, 500], 10, 200, 30, 40, 50);


// const parabola = prompt("Hren Petrovich");
// console.log(parabola);

// console.log(Math.round(Math.random() * (2 - 1) + 1));
// console.log(Math.pow(1, 9));
// console.log(Math.min(20, 10, 50, 40, 100, 345));
// console.log(Math.round(1.567345));

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }


// const a = [1, 2, 3, 4, 5, 6];
// const b = [10, 20, 30, 40, 50, 60];
// const c = [100, 200, 300, 400, 500, 600];

// const d = [...a, ...b, ...c];
// console.log(d);

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// const all = ['banana', 'tomato', 'orange', 'pineapple', 'potatoes'];
// const vegetables = ['tomato', 'potatoes'];
// const fruits= [];
// //  Создать цикл фор для all
// // Создаемусловие с помощью includes
// // push элементы не попавшие аод совпадение

// for (const element of all) {
//     const itsVegetabl = vegetables.includes(element);
//     if (!itsVegetabl) {
       
//         fruits.push(element);
//     }
        
// }

// for (const element of all) {
//     let isVegetable = false;
//     for (const vegetable of vegetables) {
//         if (element === vegetable) {
//             isVegetable = true;
//             break;
//         }
//     }
//     if (!isVegetable) {
//         fruits.push(element);
//     }
// }
// console.log(fruits);

// светофор
// const whatColor = prompt("Enter color");
// console.log(whatColor);

// switch (whatColor) {
//   case "red":
//     console.log("stop");
//     break;
//   case "yellow":
//     console.log("ready");
//     break;
//   case "green":
//     console.log("walk");
//     break;
//   default:
//     console.log("Please attention");
// }

// const magic = 'авадакедавра'
// const magicSplit = magic.split("");
// magicSplit.splice();
// let total = 0;

// for (let i = 0; i < magicSplit.length; i+= 1) {
//     const element = magicSplit[i];
//     if (element === "а") {
//         total += 1;
//         magicSplit.splice(i, 1);
//     }
// }
// console.log(total);
// console.log(magicSplit);
// const magicNew = magicSplit.join("");
// console.log(magicNew);

// const magic = 'авадакедавра'
// const magicSplit = magic.split("");
// magicSplit.splice();
// let total = 0;

// for (let i = 0; i < magicSplit.length; i+= 1) {
//     const element = magicSplit[i];
//     if (element === "а") {
//         total += 1;
//         magicSplit[i] = "";
//     }
// }
// console.log(total);
// console.log(magicSplit);
// const magicNew = magicSplit.join("");
// console.log(magicNew);


// проверка на NaN!!!!!
// const number = Number('123nsn');
// console.log(isNaN(number)
// );

// const numArray = [1, 0, -4, 9, -2, 35];
// const restart = [];

// for (const number of numArray) {
    
//     if (!number) {
//         continue;
//     }

//     if (number % 2 === 0) {
//         restart.push(number);
//     }
// }
// console.log(restart);

// 1. перебираем массив (for of)
// 2. проверяем остато деления элемента на 2. Если = 0 - число четное
// 3. ноль - "нечетное"
// 4. добавляем четное чист\ло в новый массив

// const numArray = [1, 0, -4, 9, -2, 35, 8, 42];
// const resArray = [];

// for (const number of numArray) {
//   if (!number) {
//     continue;
//   }

//   if (number % 2 === 0) {
//     resArray.push(number);
//   }
// }

// console.log(resArray);


// процент от числа
// const number = [1, 5, 6, 8, 8, 24, 35, 10];

// function myFunction(array) {

//    for (const element of array) {
//        const percentage = ((element / 1000) * 100)+ "%";
//        console.log(percentage);
//    }
// }
// myFunction(number);


// поиск названия карты и суммы денег
// function mycard(cardName, cardArrey, initialSum) {
//     const hasCard = cardArrey.includes(cardName)
//     console.log(hasCard)
    
//     if (!hasCard) {
//         alert("карта не найдена")
//         const re_Input = prompt("Введите еще раз ")
//         mycard(re_Input, cardArrey, initialSum)
//     }
//     if (hasCard) {
//         const summ = Number(prompt("Введите сумму"))
//         console.log(summ)
//         if (isNaN(summ)) { return }
//         const total = initialSum + summ
//         return total
//     }

    
    
//  }

// const result = mycard(input, cards, 500)
// console.log(result)

// const length = Number(prompt("Ведите длину массива"));
// const start = Number(prompt("Ведите начало массива"));
// const end = Number(prompt("Ведите конец массива"));
// const sortArray = [];
// const numArray = [];

// function sort(start, end, length) {
//     const sortArray = [];
//     const numArray = [];
//     for (const i = 0; i < length; i += 1) {
//         numArray[i] = Math.round(Math.random() * (end - start) + start);
//     }
//     for (let i = 0; i < numArray.length; i+= 1) {
//         for (let i = 0; i < sortArray.length; i+=1) {
//             if
            
//         }
        
//     }
// }
// console.log(numArray);
// sort(start, end, length)

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// console.log(apartment.area = 60);
// console.log(apartment.rooms = 3);
// console.log(apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// } );

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// for (const key in apartment) {
//     console.log(key);
//     console.log(apartment[key]);
// }

// for (const key in apartment.owner) {
//     console.log(key);
//     console.log(apartment.owner[key]);
// }


// Функция собирающая числа и сортирующая их в массиве
// const length = Number(prompt('Введите длину массива'));
// const start = Number(prompt('Введите начало массива'));
// const end = Number(prompt('Введите конец массива'));

// function sort(length, start, end) {
//     const numArray = [];

//     for (let i = 0; i < length; i += 1) {
//         numArray[i] = Math.round(Math.random() * (end - start) + start);
//     }

//     for (let i = 0; i < numArray.length; i += 1) {
//         for (let j = 0; j <= numArray.length - i; j += 1) {
//             let temp;
//             if (numArray[j] > numArray[j + 1])
//             {
//                 temp = numArray[j];
//                 numArray[j] = numArray[j + 1];
//                 numArray[j + 1] = temp;
//             }
//         }
//     }
//     return numArray;
// }
// const sortArray = sort(length, start, end);
// console.log(sortArray);

// const friends = [
//     { name: "Brad", online: false },
//     { name: "Dan", online: true },
//     { name: "Igor", online: false },
//     {name: "Sisil", online: true},
// ];

// console.table(friends);

// поиск по имени в масиве объектов
// const findFrindsName = function (allFriends, name) {
//     let message;
//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.name === name);
//         if (friend.name === name) {
            
//          return console.log(`пользователь ${name} найден`);
//         }
//     }
    
// }

// findFrindsName(friends, "Brad");
// // findFrindsName(friends, "Sisil");

// найти все имена наших друзей
// const getAllNames = function(allFriends){
//     const masivName = [];
//     for (const friend of friends) {
//         masivName.push(friend.name);
    
//     }
//     return masivName;
// }

// console.log(getAllNames(friends));

// имена друзей онлайн
// const getOnlineFriends = function (allFriends) {
//     const masivName = [];
//     for (const friend of friends) {
//         // console.log(friend);
//         if (friend.online) {
//             masivName.push(friend.name);
//         }
            
//     }
//     return masivName;
// }

// console.log(getOnlineFriends(friends));

// объекты друзей онлайн
// const getOnlineFriends = function (allFriends) {
//     const newMasiv = [];
//     for (const friend of friends) {
//         // console.log(friend);
        
//         if (friend.online) {
//             newMasiv.push(friend);
//         }
           
//     }
//     return newMasiv;
// }

// console.log(getOnlineFriends(friends));

// получить всех друзей офлайн
// const getOnlineFriends = function (allFriends) {
//     const newMasiv = [];
//     for (const friend of friends) {
//         // console.log(friend);
        
//         if (!friend.online) {
//             newMasiv.push(friend);
//         }
           
//     }
//     return newMasiv;
// }

// console.log(getOnlineFriends(friends));

// если  одной функцией раскидать онлайн и офлайн
// const getOnlineFriends = function (allFriends) {
//     const newMasiv = {
//         online: [],
//         ofline:[],
//     };


//     for (const friend of friends) {
//         // console.log(friend);
        
//         if (friend.online) {
//             newMasiv.online.push(friend);
//             continue;
//         }
       
//         newMasiv.ofline.push(friend);

//         // тоже с помощью тернарника
//         // const key = friend.online ? "online" : "ofline";
//         // newMasiv[key].push(friend);
//     }
//     return newMasiv;
// }

// console.log(getOnlineFriends(friends));


// как найти количество свойств объекта
// const x = {
//     a: 1,
//     b: 2,
//     c: 50,
//     d: 100,
// }

// console.log(Object.keys(x).length);

// Задать об этом вопрос перед лекцией
// let frt = {
//     name: "Artur",
//     age: 30,
// }

// for (const key in frt) {
//     const hren = frt[key];
//     console.log(hren);
// }

//  let frt = {
//     name: "Artur",
//     age: 30,
//     "adress city": true
   
// }
 
// console.log(frt["adress city"]);

// const charodei = {};

// charodei.name = "Vasia";
// charodei.age = 30;

// charodei.name = "Lena";
// // вопрос почему нельзя использовать delete
// delete charodei.name;

// console.log(charodei);


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// const keys = [];
// const values = [];
// for (const key in apartment) {
    
//     if (key) {
//         keys.push(key);
//     }
    
//     values.push(apartment[key]);
         
// }
// console.log(keys);
// console.log(values);

// function countProps(object) {
//     let propCount = 0;
    
//     for (const key in object) {
//       if (object.hasOwnProperty(key)) {
//       propCount += 1;
//      }
//     }

    
   
//         // propCount += Object.keys(object).length;
//     console.log(propCount);
  
//   return propCount;
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
//     values.push(apartment[key]);
    
// }
// console.log(values);


// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys);
// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
// //   console.log(book[key]);
// }

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const keys = Object.keys(salaries);
//   // Change code below this line
//     for (const key of keys) {
//         totalSalary += salaries[key];
//     }
//     console.log(totalSalary);
//   // Change code above this line
//   return totalSalary;
// }

// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
    
//      hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//     let price = 0;
// //    switch (productName) {
// //        case "Radar":
// //            price = 1300;
// //            break;
// //         case "Scanner":
// //            price = 2700;
// //            break;
// //        case "Droid":
// //            price = 400;
// //            break;
// //        case "Grip":
// //            price = 1200;
// //            break;
// //        default:
// //            null
// //            break;
// //    }
    
//     for (const product of products) {
//         if (product.name === productName) {
//             price = product.price;
//             break;
//         }
//             price = null;
        
//     }
 
//     console.log(price);
//     return price;
//   // Change code above this line
// }
// getProductPrice("Radar");
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice("Engine");

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//     let propResult = [];
//     for (const product of products) {
//         if ("name" === propName) {
//             propResult.push(product.name);
//         }
//         if ("price" === propName) {
//             propResult.push(product.price);
//         }
//         if ("quantity" === propName) {
//             propResult.push(product.quantity);
//         }
//         ;
//     }
    
//     console.log(propResult);
//     return propResult;
    
//   // Change code above this line
// }

// getAllPropValues("name");
// getAllPropValues("price");
// getAllPropValues("quantity");
// getAllPropValues("category");

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//     let totalPrice = 0;
//     for (const product of products) {
//         if (product.name === productName) {
//             totalPrice = (product.price * product.quantity);
//         }
        
//     }
//     console.log(totalPrice);
//     return totalPrice;
//   // Пиши код выше этой строки
// }
// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner");

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2

// const temps = [14, -4, 25, 8, 11];

// // // В консоли будет массив
// // console.log(temps);
// // //  Так не сработает, потому что передаём целый массив
// // console.log(Math.max(temps)); // NaN

// // В консоли будет набор отдельных чисел
// console.log(...temps);
// //  Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings, };

// console.log(finalSettings);

// function makeTask(data) {

//     const { text,
//         category = "General",
//         priority = "Normal",
//         completed = false,
//     } = data;
//     let newData = {};
//     let newDataSecond = {};


//     if (text === undefined) {
//         return newData = { category, priority, completed };
//     }
     

//     return newData = { text, category, priority, completed};

// }
// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// // console.log(makeTask({ category: "Finance", text: "Take interest" }));

// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(firstNumber < arg)
//     total += arg;
//   }

//   return total;
  
// }

// console.log(addOverNum(50, 10, 15));
// console.log(addOverNum(5, 10, 15));
// console.log(addOverNum(9, 10, 15));

// function findMatches(firstArgs, ...secondArgs) {
//   const matches = []; // Don't change this line

//     for (const arg of secondArgs) {
//         if (firstArgs.includes(arg))
//             matches.push(arg);
//     }
    
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName){
//   	return `Deleting book ${bookName}`;
//   },
//     updateBook(oldName, newName) {
//   	return `Updating book  ${oldName} to ${newName}`
//   },
//   // Change code above this line
// };

// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));


// const bookShelf = {
//   books: ["Последнее королевство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//       const bookIndex = this.books.includes(bookName);
//       console.log(bookIndex);
//     this.books.splice(bookIndex, 1);
//   },
// };

// // console.log(bookShelf.getBooks()); // []
// // bookShelf.addBook("Мгла");
// // bookShelf.addBook("Страж снов");
// // console.log(bookShelf.getBooks()); // ["Последнее королевство", "Мгла", "Страж снов"]
// bookShelf.removeBook("Мгла");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Страж снов"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//     getPotions(potions) {
        
//         return this.potions;
//      },
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
// //     getPotions() {
// //         return this.potions;
// //   },
//     addPotion(newPotion) {
//         const { name, price,} = newPotion;
        
//         for (const potion of this.potions) {
//            if (name === potion.name) {
//                return `Error! Potion ${[name]} is already in your inventory!`;
//             }
//         }
         
//          this.potions.push(newPotion);
//         return this.potions;
            
    // },
//     removePotion(potionName) {
        
//         for (const potion of this.potions) {
//             if (potionName === potion.name) {
//                 const potionIndex = this.potions.indexOf(potion);
//                 this.potions.splice(potionIndex, 1);
//                 return this.potions;
//             }
//         }
        
   
//   },
//     updatePotionName(oldName, newName) {
      
//             for (const potion of this.potions) {
//                 if (oldName === potion.name) {
//                     potion.name = newName;

//                     // const potionIndex = this.potions.indexOf(potion);
//                     // this.potions.splice(potionIndex, 1, newName);
//                     return this.potions;
//                 };
                
//         };
    
//     // const potionIndex = this.potions.indexOf(oldName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${oldName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1, newName);
//   },
  // Change code above this line
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Speed potion", price: 460 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.removePotion("Stone skin"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));


// const numbers = [5, 10, 15, 20, 25];

// // // Объявление функции
// // numbers.forEach(function (number, index) {
// //   console.log(`Индекс ${index}, значение ${number}`);
// // });

// // Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// Императивный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers); // [4, 5]

// Декларативный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]

// const makePizza = () => ("Your pizza is being prepared, please wait.");
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;
// console.log(result);
// console.log(pointer);

// callback функции
// const deliverPizza = (pizzaName) => `Delivering ${pizzaName} pizza.`;

// const makePizza = (pizzaName) => `Pizza ${pizzaName} is being prepared, please wait...`;

// // Chande code below this line
// const makeMessage = (pizzaName, callback) => callback(pizzaName);

// console.log(makeMessage("Margaritta", deliverPizza));
// console.log(makeMessage("4 chesees", makePizza));

// инлайн функции в callback
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese",function eatPizza(pizzaName){
//    console.log(`Eatinging pizza ${pizzaName}.`);
//           });

// несколько callback
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//       for (const pizza of this.pizzas) {
//          if (pizzaName === pizza) {
//           return makePizza(pizzaName);
//             };
//         }
//         return onOrderError(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(pizzaName) {
//   return `"There is no pizza with a name ${pizzaName} in the assortment.`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));


// // forEach
// // Перебирающий forEach
// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line
//     orderedItems.forEach((item) => totalPrice += item);
//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //     totalPrice += orderedItems[i];
//     // }
//     return totalPrice;
// }

// console.log(calculateTotalPrice([164, 48, 291]));

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         };
//     });
    
// //   for (let i = 0; i < numbers.length; i += 1) {
// //     if (numbers[i] > value) {
// //       filteredNumbers.push(numbers[i]);
// //     }
// //   }

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach((array) => {
//       if (secondArray.includes(array)) {
//       commonElements.push(array);
//     }
//   });
    
  

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => totalPrice += item);
    
  

//   return totalPrice;
// }

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // console.log(allCourses);
// const uniqueCourses = allCourses.filter(
//   (course, index) => allCourses.indexOf(course) === index
// );
// console.log(uniqueCourses);

// const changeEven = (numbers, value) => {
//   let newChangeEven = [];
//   numbers.forEach((number) => {
//      (number % 2 === 0)
//     ?newChangeEven.push(number + value)
//     :newChangeEven.push(number );
  
//   });
  
//   return newChangeEven;
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);


// console.log(planetsLengths);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67
//   },
// ];
// // Change code below this line
// const titles = books.map(book => book.title);
// console.log(titles); 
{
  const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = books.flatMap(book => book.genres);
// console.log(genres);
}

{
  const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
  const getUserNames = users => {
    
    
    return users.map(user => user.name);
  };
// console.log(getUserNames(users));
}

{const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(number => number % 2 ===0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);
}
{
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap(book => book.genres);
  const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);
  // console.log(allGenres);
  // console.log(uniqueGenres);
}

{
//   const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']
}

// {
//  const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort((firstStudent, secondStudent) => firstStudent.name - secondStudent.name
  
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.name - firstStudent.name
// );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   secondStudent.score.localeCompare(firstStudent.score)
//   );
  
//   // console.log(inAscendingScoreOrder);
//   // console.log(inDescendingScoreOrder);
//   // console.log(inAlphabeticalOrder);
// }

// {
//   const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood",
//    author: "Tanith Lee",
//    rating: 7.94
//   },
//   { title: "Enemy of God",
//    author: "Bernard Cornwell",
//    rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating > MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// //   console.log(topRatedBooks);
// //   console.log(booksByAuthor);
// // }

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getUsersWithEyeColor = (users, color) => {
  
//   const colorForObj = users.filter(user => user.eyeColor === color);

//   // .map(user => user.name)
//   return colorForObj;
 
  
// };

// console.log(getUsersWithEyeColor(users, "brown"));
// console.log(getUsersWithEyeColor(users, "green"));
// console.log(getUsersWithEyeColor(users, "orange"));

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// const getUsersWithAge = (users, minAge, maxAge) => {
//   const returnMidelleAge = users.filter(
//     ({age}) => age >= minAge && age <=  maxAge
//   );
//   return returnMidelleAge;
// };

// console.log(getUsersWithAge(users, 30, 40));

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// const getUsersWithFriend = (users, friendName) => {
//   const friendsOfName = users.filter(
//     user => user.friends.includes(friendName));
  
//   return friendsOfName;
// };
// // console.log(getUsersWithFriend(users, "Sheree Anthony"));
// console.log(getUsersWithFriend(users, "Goldie Gentry"));


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// const getFriends = (users) => {
//   const allMasive = users.flatMap(user => user.friends);
  
//   const masivFriends = allMasive.filter(
//     (user, index, array) => array.indexOf(user) === index
//   );
//   return masivFriends;
// };
// console.log(getFriends(users));



// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// const getActiveUsers = (users) => {
//   const isActive = users.filter(
//     user => !user.isActive
//   );
//   return isActive;
// };
// console.log(getActiveUsers(users));

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// const getUserWithEmail = (users, email) => {
//   const findUserOnEmail = users.find(user => user.email === email);
//   return findUserOnEmail;
// };
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);



// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// const isEveryUserActive = (users) => {
//   const isActiveUsers = users.every(user => user.isActive);
//   return isActiveUsers;
// };
// console.log(isEveryUserActive(users));


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(array => array % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(array => array % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(array => array % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(array => array % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(array => array % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(array => array % 2 !== 0);

// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);
// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);
// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);



// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const isAnyUserActive = users => {
//   const isActive = users.some(user => user.isActive);
//   return isActive;
// };

// console.log(isAnyUserActive(users));



// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, playtime) => {return playtime + acc}, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(playtimes);
// console.log(totalPlayTime);
// console.log(averagePlayTime);

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
  
//   return total + (player.playtime/player.gamesPlayed);
  
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// const total = players.reduce((previousValue, number) => {
//   return previousValue + number.playtime;
// }, 0);

// console.log(total);



// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// const calculateTotalBalance = users => {
//   const allBalance = users.reduce((total, user) => {
//     return total + user.balance;
//   }, 0);
//   return allBalance;
// };

// console.log(calculateTotalBalance(users));

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getTotalFriendCount = users => {
  
//   // const masivFriends = users.flatMap(user => user.friends);
//   // console.log(masivFriends);
//   const totalMasivFriends = users.reduce((total, user) => {
//     return total + user.friends.length;
//   }, 0);
//   return totalMasivFriends;
// };
// console.log(getTotalFriendCount(users));

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];


// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);


// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((firstNumber, secondNumber) => firstNumber - secondNumber);

// const descendingReleaseDates = [...releaseDates].sort((firstNumber, secondNumber) => secondNumber - firstNumber);


// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);


// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((firstAuthor, secondAuthor) => (firstAuthor).localeCompare(secondAuthor));

// const authorsInReversedOrder = [...authors].sort((firstAuthor, secondAuthor) => (secondAuthor).localeCompare(firstAuthor));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];


// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor)=> (firstAuthor.author).localeCompare(secondAuthor.author));

// const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor)=> (secondAuthor.author).localeCompare(firstAuthor.author));

// const sortedByAscendingRating = [...books].sort((firstRating, secondRating) => firstRating.rating - secondRating.rating);

// const sortedByDescentingRating = [...books].sort((firstRating, secondRating) => secondRating.rating - firstRating.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// const sortByAscendingBalance = users => {
//   const sortWithHelpBalance = users.sort((firstBalance, secondBalance) =>
//     firstBalance.balance - secondBalance.balance);
//   return sortWithHelpBalance;
// };
// console.log(sortByAscendingBalance(users));


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// const sortByDescendingFriendCount = users => {
  
//   const sortFriends = [...users].sort((firstFriends, secondFriends) => secondFriends.friends.length - firstFriends.friends.length);
  
//   return sortFriends;
// };

// console.log(sortByDescendingFriendCount(users));



// const sortByName = users => {
//   const sortForName = [...users].sort((firstName, secondName) => firstName.name.localeCompare(secondName.name));
//   return sortForName;
// };
// console.log(sortByName(users));


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood",
//    author: "Tanith Lee",
//    rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort();
// console.log(names);


// const getNamesSortedByFriendCount = users => {
//   const names = [...users].sort((firstPlaceFriends, secondPlaceFriends) => firstPlaceFriends.friends.length - secondPlaceFriends.friends.length).map(user => user.name);
  
//   return names;
// };

// console.log(getNamesSortedByFriendCount(users));

// const getSortedFriends = users => {
//   const sortUniqFriends = users.flatMap(user => user.friends).filter((user, index, array) => array.indexOf(user) === index).sort();
//   return sortUniqFriends;
// };

// console.log(getSortedFriends(users));


// const getTotalBalanceByGender = (users, gender) => {
//   const totalBalance = users.filter(user => user.gender === gender).sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)).reduce((total, user) => {return total +  user.balance}, 0);
  
  
  
//   return totalBalance;
// };

// console.log(getTotalBalanceByGender(users, "female"));

// const friends = [
//     { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//     { name: "Alice", books: ["War and peace", "Romeo and Juliet"]},
//     { name: "Oleksii", books: ["Bible","War and peace","Harry Potter",  "Romeo and Juliet"], age: 26},
// ]
// Task-1: Порахувати вік всіх юзерів у яких є ключ age.

// const totalAge = friends.reduce((total, friend) => {
//   // return total + (friend.hasOwnProperty("age")
//   //   ? friend.age
//   // : 0);
//   // console.log(!!friend.age);


//   // if (!!friend.age) {
//   //   return total + friend.age;
//   // }
//   // return total;
  
  
// }, 0);

// const totalAge = friends.reduce((total, { age = 0 }) => total + age, 0);

// console.log(totalAge);

// const cars = [
//   { brand: "Audi", cost: 11000 },
//   { brand: "BMW", cost: 9000 },
//   { brand: "Honda", cost: 8000 },
//   { brand: "Tesla", cost: 40000 },
//   { brand: "VW", cost: 7000 },
// ];

// const minValue = Number(prompt("From"));
// let maxValue = Number(prompt("To"));
// console.log(minValue);

// if (maxValue === 0) {
//     maxValue = Infinity;
// }
// console.log(maxValue);
// const filterCars = cars.filter(car => {
//     if (car.cost >= minValue && car.cost <= maxValue) {
//         return car;
//     }

// })
// console.log(filterCars);


// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
 
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
  
// };

// console.log(pizzaPalace.checkPizza("Four meats"));
// console.log(pizzaPalace.order("margaritta"));


// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail());


// Прототипы объекта для другого объекта
// Объекты можно организовать в цепочки так, чтобы свойство не найденное в одном объекте, автоматически искалось бы в другом. Связующим звеном выступает специальное скрытое свойство [[Prototype]], которое в консоли браузера отображается как __proto__.
// Метод isPrototypeOf() проверяет является ли объект animal прототипом для dog и возвращает true или false.
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// console.log(child);

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;
// console.log(parent);


// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(child);


// class Car {

//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price
//   }
// }

// const car = new Car (toyota, tundra, 30000);
// console.log(car);

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
// 	getPrice(){
//     return this.price;
//     }
  
//   	changePrice(newPrice){
//     return this.price = newPrice;
//     }


//   // Change code above this line
// }


// class Storage {

//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//    return this.items.push(newItem);
//   }

//   removeItem(removeItem) {
//    return this.items.splice((this.items.includes(removeItem)), 1);
//   }

// }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger", "Nanitoids", "Antigravitator");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder {

//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   padStart(newStartValue) {
    
//      this.value = newStartValue + this.value;
//   }
  
//   padEnd(newEndValue) {
//      this.value = this.value + newEndValue;
//   }

//   padBoth(newStartEndValue) {
//     this.value = newStartEndValue + this.value + newStartEndValue;
//   }

// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="




// class Car {
  
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
   
//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
  
// }


// class Storage {
//   // Change code below this line
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// class StringBuilder {
//   // Change code below this line
//   #value
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// class Car {
//   // Change code below this line
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.model;
//   }

//   set model(newModel) {
//     this.model = newModel;
//   }

//   get price() {
//     return this.price;
//   }

//   set price(newPrice) {
//     this.price = newPrice;
//   }
//   // Change code above this line
// }



// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice < Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//     else {return this.#price; }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     if (price > this.#MAX_PRICE) {
//      return `Error! Price exceeds the maximum`;
//     }
//     else {
//       return `Success! Price is within acceptable limits`;
//     }
    
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser"
//   }
// }


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//    }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//   blacklistedEmails = [];

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     for (const item of this.blacklistedEmails) {
//       if (item === email) {
//         return true;
//       }
//       return false;
//     };
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true



/*---------------------------DOM--------------------------------*/

/*----------------------МЕТОД ПОИСКА БЛОКОВ - querySelector*/
// const text = document.querySelector("#paragraph");

/*-------------------------РАБОТА С КЛАСАМИ ТЕГА  classList-----------*/
// const text = document.querySelector("#paragraph");

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]

// // console.log(text.classList.contains("red")); // true

// // text.classList.remove("big");
// // console.log(text.classList); // ["text", "red", value: "text red"]

// // text.classList.add("new-class");
// // console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// // Can add multiple classes
// text.classList.add("a", "b", "c");
// console.log(text.classList);

// // text.classList.toggle("big"); // will add is-hidden class
// // text.classList.toggle("is-hidden"); // will remove is-hidden class

// // classList has a forEach method
// text.classList.forEach(cls => {
//   console.log(cls); // text, red, new-class
// });


/*---------------------------МЕТОД STYLE(Стлизация) ---------------------------*/
// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.log(button.style); // inline styles object


/**-----------------------------------РАБОТА С АТРИБУТАМИ ТЕГА ----*/
// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Lake and clouds"

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature

/**--------------------- DATA-АТРИБУТЫ -------------------*/
// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"


/**----------------РАБОТА С ЭЛЕМЕНТАМИ ДОКУМЕНТА (ТЭГАМИ) ----------*/

/**----------------------СОЗДАНИЕ------------------------------------*/
// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

/**----------------ДОБАВЛЕНИЕ ---------------------- */

// const list = document.querySelector(".usernames");

// // Adds an item to the end of the list
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);

// // Adds a title before the list
// const title = document.createElement("h2");
// title.textContent = "USERNAMES";
// list.before(title);

// // Adds a paragraph after the list
// const text = document.createElement("p");
// text.textContent =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
// list.after(text);

/**------------------------УДАЛЕНИЕ ------------------------------- */
// используется на свмом элементе который надо удалить
// const text = document.querySelector('.text');
// text.remove();



/*--------------------innerHTML--------------------------------------*/


// ---------------------------ИЗМИНЕНИЕ------------------------------
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;
// Используется только если элемент пустой или при полной замене содержимого

// -------------------------ДОБАВЛЕНИЕ---------------------------------

// const article = document.querySelector(".article");
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;

// // Replace += with = operator. See the difference?
// // Article title is lost because we overwrite element content.
// article.innerHTML += htmlString;


/*----------------------------------Метод insertAdjacentHTML()-------------------------------*/

// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
// // "beforebegin" и "afterend" работают только в том случае, если elem уже находится в DOM-дереве.


// function isIsogram(str){
  
//   let isogramma = str.split('').filter((st, index, array) =>
//     array.indexOf(st) === index);
  

//   // for (let i = 0; i < str.length; i += 1) {
//   //   if
    
//   // }
//   return isogramma;
// }

// console.log(isIsogram("JavaScript"));
// console.log(isIsogram("avacodecssss"));

// function getCount(str) {
//   let vowelsCount = [];
//   const vowelsAll = "aeiou".split("");
//   const strMassiv = str.split("");
//   for (let i = 0; i < strMassiv.length; i+=1) {
//     for (let j = 0; j < vowelsAll.length; j+=1) {
//       if (str[i] === vowelsAll[j]) (
//         vowelsCount.push(str[i])
//       );
      
//     }
    
//   }
//   return vowelsCount.length;
  
// }

// console.log(getCount("Javascript"));
// console.log(getCount("shjfsfyagfysafdfibflsabfznasfbzdfgfjk"));
// console.log(getCount("aghsabqoaaaii"));

// function removeSmallest(numbers) {
  
//   numbers.filter((it) => it !== Math.min.apply(null, numbers));
//   return throw "TODO: removeSmallest";
  
// }

// console.log(removeSmallest([1, 2, 4, 1, 10, 3]));
// console.log(removeSmallest([1, 2, 2, 1, 13, 3]));

// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// // ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);

// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector("#btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });

// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);

const inputText = document.querySelector('#name-input');
const spanRewriteText = document.querySelector('#name-output');


inputText.addEventListener('input', addNewInput);

function addNewInput(event) { 
  console.log('event :',event);
};