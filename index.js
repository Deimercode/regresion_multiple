
$(document).ready(function(){
    

 var datos = [{"Porosidad":29.81,"Permeabilidad":17.77,"tamano_de_grano":74,"contenido_arcilla":12,"Atenuacion":4.51},{"Porosidad":35.98,"Permeabilidad":21.16,"tamano_de_grano":76,"contenido_arcilla":16,"Atenuacion":4.51},{"Porosidad":20.55,"Permeabilidad":0.05,"tamano_de_grano":80,"contenido_arcilla":15,"Atenuacion":3.15},{"Porosidad":3.189,"Permeabilidad":0,"tamano_de_grano":78,"contenido_arcilla":0,"Atenuacion":0.01},{"Porosidad":2.9,"Permeabilidad":0,"tamano_de_grano":70,"contenido_arcilla":0,"Atenuacion":0.08},{"Porosidad":32.397,"Permeabilidad":9.3,"tamano_de_grano":78,"contenido_arcilla":23,"Atenuacion":8.92},{"Porosidad":35.129,"Permeabilidad":73.26,"tamano_de_grano":82,"contenido_arcilla":30,"Atenuacion":8.18},{"Porosidad":33.1,"Permeabilidad":10.05,"tamano_de_grano":83,"contenido_arcilla":20,"Atenuacion":4.83},{"Porosidad":31.02,"Permeabilidad":5.47,"tamano_de_grano":84,"contenido_arcilla":18,"Atenuacion":4.52},{"Porosidad":23.42,"Permeabilidad":11.42,"tamano_de_grano":85,"contenido_arcilla":15,"Atenuacion":2.4},{"Porosidad":24.7,"Permeabilidad":7.1,"tamano_de_grano":91,"contenido_arcilla":22,"Atenuacion":3.47},{"Porosidad":29.943,"Permeabilidad":9.59,"tamano_de_grano":81,"contenido_arcilla":17,"Atenuacion":5.02},{"Porosidad":30.69,"Permeabilidad":3.5,"tamano_de_grano":102,"contenido_arcilla":17,"Atenuacion":4.59},{"Porosidad":27.57,"Permeabilidad":0.45,"tamano_de_grano":76,"contenido_arcilla":25,"Atenuacion":8.61},{"Porosidad":24.84,"Permeabilidad":1.13,"tamano_de_grano":91,"contenido_arcilla":25,"Atenuacion":7.68},{"Porosidad":5.45,"Permeabilidad":0,"tamano_de_grano":97,"contenido_arcilla":3,"Atenuacion":0.19},{"Porosidad":9.94,"Permeabilidad":0.16,"tamano_de_grano":97,"contenido_arcilla":9,"Atenuacion":4.63},{"Porosidad":11.93,"Permeabilidad":0.01,"tamano_de_grano":87,"contenido_arcilla":7,"Atenuacion":1.79},{"Porosidad":15.11,"Permeabilidad":0.06,"tamano_de_grano":74,"contenido_arcilla":14,"Atenuacion":4.92},{"Porosidad":19.05,"Permeabilidad":0.13,"tamano_de_grano":72,"contenido_arcilla":15,"Atenuacion":6.83},{"Porosidad":20.48,"Permeabilidad":0.44,"tamano_de_grano":79,"contenido_arcilla":8,"Atenuacion":1.57},{"Porosidad":28.83,"Permeabilidad":10.27,"tamano_de_grano":82,"contenido_arcilla":20,"Atenuacion":3.33},{"Porosidad":33.249,"Permeabilidad":2.25,"tamano_de_grano":80,"contenido_arcilla":15,"Atenuacion":5.26},{"Porosidad":27.71,"Permeabilidad":5.78,"tamano_de_grano":87,"contenido_arcilla":20,"Atenuacion":4.19},{"Porosidad":29.412,"Permeabilidad":7.03,"tamano_de_grano":91,"contenido_arcilla":23,"Atenuacion":4.93},{"Porosidad":28.513,"Permeabilidad":33.67,"tamano_de_grano":139,"contenido_arcilla":15,"Atenuacion":4.18},{"Porosidad":18.645,"Permeabilidad":2.21,"tamano_de_grano":145,"contenido_arcilla":12,"Atenuacion":2.68},{"Porosidad":17.794,"Permeabilidad":0.37,"tamano_de_grano":140,"contenido_arcilla":12,"Atenuacion":2.36},{"Porosidad":14.783,"Permeabilidad":220.9,"tamano_de_grano":242,"contenido_arcilla":0.2,"Atenuacion":0.2},{"Porosidad":15.065,"Permeabilidad":150.7,"tamano_de_grano":229,"contenido_arcilla":1,"Atenuacion":0.7},{"Porosidad":15.431,"Permeabilidad":255.9,"tamano_de_grano":272,"contenido_arcilla":1,"Atenuacion":0.29},{"Porosidad":14.518,"Permeabilidad":160.4,"tamano_de_grano":260,"contenido_arcilla":0.7,"Atenuacion":0.14},{"Porosidad":15.64,"Permeabilidad":87.65,"tamano_de_grano":235,"contenido_arcilla":0.5,"Atenuacion":0.09},{"Porosidad":16.514,"Permeabilidad":41.74,"tamano_de_grano":377,"contenido_arcilla":15,"Atenuacion":3.63},{"Porosidad":17.06,"Permeabilidad":50.51,"tamano_de_grano":312,"contenido_arcilla":15,"Atenuacion":3.32},{"Porosidad":16.03,"Permeabilidad":52.42,"tamano_de_grano":330,"contenido_arcilla":15,"Atenuacion":3.38},{"Porosidad":12.045,"Permeabilidad":3.67,"tamano_de_grano":226,"contenido_arcilla":7,"Atenuacion":2.1},{"Porosidad":16.48,"Permeabilidad":87.55,"tamano_de_grano":226,"contenido_arcilla":5,"Atenuacion":0.47},{"Porosidad":8.21,"Permeabilidad":0.13,"tamano_de_grano":140,"contenido_arcilla":6,"Atenuacion":2.46},{"Porosidad":26.56,"Permeabilidad":305.8,"tamano_de_grano":187,"contenido_arcilla":5,"Atenuacion":2.73},{"Porosidad":14.125,"Permeabilidad":11.06,"tamano_de_grano":271,"contenido_arcilla":4,"Atenuacion":1.65},{"Porosidad":11.98,"Permeabilidad":0.46,"tamano_de_grano":153,"contenido_arcilla":6,"Atenuacion":1.62}]
var error=[]
var w0=[];
var w1=[];
var w2=[];
var w3=[];
var predicion=[];
var table = $('#res')
 function calcularprediccion(wo,w1,w2,w3){
  for(let column of datos){

     predicion.push(w0*column.Porosidad+w1*column.Permeabilidad+w2*column.tamano_de_grano+w3*column.contenido_arcilla);
       
  }


 }

 function calcularError(){
     let i=0
     for (let column of datos) {
        error.push(column.Atenuacion-predicion[i])
        i++;
         
     }
   
 }


 
 
  calcularprediccion(0.1,0.23,0.8,0.16);
 calcularError();

function listar(){
    let i=0;
    for(let item of datos){
        table.append(`
            <tr>
                <td>${item.Atenuacion}</td>
                <td>${predicion[i].toFixed(3)}</td>
                <td>${error[i].toFixed(3)}</td>
                <td>${Math.pow(error[i],2).toFixed(3)}</td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
        
        `);
        i++;
    }
}

listar()
})