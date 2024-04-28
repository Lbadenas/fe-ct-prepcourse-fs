function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:  let suma = 0; // Inicializamos una variable para almacenar la suma
  let suma = 0; // Inicializamos una variable para almacenar la suma
  for (let i = 1; i <= n; i++) {
    // Utilizamos un bucle for para iterar desde 1 hasta n
    suma += i; // Sumamos cada número a la suma total
    if (suma > 100) {
      // Verificamos si la suma supera 100
      break; // Detenemos el bucle si la suma supera 100
    }
  }
  return suma; // Retornamos el resultado final
}

module.exports = sumarHastaNConBreak;
