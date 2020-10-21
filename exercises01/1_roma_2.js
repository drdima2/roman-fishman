/**
 * Задача 1.
 *
 * Создайте функцию createNumberGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет генерировать и возвращать случайное число от 1 до 100 (включительно).
 *
 * Условия:
 * - Числа не должны повторяться;
 * - Задачу нужно решить с помощью замыкания.
 *
 * Генерировать ошибку если:
 * - Функция была вызвана, когда доступные для выведения числа закончились.
 *
 * Подсказка: в замыкании можно хранить массив с числами, которые уже были созданы функцией.
 */

// Решение
function createNumberGenerator() {
  const usedNumbers = [];
  
  return function newNumber() {
    if (usedNumbers.length === 100) {
      throw new Error("There are no more numbers available.");
    }

    const newRandomNumber = Math.floor(Math.random() * 100 + 1); // Math.ceil(Math.random() * 100)
    const isExist = usedNumbers.includes(newRandomNumber);
    if (isExist === newNumber) {
    } else {
    }
    usedNumbers.push(newRandomNumber);

    return newRandomNumber;
  };
}

const TOTAL_ITERATIONS = 105;
let invocations = 0;
const generateNumber = createNumberGenerator();

try {
  for (invocations; invocations < TOTAL_ITERATIONS; invocations++) {
    console.log(`Iteration: ${invocations}. Number: ${generateNumber()}`);
  }
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
  console.log(`Function generated an error on ${invocations} invocation.`);
}


// Когда все числа выведутся:
// Error: There are no more numbers available.
// Function generated an error on 100 invocation.

exports.createNumberGenerator = createNumberGenerator;
