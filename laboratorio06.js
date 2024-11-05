/**     LABORATORIO II
 * Crea una nueva clase, ExtendedUser, que heredará de la clase User
 * 
 * Coloque un setter y un getter nombrados fullName en la clase.  El getter debe devolver el 
 * nombre y el apellido concatenados en un cadena. El setter toma el nombre y el apellido concatenados
 * (por ejemplo, 'Rafael Fifer') y los divide en nombre y apellido (el método split),
 * cambiando las propiedades apropiadas del objeto.
 * 
 * Basándose en la clase ExtenderUser, cree dos clases más Teacher y Student (herencia). No
 * deberían tener nuevos métodos ni propiedades, sino solo los roles predeterminados en
 * sus constructores para 'teacher' o 'student' respectivamente (es decir, sus constructores
 * tomarán tres parámetros en lugar de cuatro: name, surname y email);
 * 
 * Pruebe su solución utilizando el siguiente código:*/

class User {
    constructor(name, surname, email, role){
        this._name = name,
        this._surname = surname,
        this._email = email,
        this._role = role
        this.courses = [] //o this.course = courses
    }
    addCourse(course, level){
        this.courses.push({course, level})
    }
    removeCourse(course) {
        this.courses.push({course})
    }
    editCourse(course, level) {
        this.courses.push({course, level})
    }
    sendMessage(from, message) {
        this.sendMessage.push({showMessagesHistory})
    }
    showMessagesHistory() {
        this.courses.push({})
    }
}

class ExtendedUser extends User {
    constructor ({name, surname, email}){
        this._fullNamefullName = {name, surname};
        this._email = email;
    }

    set fullName ({name, surname}){
        this._fullName = {name, surname};
        this._email = this.email
    }
    get fullName () {
        return this.fullName
    }

    Split(){}
}



let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
teacher1.addCourse('biology', 3);
teacher1.editCourse('chemistry', 4);
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fife: 1 courses
console.log(`${teacher1.fullName}: ${teacher1.courses.length} courses`); // -> Paula Thompkins: 2 courses

student1.fullName = 'Rafael Fifer';
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fifer: 1 courses

