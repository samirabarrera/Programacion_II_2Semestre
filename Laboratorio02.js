/* Sigue los pasos y resuelve
 * Escribe dos funciones, Image y getImage, que devolverán un nuevo objeto 
 * de imagen basado en tres argumentos dados: title, artist, y date.

La función Image es el constructor y getImage la fábrica. 
Utilizando la matriz images de datos de la tarea anterior, 
crea una nueva matriz, images1, utilizando el Imageconstructor 
(no copias los objetos, solo crea unos nuevos en función de las propiedades
 leídas).
De manera similar, a partir de images1 crea una nueva matriz, images2, 
utilizando getImage Mostrar el contenido de images2.*/

function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

function getImage(title, artist, date) {
    return {
        title: title,
        artist: artist,
        date: date
    };
}

let cuadros = [
    { title: "Mona Lisa", artist: "Leonardo da Vinci", date: 1503 },
    { title: "La última cena", artist: "Leonardo da Vinci", date: 1495 },
    { title: "La noche estrellada", artist: "Vincent van Gogh", date: 1889 },
    { title: "El grito", artist: "Edvard Munch", date: 1893 },
    { title: "El Guernica", artist: "Pablo Picasso", date: 1937 },
    { title: "El beso", artist: "Gustav Klimt", date: 1907 },
    { title: "La joven de la perla", artist: "Johannes Vermeer", date: 1665 },
    { title: "El nacimiento de Venus", artist: "Sandro Botticelli", date: 1485 },
    { title: "Las meninas", artist: "Diego Velázquez", date: 1656 },
    { title: "La creación de Adán", artist: "Miguel Ángel", date: 1512 }
];

let images1 = cuadros.map(cuadro => new Image(cuadro.title, cuadro.artist, cuadro.date));

let images2 = images1.map(image => getImage(image.title, image.artist, image.date));

images2.forEach(image => {
    console.log(`Título: ${image.title}, Artista: ${image.artist}, Año: ${image.date}`);
});