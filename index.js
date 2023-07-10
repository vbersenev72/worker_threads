const { Worker, BroadcastChannel } = require('node:worker_threads');


console.log("I'm index!");


const workerOne = new Worker('./workers/workerOne.js', {
    workerData: 1
}) // Передаем данные воркеру, теперь воркер может получить эти значения и использовать

workerOne.postMessage("Hello worker 1!") // Отправляем сообщение воркеру
workerOne.on("message", (msg) => {
    console.log(msg);
}) // Ждем ответное сообщение от воркера и выводим в консоль




