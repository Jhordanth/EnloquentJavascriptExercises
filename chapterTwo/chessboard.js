 let altoy = 8;
 let anchox = 8;
 let tamagnio = altoy * (anchox+1)+1;
 tablero = "";
 for(let posicion = 0; posicion < tamagnio; posicion ++){
     if(posicion != 0 && (posicion + 1) % (anchox+1) == 0 ){
     	tablero += "\n";
     } else if(posicion != 0 &&
               (tablero[posicion-1] == " "  ||
                (tablero[posicion-1] == "\n" &&
                 tablero[posicion-2] == "#"))) {
     	    tablero += "#"
         } else {
     	        tablero += " "
             }
 }
 console.log(tablero);

// Decidí intentar solucionar el ejercicio sin usar un bucle anidado, ya que anteriormente me decanté por esa opción en el ejercicio del triángulo y 
// el libro me mostró que no era necesario.
// Sin embargo, llegué a una solución que no funciona del todo para los casos en que el tablero es de tamaño impar, ya que la estructura del tablero cambia.

// Ahora haré la solución del bucle anidado, que curiosamente esta vez si es la que se muestra en el libro, sin mencionar que normalmente es la que mas me 
// habría parecido viable desde un inicio.

tamagnio = 10;

tablero = "";
for(let y = 0; y < tamagnio; y++) {
     for(let x = 0; x < tamagnio; x++) {
         if((x + y) % 2 == 0) {
             tablero += "#";
         } else {
             tablero += " ";
         }
     }
     tablero += "\n";
 }

 console.log(tablero);

// // ahora probaré una tercera solución, usando un solo bucle pero con lo que aprendí de la solución del libro.

let dimension = 10;
tablero = "";
let y = 0;

for(let posicion = 0; posicion < dimension * dimension; posicion ++){
    
    x = posicion % dimension;

    tablero += (x + y) % 2 === 0 ? "#" : " ";

    if(x === dimension - 1) {
        tablero += "\n";
        y ++;   
    } 
    
}
console.log(tablero);
