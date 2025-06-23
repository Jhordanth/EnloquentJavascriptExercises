// Mi solución al ejercicio de crear un triángulo con #.

let triangle = "";
for(let tamagnio = 1; tamagnio <= 7; tamagnio++) {
    triangle += "\n";
    for(let largo = 1 ; largo <= tamagnio; largo++) {
        triangle += "#";
    }
}
console.log(triangle);


// La solucion dada por el libro
triangle = "#";
for(let tamagnio = 1; tamagnio <= 7; tamagnio++) {
    console.log(triangle);
    triangle += "#";
}

// Mi conclusión es que no pude concebir imprimir el triangulo sin crearlo y guardarlo antes, 
// pero el libro me mostró que se puede imprimir directamente por partes en cada iteración del bucle,
// esto por que en ningún momento necesitaría mantener el triangulo completo guardado.