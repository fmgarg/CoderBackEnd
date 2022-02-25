const fs = require('fs');

const nombreArchivo = 'productos.json'

let productos = fs.readFileSync('./productos.json', 'utf-8')
let productosParse = JSON.parse(productos)

//console.log(JSON.stringify(datosParse, null, 2))
fs.writeFileSync('./productos.txt', JSON.stringify(productosParse, null, 2))

//string console.log(productos)
// objet console.log(productosParse)

const newObjeto = {
    "title":"Globo Terráqueo",                                                                                                                          
    "price": 345.67,                                                                                                                                     
    "thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"                                   
}

class Contenedor {
       
    constructor (nombreArchivo, productosParse, newObjeto){
        this.archivo = nombreArchivo,
        this.listaProductos = productosParse
        this.objeto = newObjeto
        };

    async getAll() {
        try {
            const contenido = fs.readFileSync(this.archivo, "utf8");
            //console.log(contenido)
            const contenidoParse = JSON.parse(contenido);
            //console.log(contenidoParse)
            return contenidoParse;
            }
        catch (err) {
            console.log('no se encuentra el archivo');
        }
        }

    async save(producto) {
        try {
            producto ["id"] = productosParse.length + 1
            //console.log(productosParse)
            productosParse.push(producto)
            let productosString = JSON.stringify(this.listaProductos, null, 2);

           // fs.writeFile('./productos.txt', JSON.stringify(productosString, null, 4))
            
            return (producto.id)
       
        }
        catch (err) {
            console.log('no se pudo agregar');
        }
    }

}

const items = new Contenedor ('productos.json');

//console.log(items.getAll())


console.log(items.save(newObjeto))
