const express = require('express');
const app = express();
const port = 3001;

function generatePassword() {
    let length = 12;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}

app.get('/', (req, res) => {
    res.send(`
        <html>
        <body style="text-align: center; font-family: sans-serif; padding-top: 50px;">
            <h1>Ваш новий пароль:</h1>
            <h2 style="color: blue; background: #f0f0f0; display: inline-block; padding: 10px;">${generatePassword()}</h2>
            <br><br>
            <form action="/">
                <button type="submit" style="padding: 10px 20px; cursor: pointer;">Згенерувати новий</button>
            </form>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Генератор паролів запущено на http://localhost:${port}`);
});