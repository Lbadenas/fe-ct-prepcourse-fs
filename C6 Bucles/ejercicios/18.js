function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  if (a > b) {
    return 0; // Si 'a' es mayor que 'b', no hay números entre ellos para multiplicar
  }

  let producto = 1; // Inicializamos una variable para almacenar el producto
  for (let i = a; i <= b; i++) {
    // Utilizamos un bucle for para iterar desde 'a' hasta 'b'
    producto *= i; // Multiplicamos cada número por el producto acumulado
  }
  return producto; // Retornamos el resultado final
}
module.exports = productoEntreNúmeros;
