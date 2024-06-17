// Написать функцию, которая принимает на входе любое число (но не больше 1 000),
// определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000,
// то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

const isPrime = (number) => {

    let flag = true;

    if (number <= 1 || number > 1000) {
        console.log('Данные неверны');
        return;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            flag = false;
            break;

        }
    }

    if (flag) {
        console.log(`Число ${number} -  простое`);
    } else {
        console.log(`Число ${number} - составное`);
    }
};


isPrime(560);
isPrime(13);
isPrime(0);


console.log('-----------------------------------')