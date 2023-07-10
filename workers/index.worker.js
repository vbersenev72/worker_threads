const { Worker, BroadcastChannel, isMainThread, workerData } = require('node:worker_threads');

const bc = new BroadcastChannel('worker 1') // Создание экземпляра BroadcastChannel с индексом worker 2
if (isMainThread) { // Если мы находимся в главном потоке, то создаем все воркеры
    console.log("I'm index!")

    const workerOne = new Worker('./workers/workerOne.js', {
        workerData: 1
    }) // Передаем данные воркеру, теперь воркер может получить эти значения и использовать

    workerOne.postMessage("Hello worker 1!") // Отправляем сообщение воркеру

    workerOne.on("message", (msg) => {
        console.log(msg);
    }) // Ждем ответное сообщение от воркера и выводим в консоль



    bc.onmessage = (msg) => {
        console.log("I'm parent", msg.data);
    }

} else {
    console.log("I'm Worker");
    bc.postMessage("Worker 1 is ready")
}


