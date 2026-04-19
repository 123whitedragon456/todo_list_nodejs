const fs = require('fs');
const args = process.argv.slice(2);

const command = args[0];
const task = args[1];

if (command === 'add') {
    fs.appendFileSync('tasks.txt', task + '\n');
    console.log(`Завдання "${task}" додано!`);
} else if (command === 'list') {
    if (fs.existsSync('tasks.txt')) {
        const tasks = fs.readFileSync('tasks.txt', 'utf8');
        console.log('Ваші завдання:');
        console.log(tasks);
    } else {
        console.log('Список порожній.');
    }
} else {
    console.log('Використовуйте: node todo_cli.js add "завдання" або list');
}