function getPasswordChecker(password) {
    return function(passwordCheck) {
        if (password === passwordCheck) {
            return console.log(true)
        } else {
            return console.log(false)
        }
    }
}

const mainPassword = getPasswordChecker("1q2w3e4r")

mainPassword(48446515)
mainPassword("1q2w3e4r") 