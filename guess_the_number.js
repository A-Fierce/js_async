rl = require('readline').createInterface(process.stdin, process.stdout)

var attempt = 1

function guessNumber () {
    const hiddenNumber = 222
    
    rl.question(`Введите число (попытка №) ${attempt}  `, (cmd) => {
        if (cmd == 'q') {
            console.log('До свидания!')
            rl.close()
            return
        }
        if (isNaN(cmd)) {
            console.log(cmd, '- это не число!')
        } else if (+cmd === hiddenNumber) {
            console.log(`Вы угадали! Количество попыток - ${attempt} `)
            rl.close()
            return
        } else if (+cmd > hiddenNumber) {
            console.log('Меньше!')
            attempt += 1
        } else if (+cmd < hiddenNumber) {
            console.log('Больше!')
            attempt += 1
        }
        guessNumber()
    })
}

guessNumber()