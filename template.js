function calcularDiferenciaFechas(fechaObjetivo) {
  // Convertir la fecha objetivo a un objeto Date
  const fechaObjetivoObj = new Date(fechaObjetivo);

  // Obtener la fecha y hora actual
  const fechaActual = new Date('2024-09-25 00:00:00.0000000');

  // Calcular la diferencia en milisegundos
  const diferenciaMilisegundos = fechaObjetivoObj - fechaActual;

  // Convertir la diferencia a días, horas, minutos y segundos
  const dias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenciaMilisegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenciaMilisegundos % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenciaMilisegundos % (1000 * 60)) / 1000);

  // Mostrar el resultado
  console.log(`Restan ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos.`);
}

// Ejemplo de uso:
const fechaFutura = '2024-09-26 20:00:00.0000000';
calcularDiferenciaFechas(fechaFutura);