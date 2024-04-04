function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  // Tu código:
  const NombreCompleto = nombre + " " + apellido;
  return NombreCompleto;
}

module.exports = combinarNombres;
