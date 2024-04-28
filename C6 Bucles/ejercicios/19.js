function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let suma = 0; // Inicializamos una variable para almacenar la suma
  for (let i = 1; i <= n; i++) {
    // Utilizamos un bucle for para iterar desde 1 hasta n
    suma += i; // Sumamos cada número a la suma total
  }
  return suma; // Retornamos el resultado final
}

module.exports = sumarHastaN;
