let dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;

var os = require("os");

function printInformation(){
    // Задание 1
    console.log(`Платформа: ${os.platform()}`)
    console.log(`Свободная память: ${os.freemem()}`);
    console.log(`Главная директория: ${os.homedir()}`);
    console.log(`Имя: ${os.hostname()}`);
    console.log(`Интерфейс сети: ${os.networkInterfaces()}`);
}

function isFreeMemoryMoreThan4(){
    // Задание 2
    return os.freemem() > 4 * 1_073_741_824 ? 'Память больше 4 Гб' : 'Память меньше 4 Гб';
}

function isAdmin(){
    // Задание 3
    const MODE = process.env.MODE || "USER";
    return MODE === "ADMIN";
}

function isUser(){
    // Задание 3
    const MODE = process.env.MODE || "USER";
    return MODE === "USER";
}

printInformation();
console.log(isFreeMemoryMoreThan4());
console.log(isAdmin());
console.log(isUser());