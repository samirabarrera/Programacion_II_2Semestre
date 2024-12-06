let el = document.createElement('p');
el.innerHTML = "Elemento creado"
document.body.append(el)

el.style = 'background-color: red; font.weight: bold';
el.className = 'parrafo';
el.id = 'mi_parrafo';

//MI CÓDIGO PARA CAMBIAR DE COLOR MI NOMBRE
let miNombre = document.createElement ('p');
miNombre.innerHTML = "Samira Barrera"
document.body.append(miNombre)

miNombre.style = 'background-color: pink; font.weight: bold';
miNombre.className = 'parrafo';
miNombre.id = 'mi_nombre';
miNombre.setAttribute('minombre', 'Mi nombre')

console.log(miNombre.getAttribute('minombre'));//Como obtener el valor de algún atributo .getAttribute('indicar el valor de la llave')
console.log(miNombre.hasAttribute('minombre'));