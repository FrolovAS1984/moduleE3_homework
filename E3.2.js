// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент,
// то он учитывается и выводится отдельно.
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.


function countNumber(arr) {
    let oddCount = 0;
    let evenCount = 0;
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] ===0) {
                zeroCount++;
            } else if (arr[i] % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }

        }

    }
    console.log(`Четных в массиве: ${evenCount}`);
    console.log(`Нечетных в массиве: ${oddCount}`);
    console.log(`Нулей в массиве: ${zeroCount}`);
    console.log('-----------------------------------')

}

countNumber([2,5,7,0,9,1,3,4,6,8,10, null,'1'])