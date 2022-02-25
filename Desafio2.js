const fs = require ("fs")

//escribiendo el archivo.txt


//leyendo los datos
let datos = fs.readFile('./productos.json', (error, datos)=>{
    if(error) {
        console.log (error)
    } else {
        let datosParse = JSON.parse(datos)
        console.log(JSON.stringify(datosParse, null, 2))
        fs.writeFile('./productos.txt', JSON.stringify(datosParse, null, 2), (error, datos)=>{
            if (error){
                console.log(error)
            } else {
                console.log('archivo creado')
            }
        })
    }
})

//lista de productos
const productos = [];

class Producto {
    constructor (title, price, thumbnail){
    this.title = title.toLowerCase (),
    this.price = price,
    this.thumbnail = thumbnail
    };

    save (objet){

    };
}

//creando productos


const producto1 = new Producto (
    'Globo Terráqueo',                                                                                                                          
    345.67,                                                                                                                                     
    'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                   
);
const producto2 = new Producto (
    'Escuadra',                                                                                                                                 
    123.45,                                                                                                                                     
    'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
);
const producto3 = new Producto (
    'Calculadora',                                                                                                                              
    234.56,                                                                                                                                     
    'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
)

//metodo para agregar los productos a la lista
const create = (Producto) => {
    productos.push (Producto)

  }

create(producto1)
create(producto2)
create(producto3)

//agregando id a los productos de la lista
productos.forEach((item, index)=>{
    item.id = index+1;
   });
  // console.log(productos);

//metodo que retorna la lista de productos
const getAll = () =>{
    return productos;
  };

console.log(productos)
