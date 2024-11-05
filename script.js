let numero
do { numero = parseInt(prompt("Por favor, ingrese un número entre 1 y 10:"));
    
    if (numero >= 1 && numero <= 10) { 
        document.write("¡Gracias!");

   } else { 
        document.write("Número no valido.");

    } } while (numero < 1 && numero > 10); 