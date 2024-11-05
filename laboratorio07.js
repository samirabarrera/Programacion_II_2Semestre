/******************** LABORATORIO III ****************************
 * 
 * Modifica la clase Extended (reescríbela) añadiéndole un método match estático.
 * El métoddo debe recuperar el objeto teacher, objeto student y, opcionalmente,
 * el nombre del curso.  Tu tarea es encontrar la correspondencia entre el
 * estudiante y el profesor.
 * 
 * En caso de que no se proporcione el nombre del curso, el método debe devolver:
 * 
 *    + Una matriz vacía si no hay coincidencias (el profesor no imparte cursos en los
 *      que está interesado el estudiante o imparte cursos de un nivel inferior)
 *    + Una matriz con objetos {course, level}, si el profesor enseña los cursos que le
 *      interesan al estudiante.
 * 
 * Si el nombre del curso se pasa como último argumento, entonces el método debe devolver
 * el objeto {course, level} en caso de una coincidencia correcta o undefined en caso contrario.
 * 
 * Pruebe su solución utilizando el siguiente código:
 */

class Extended {
    constructor(name, surname, email, course){
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.courses = []
    }

    get fullName () {
        return this.fullName
    }
    set fullName ({name, surname}){
        this._fullName = {name, surname};
        this._email = this.email
    }
    addCourse(course, level){
        this.courses.push({course, level})
    }
    static match (teacher1, student1){
        return `Match between ${teacher.name} and ${student.name}`
    }
    removeCourse(course) {
        this.courses.push({course})
    }
    editCourse(course, level) {
        this.courses.push({course, level})
    }
}
class Student extends Extended {
    constructor (name, surname, email){
        super(name, surname, email);
    }
}
class Teacher extends Extended {
    constructor (name, surname, email){
        super(name, surname, email);
    }
}

/*Ejemplo */
let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
student1.addCourse('physics', 4);
teacher1.addCourse('maths', 4);

let match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> [{course: 'maths', level: 2}]

teacher1.editCourse('maths', 1);
match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> []

teacher1.addCourse('physics', 4);
match = ExtendedUser.match(teacher1, student1, 'physics');
console.log(match); // -> {course: 'physics', level: 4}

