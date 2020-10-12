/**
 * Задача 1.
 *
 * Дан базовый класс робота-уборщика.
 *
 * Добавьте роботу функционал употребления энергии:
 * - при начале уборки уровень энергии должен уменьшиться;
 * - в расчёте использовать внутренний коэффициент ENERGY_CONSUMPTION.
 *
 * Затем добавьте роботу публичный метод stop() для остановки процесса уборки.
 * В если уборка остановлена раньше времени завершения,
 * onReady сработать не должен, а также нужно вывести другое сообщение.
 *
 * Условия:
 * - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять;
 * - использовать функцию clearTimeout;
 * - идентификатор таймера нужно хранить в приватной переменной конструктора.
 */
function CleanerRobot(initialEnergy = 0, cleaningSquare) {
  let energy = initialEnergy;
  let timerId = 0;
  const ENERGY_CONSUMPTION = 1; /* Расход энергии: 1% батареи на 1 час работы. */
  const CLEANING_SPEED = 10; /* Скорость уборки: 10 квадратных метров в час. */
  const getCleaningTime = () => cleaningSquare / CLEANING_SPEED;
  let timer = null;

  const onReady = () => {
    console.log(`Уборка завершена. Осталось заряда батареи: ${energy}.`);
  };

  this.clean = () => {
    const cleaningTime = getCleaningTime();
    console.log(`Начинаю процесс уборки. Время уборки: ${cleaningTime} часов.`);
    energy = energy - ENERGY_CONSUMPTION * cleaningTime;
    timerId = setTimeout(onReady, cleaningTime * 1000); //4.5 секунды
    timer = Date.now();
  };

  this.stop = () => {
    clearTimeout(timerId);
    let restTime = Math.trunc((Date.now() - timer) / 1000);

    console.log(`
      Спустя ${restTime} секунду: Уборка завершена досрочно. Осталось заряда батареи: ${energy}.`
  );
  };
}

const cleanerRobot = new CleanerRobot(50, 45);
cleanerRobot.clean(); /* Начинаю процесс уборки. Время уборки: 4.5 часов. */

/* Спустя 4.5 секунды: Уборка завершена. Осталось заряда батареи: 45.5. */

setTimeout(() => {
  cleanerRobot.stop(); /* Спустя 1 секунду: Уборка завершена досрочно. Осталось заряда батареи: 45.5. */
}, 1000);


exports.CleanerRobot = CleanerRobot;
