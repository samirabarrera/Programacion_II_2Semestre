/***********  Laboratorio 3  ************
 * En este laboratorio deberás crear el objeto images y lo utilizarás
 * para almacenar imágenes. El objeto "images" debe contener una propiedad
 * "list", que será una matriz de objetos de imagen y métodos:
 * 
 *    1.  contains -- toma como argumento el título de la imagen y retorna
 *                    true si la imagen ya está colocada en la lista 
 *                    (de lo contrario retorna false).
 *    2.  add      -- toma tres argumentos (title, artist, y date) y crea
 *                    un nuevo objeto basado en ellos y lo agrega a la lista
 *                    (si aún no se ha agregado).
 *    3.  show     -- que muestra todas las imágenes de la lista.
 *    4.  clear    -- que elimina todos los objetos de la lista.
 * 
 * Al crear el objeto, utilice el constructor Image preparado en la tarea
 * anterior y pruebe el script llamando a la secuencia: */

let = images 
    list: [
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
    ]

function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}


images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
images.show();
images.clear();

console.log(image.contains); 
console.log(images.show());