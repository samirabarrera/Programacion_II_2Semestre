/**************    Laboratorio 04  ********************
 * Complementa el objeto images de la tarea anterior con dos nuevos 
 * métodos (sin reescribir todo el objeto):

    1.    edit- que toma tres argumentos ( title, artist, y date) y 
          si encuentra una imagen con el título dado en la lista, 
          cambia sus propiedades artisty date;
    2.    delete- que toma el argumento title y si encuentra una imagen 
          con este título en la lista, la elimina 
          (para eliminar un elemento de la lista, use el método splice)*   

    Además, agregue un método show al Imageconstructor que mostrará 
    información sobre esta imagen. No reescriba el constructor.
    Utilice prototipos para este propósito. 
    Luego, modifyel showmétodo del objeto de imágenes de modo 
    que utilice el showmétodo de imagen única recién creado para 
    mostrar la información.

    Pruebe el script llamando a la secuencia:*/
Object = images 
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

const images = {
      add: function (title, artist, date) {
          const newImage = new Image(title, artist, date);
          this.list.push(newImage); 
      },

      delete: function (title, artist, date) {
            const newImage = new Image(title, artist, date);
            this.list.push(newImage); 
        },

      edit: function(title, artist, date) {
            const newImage = new Image(title, artist, date);
            this.list.push(newImage); 
        },
}


    images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
    images.add('The Last Supper', 'Leonardo da Vinci', 1495);
    images.add('The Starry Night', 'Vincent van Gogh', 1889);
    images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
    images.delete('The Last Supper');
    images.show();
    // -> Mona Lisa (Leonardo da Vinci, 1504)
    // -> The Starry Night (Vincent van Gogh, 1889)