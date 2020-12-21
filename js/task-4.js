// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
// Функция считает общую сумму запрплаты работников и возращает ее. 
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
const countTotalSalary = function(employees) {
  let total = 0;
  const values = Object.values(employees);

  for (const value of values) {
    total += value;
  }
  return total;
  // for (const key in employees) {
  //   total += employees[key];}   то же самое 
return total;
};
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400