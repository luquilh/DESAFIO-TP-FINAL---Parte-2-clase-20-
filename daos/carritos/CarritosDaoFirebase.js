import ContenedorFirebase from '../../contenedores/ContenedorFirebase.js'



class CarritosDaoFirebase extends ContenedorFirebase{

    constructor(){
        
        super('carritos')
        
        
    }
/*
    async desconectar(){
        await mongoose.connection.close();
    }
*/

    
}


export default CarritosDaoFirebase