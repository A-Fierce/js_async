rl = require('readline').createInterface(process.stdin, process.stdout)

var attempt = 1

function guessNumberAssync (quest) {
    return new Promise((resolve, reject) => {
        rl.question (quest, (data) => {
            resolve (data)
        })
    })
}

async function input() {
    const hiddenNumber = 222
    while (true) {
        const data = await guessNumberAssync(`Введите число (попытка №) ${attempt}  `)
        if (data === 'q') {
            console.log('До свидания!')
            rl.close()
            break
        }
        if (isNaN(data)) {
            console.log(data, '- это не число!')
        } else if (+data === hiddenNumber) {
            console.log(`Вы угадали! Количество попыток - ${attempt} `)
            rl.close()
            return
        } else if (+data > hiddenNumber) {
            console.log('Меньше!')
            attempt += 1
        } else if (+data < hiddenNumber) {
            console.log('Больше!')
            attempt += 1
        }
        
    }
}

input()