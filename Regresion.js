

export default class Regresion{

    constructor(datos,Idtabla,w0,w1,w2,w3,w4){
        this.tabla = document.getElementById(Idtabla);
        this.data = datos;
        //pesos iniciales
        this.pesosI = [w0,w1,w2,w3,w4]
        this.w0=[];
        this.w1=[];
        this.w2=[];
        this.w3=[];
        this.w4=[];
        this.prediccion = [];
        this.error = [];
        this.errorCuadrado=[];
    }

    init(){
         this.calcularPrediccion();
         this.calcularError();
         this.erroCuadrado();
         this.calcularPesoW0();
         this.calcularPesoW1();
         this.calcularPesoW2();
         this.calcularPesoW3();
         this.calcularPesoW4();
         this.listar();

    }

    calcularPrediccion(){
        for(let column of this.data){
            this.prediccion.push(this.pesosI[0]*column.Porosidad+
                            this.pesosI[1]*column.Permeabilidad+
                            this.pesosI[2]*column.tamano_de_grano+
                            this.pesosI[3]*column.contenido_arcilla);
              
         }
         
    }

    calcularError(){
        let i=0
        for (let column of this.data) {
           this.error.push(column.Atenuacion-this.prediccion[i])
           i++;      
        }
    }

    erroCuadrado(){
        
        for (let i=0;i<this.data.length;i++) {
           this.errorCuadrado.push(Math.pow(this.error[i],2))
        
        }
    }

    calcularPesoW0(){
        for(let item of this.error){
            this.w0.push(item)
        }
       
    }

    calcularPesoW1(){
        let i=0;
        for(let item of this.data){
            this.w1.push(this.error[i]*item.Porosidad)
        }
    }
    calcularPesoW2(){
        let i=0;
        for(let item of this.data){
            this.w2.push(this.error[i]*item.Permeabilidad)
        }
    }
    calcularPesoW3(){
        let i=0;
        for(let item of this.data){
            this.w3.push(this.error[i]*item.tamano_de_grano)
        }
    }
    calcularPesoW4(){
        let i=0;
        for(let item of this.data){
            this.w4.push(this.error[i]*item.contenido_arcilla)
        }
    }
    listar(){
        let i=0;
        for(let item of this.data){
            this.tabla.innerHTML += `
                <tr>
                    <td>${item.Atenuacion}</td>
                    <td>${this.prediccion[i].toFixed(3)}</td>
                    <td>${this.error[i].toFixed(3)}</td>
                    <td>${this.errorCuadrado[i].toFixed(3)}</td>
                    <td>${this.w0[i].toFixed(3)}</td>
                    <td>${this.w1[i].toFixed(3)}</td>
                    <td>${this.w2[i].toFixed(3)}</td>
                    <td>${this.w3[i].toFixed(3)}</td>
                    <td>${this.w4[i].toFixed(3)}</td>
                </tr>
            `;
            i++;
        }
    }
}