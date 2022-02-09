
//(3) Recibe el objeto y se los envia a todos los participantes de la lista
class Sujeto{
    constructor(){
        this.observadores = []
    }

    suscribete (visor){
        this.observadores.push(visor)
    }

    dejarSuscripcion (visor){
        this.observadores = this.observadores.filter(e => e!=0)
        //retorna el array sin el valor resivido
    }

    notificar(modelo){ //Informa a cada uno de la lista
        this.observadores.forEach(visor =>{
            visor.notificar(modelo)
        })
    }
}
//(2) Recibe el texto y ejecuta el notificar de la clase padre y 
//envia el objeto textsujeto
class TextSujeto extends Sujeto{ //receptor de informacion
    constructor () {
        super();//Ejecuta el constructor del padre
        this.text = "";
    }

    notificar(text){
        this.text = text;
        super.notificar(this); //Se envia el objeto creado  con la clase
    }
}

//recibe el objeto y extrae el texto y opera segun la funcion a
class ObservadorA {
    notificar(sujeto){
        document.querySelector(".observador__uno").innerHTML = sujeto.text
    }
}

class ObservadorB {
    notificar(sujeto){
        document.querySelector(".observador__dos").innerHTML = sujeto.text.length
    }
}

class ObservadorC {
    notificar(sujeto){
        document.querySelector(".observador__tres").innerHTML = sujeto.text.toLowerCase()
    }
}

let sujeto = new TextSujeto();

//Se inician los observadores
let obsUno = new ObservadorA();
let obsDos = new ObservadorB();
let obsTres = new ObservadorC();

//Se agregan a la lista de observadores
sujeto.suscribete(obsUno);
sujeto.suscribete(obsDos);
sujeto.suscribete(obsTres);

//(1) Escucha el cambio en el campo y elvia la informacion al receptor del sujeto
document.querySelector(".texto").addEventListener("input", (e)=>{
    sujeto.notificar(e.target.value) 
})