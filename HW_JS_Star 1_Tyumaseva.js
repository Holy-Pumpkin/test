/* HW_1* 
1*:
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Вывести в консоль результат работы функции с возрастами 17, 18, 61 */

const checkAge = function(age) {
    if (age < 18) {
        console.log("You don’t have access cause your age is " + age + ". It’s less then 18.")
    } else if (age >=  18 && age <  60) {
        console.log("Welcome!")
    } else if (age  >= 60) {
        console.log("Keep calm and look Culture channel.")
    } else {
        console.log("Technical work.")
    }
}
checkAge(17)
checkAge(18)
checkAge(61)


/* 2*:
Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка. */

const checkAge = function(age) {
    if (typeof age == 'number') {
    if (age < 18) {
        console.log("You don’t have access cause your age is " + age + ". It’s less then 18.")
    } else if (age >=  18 && age <  60) {
        console.log("Welcome!")
    } else if (age  >= 60) {
        console.log("Keep calm and look Culture channel.")
    } else {
        console.log("Technical work.")
    }
} else {
    console.log("Age must be a number.")
}
}
checkAge(25)
checkAge('dfs')
checkAge('88')

/* 3**:
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number */

const checkAge = function(age) {
    if (Number(age)) {
    if (age < 18) {
        console.log("You don’t have access cause your age is " + age + ". It’s less then 18.")
    } else if (age >=  18 && age <  60) {
        console.log("Welcome!")
    } else if (age  >= 60) {
        console.log("Keep calm and look Culture channel.")
    } else {
        console.log("Technical work.")
    }
} else {
    console.log("Age must be a number.")
}
}
checkAge(25)
checkAge('dfs')
checkAge('88')
checkAge('35ss')

/* 4***:
Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке */

const checkAge = function(age) {
    age = Number(age)
    if (!isNaN(age)) {
    if (age < 18) {
        console.log("You don’t have access cause your age is " + age + ". It’s less then 18.")
    } else if (age >=  18 && age <  60) {
        console.log("Welcome!")
    } else if (age  >= 60) {
        console.log("Keep calm and look Culture channel.")
    } else {
        console.log("Technical work.")
    }
} else {
    console.log("Age must be a number.")
}
}
checkAge(25)
checkAge('dfs')
checkAge('88')
checkAge('35ss')

let age_1 = prompt("Enter your age")
checkAge(age_1)
