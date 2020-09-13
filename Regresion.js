// Se inciia y exporta la clase Regresion
export default class Regresion {

    // Creamos un constructor para obtener los datos
    constructor(datos, Idtabla, w0, w1, w2, w3, w4, alfa, constante, iniciales) {
        // Cargamos la tabla donde se mostraran los datos de pesos, alfa y constante/decaimiento
        this.iniciales = document.getElementById(iniciales);;
        // Cargamos la tabla donde serán mostrado los datos
        this.tabla = document.getElementById(Idtabla);

        // Variables para almacenar alfa y constante/decaimiento
        this.alfa = alfa;
        this.constante = constante;

        // Asignamos los datos a una variable
        this.data = datos;

        //pesos iniciales
        this.pesosI = [w0, w1, w2, w3, w4]

        // Inicializacion de los pesos con su varibale para la suma
        this.w0 = [];
        this.sumaW0 = 0
        this.w1 = [];
        this.sumaW1 = 0
        this.w2 = [];
        this.sumaW2 = 0
        this.w3 = [];
        this.sumaW3 = 0
        this.w4 = [];
        this.sumaW4 = 0

        // Vector para la Columna Predicción
        this.prediccion = [];

        // Vector para la coulmna Error
        this.error = [];

        // Vector para la columna SQR Error
        this.errorCuadrado = [];

        // Variable para almacenar la suma de todos los datos del vector errorCuadrado[]
        this.sumaErrorCuadrado = 0;

        // Variable para calcular el resultado de sumaErrorCuadrado/2;
        this.sumaErrorCuadrado2 = 0;
    }

    init() {
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

    calcularPrediccion() {

        this.prediccion = [];

        // Variable auxiliar Number
        let aux = 0;

        // Iniciamos el recorrido de los datos para realizar Predicción
        this.data.forEach(column => {

            // Calculamos cada flia de la Predicción
            aux = this.pesosI[0] + (this.pesosI[1] * column.Porosidad) +
                (this.pesosI[2] * column.Permeabilidad) +
                (this.pesosI[3] * column.tamano_de_grano) +
                (this.pesosI[4] * column.contenido_arcilla);

            // Agregamos el auxiliar al vector de predicciones
            this.prediccion.push(aux.toFixed(2));
        })
    }


    // Método para calcular el error
    calcularError() {
        this.error = [];
        let i = 0 // Variable iteradora

        // Se recorren el vector de predicción y los datos
        for (let column of this.data) {

            // Se agrega en cada iteración el error que equivale a cada fila
            this.error.push(column.Atenuacion - this.prediccion[i])
                // Se aumenta la variable iteradora
            i++;
        }
    }

    // Método que calcula el error al cuadrrado
    erroCuadrado() {
        this.errorCuadrado = [];
        // Iteramos al vector error para calcular su Error^2
        for (let i = 0; i < this.error.length; i++) {
            // Agregamos cada Error^2 a su respectiva fila/posicion del Array errorCuadrado
            this.errorCuadrado.push(Math.pow(this.error[i], 2))
                // Vamos calculando la suma del Error cuadrado
            this.sumaErrorCuadrado += Math.pow(this.error[i], 2);
        }
        // Calculamos la suma del (Error^2)/2
        this.sumaErrorCuadrado2 = (this.sumaErrorCuadrado / 2);
    }


    // Método para calcular el peso w[0]
    calcularPesoW0() {
        this.w0 = [];
        // Se itera el vector error
        for (let item of this.error) {
            // Se agrega cada error*1 a la posicion respectiva del vector del peso w[0]
            this.w0.push(item)
            this.sumaW0 += item;
        }
    }


    // Método para calcular el Peso w[1]
    calcularPesoW1() {
        this.w1 = [];

        // Variable iterable
        let i = 0;

        // Se recorren los datos y el vector error
        for (let item of this.data) {
            // Se agrega cada error*porosidad a la posicion respectiva del vector del peso w[1]
            this.w1.push(this.error[i] * item.Porosidad)
            this.sumaW1 += this.w1[i];
            // Se aumenta en uno la variable iterable
            i++;
        }
    }

    // Método para calcular el Peso w[2]
    calcularPesoW2() {
            this.w2 = [];

            // Variable iterable
            let i = 0;

            // Se recorren los datos y el vector error
            for (let item of this.data) {
                // Se agrega cada error*Permeabilidad a la posicion respectiva del vector del peso w[2]
                this.w2.push(this.error[i] * item.Permeabilidad);
                this.sumaW2 += this.w2[i];

                // Se aumenta en uno la variable iterable
                i++;
            }

        }
        // Método para calcular el Peso w[3]
    calcularPesoW3() {
            this.w3 = [];

            // Variable iterable
            let i = 0;

            // Se recorren los datos y el vector error
            for (let item of this.data) {
                // Se agrega cada error*tamano_de_grano a la posicion respectiva del vector del peso w[3]
                this.w3.push(this.error[i] * item.tamano_de_grano)
                this.sumaW3 += this.w3[i];

                // Se aumenta en uno la variable iterable
                i++;
            }

        }
        // Método para calcular el Peso w[4]
    calcularPesoW4() {
        this.w4 = [];

        // Variable iterable
        let i = 0;

        // Se recorren los datos y el vector error
        for (let item of this.data) {
            // Se agrega cada error*contenido_arcilla a la posicion respectiva del vector del peso w[4]
            this.w4.push(this.error[i] * item.contenido_arcilla)
            this.sumaW4 += this.w4[i];
            // Se aumenta en uno la variable iterable
            i++;
        }

    }
    listar() {
        this.tabla.innerHTML = ''
        let i = 0;
        for (let item of this.data) {
            this.tabla.innerHTML += `
                <tr>
                    <td>${item.Atenuacion}</td>
                    <td>${this.prediccion[i]}</td>
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


    // Método para realizar las iteraciones
    calcularIteraciones() {
        this.tabla.innerHTML = ' ';
        this.iniciales.innerHTML = ' ';
        let iter = 0;
        let alfaAux = 0;
        do {

            alfaAux = this.alfa * (this.constante / (this.constante + iter))
            console.log(iter + '->' + alfaAux);

            if (iter != 0) {
                this.pesosI[0] = this.pesosI[0] + (alfaAux * this.sumaW0);
                this.pesosI[1] = this.pesosI[1] + (alfaAux * this.sumaW1);
                this.pesosI[2] = this.pesosI[2] + (alfaAux * this.sumaW2);
                this.pesosI[3] = this.pesosI[3] + (alfaAux * this.sumaW3);
                this.pesosI[4] = this.pesosI[4] + (alfaAux * this.sumaW4);
            }
            console.log(this.prediccion);
            this.init();
            this.iniciales.innerHTML += `
                <tr>    
                    <td>${iter}</td>
                    <td>${this.constante}</td>
                    <td>${alfaAux}</td>
                    <td>${this.pesosI[0].toFixed(3)}</td>
                    <td>${this.pesosI[1].toFixed(3)}</td>
                    <td>${this.pesosI[2].toFixed(3)}</td>
                    <td>${this.pesosI[3].toFixed(3)}</td>
                    <td>${this.pesosI[4].toFixed(3)}</td>
                </tr>
            `;
            iter++;
        } while (iter <= 20);
    }

}