for(let numero = 1; numero <= 100; numero++) {
    let resultado = "";
    if(numero % 3 === 0) {
        resultado += "Fizz";
    }
    if(numero % 5 === 0) {
        resultado += "Buzz";
    }
    if(resultado === "") {
        resultado = numero;
    }
    console.log(resultado);
}