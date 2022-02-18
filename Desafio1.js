class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = libros,
        this.mascotas = mascotas
    };

    getFullName (){
        console.log(this.nombre, this.apellido)
    };

    addMascota (mascotas) {
        this.mascotas.push (mascotas)
        //console.log(this.mascotas)
    };

    countMascotas (){
        let myPetsCount = this.mascotas.length
        console.log (myPetsCount)
    };

    addBook (nombre, autor) {

        this.libros.push({nombre, autor})
        //console.log(this.libros)
    };

    getBookNames (){
        let myBookNames = this.libros.map(libros => libros.nombre)
        console.log (myBookNames)
        
    };

}

const Pancho = new Usuario (
    "Francisco",
    "Gonzalez",
    [],
    []
 
)

Pancho.getFullName ();

Pancho.addMascota("perro");
Pancho.addMascota("gato");
Pancho.countMascotas();
Pancho.addBook('El señor de las moscas','William Golding');
Pancho.addBook('Fundacion','Isaac Asimov');
Pancho.getBookNames();




