const { workerData, parentPort, BroadcastChannel } = require('worker_threads')


const bc = new BroadcastChannel('worker 1') // Подключаем воркер к каналу, по которому мы можем транслировать данные
bc.postMessage("Worker 1 is ready!")

console.log("I'm Worker", workerData); // workerData - это данные которые мы передаем из основного потока
parentPort.on('message', (msg) => {
    console.log("Message from parent to workerOne: ", msg);
}) // Ждем сообщение от основного потока


setTimeout(() => {
    parentPort.postMessage("Hello parent from worker 1!")
}, 2000) // Кидаем сообщение из воркера в основной поток спустя 2 секунды
