let wpisanaKwota = 50;
let kursWaluty = 3.4453;

const calc = (yourMoney, currencyCourse) => {

let division = yourMoney/currencyCourse;
let endOf = division%1;
let wholeMoney = division - endOf;
let keepTheChange = Math.round(endOf * 100)/100;
let resultArr = [wholeMoney, keepTheChange];
return resultArr;

}

console.log(calc(wpisanaKwota, kursWaluty));