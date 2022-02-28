const fs = require('fs');

const nombreArchivo = 'productos.txt'

let productos = fs.readFileSync('./productos.txt', 'utf-8')
let productosParse = JSON.parse(productos)

fs.writeFileSync('./productos.txt', JSON.stringify(productosParse, null, 2))

const newObjeto = {
    "title":"Pez Globo",                                                                                                                          
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

                if (this.listaProductos !== []) {
                    console.log(productosParse);
                } else {
                    throw 'no hay productos para mostrar'
                }

            } catch (error) {
                console.log(`Error: ${error}`);
            }
        }

    async save(producto) {
        try {
            producto ["id"] = productosParse.length + 1
            //console.log(producto)
            productosParse.push(producto)
            //console.log(productosParse)            
            await fs.writeFile('./productos.txt', JSON.stringify(productosParse, null, 4), error =>{
                if(error){
                } else {
                    console.log(`el nuevo objeto fue guardado con el id ${producto.id}`)
                }
            })
            //console.log (producto.id)
        }
        catch (err) {
            console.log('no se pudo agregar');
        }
    }

    async getByID(ID) {
        try {
            let buscarProductoXId = productosParse.find(elem => elem.id == ID);
            //console.log(buscarProductoXId)
            if (buscarProductoXId == null){                
                console.log('no se ubica el producto');
            }else{
                console.log(buscarProductoXId);
            }
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    async deleteByID(ID) {
        try {
            const eliminado = productosParse.filter ((item) => item.id == ID);
            //console.log(eliminado)
            if (eliminado.length === 0) { 
                console.log('el producto no existe')
            }else{
                const resultado = productosParse.filter ((item) => item.id !== ID)
                await fs.writeFile('./productos.txt', JSON.stringify(resultado, null, 4), error =>{
                    if(error){
                    } else {
                    //  console.log(`esta es su lista de productos actualizada ${resultado}`)
                    }
                })
                //console.log (resultado)
            }
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    }

    async deleteAll() { 
        this.listaProductos = [];
        await fs.writeFile('./productos.txt', JSON.stringify(this.listaProductos, null, 4), error =>{
            if(error){
            } else {
            console.log("Se eliminaron todos los productos del contenedor.")
            }
        });
    }

}

const items = new Contenedor ('productos.json');

//LLAMADOS DE PRUEBA A CADA METODO

//items.save(newObjeto)

//items.getAll()

//items.getByID(1)

//items.deleteByID(4)

//items.deleteAll()