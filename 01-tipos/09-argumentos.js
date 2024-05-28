function suma(a, b) {
    console.log(arguments);
    return a+b;
}

let resultao = suma(5, 6, 1, 2, 3);
console.log(resultao);
console.log(typeof suma);
