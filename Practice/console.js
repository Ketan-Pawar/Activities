// console.log("%cHello Ketan", "color: blue;")


// console.log("%cHello %cKetan", "color: blue;", "font-size: xx-large")

// console.log("%cHello Ketan%c", "color: blue;", "font-size: xx-large")

// console.log("Hello %cKetan", "color: blue;", "font-size: xx-large")

// console.log("Hello %cKetan%c", "color: blue;", "font-size: xx-large")

// console.log("Hello%c %cKetan", "color: blue;", "font-size: xx-large")

// console.info()


// console.table(['Ketan', 'Pawar'])

// console.table({foo: 'bar', bar: 'baz'});

// var personArr = [
// {
//  "personId": 123,
//  "name": "Jhon",
//  "city": "Melbourne",
//  "phoneNo": "1234567890"
// },
// {
//  "personId": 124,
//  "name": "Amelia",
//  "city": "Sydney",
//  "phoneNo": "1234567890"
// },
// {
//  "personId": 125,
//  "name": "Emily",
//  "city": "Perth",
//  "phoneNo": "1234567890"
// },
// {
//  "personId": 126,
//  "name": "Abraham",
//  "city": "Perth",
//  "phoneNo": "1234567890"
// }
// ];
// console.table(personArr, ['name', 'personId']);

// var o1 = 1, o2 = '2', o3 = "";
// console.count(o1);
// console.count(o2);
// console.count(o3);
// console.count(1);
// console.count('2');
// console.count('');


// console.count(undefined);
// console.count(document.Batman);
// var obj;
// console.count(obj);
// console.count(Number(undefined));
// console.count(NaN);
// console.count(NaN+3);
// console.count(1/0);
// console.count(String(1/0));
// console.count(window);
// console.count(document);
// console.count(console);
// console.count(console.__proto__);
// console.count(console.constructor.prototype);
// console.count(console.__proto__.constructor.prototype);
// console.count(Object.getPrototypeOf(console));
// console.count(null);

// console.assert('one' === 1); 

// primitive values are not considered instances of any class
// console.log(2 instanceof Number)
// console.log('abc' instanceof String)
// console.log(true instanceof Boolean)
// console.log(Symbol() instanceof Symbol)

// console.log([] instanceof Object, [] instanceof Array) //true true
// console.log([].constructor === Object, [].constructor === Array)

// function isNumber(value){
//     if (value === null | value === undefined) return false
//     return value.constructor === Number
// }
// console.log(isNumber(null), isNumber(undefined));
// console.log(isNumber('abc'), isNumber([]), isNumber(() => 1))
// console.log(isNumber(0), isNumber(Number('10.1')), isNumber(NaN))

