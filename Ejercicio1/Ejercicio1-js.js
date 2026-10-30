function calcular() {
 
    let nombre = document.getElementById("nombre").value;

    let salario = Number(document.getElementById("salario").value);

    document.getElementById("resultadoNombre").textContent = nombre;
    document.getElementById("resultadoBruto").textContent = salario;
    calculos();
}

function calculos() {
   let salario = Number (document.getElementById("salario").value);

    let cargaSocial = salario * 10.83 / 100;

   document.getElementById("resultadoCS").textContent = cargaSocial;
   

   let impuestoRenta = 0;

   if (salario <= 918000){
    impuestoRenta = 0;
   } else if (salario <= 1347000){
    impuestoRenta = salario * 10 / 100;
   } else if (salario <= 236400){
    impuestoRenta = salario * 15 /100;
   } else if (salario <= 4727000){
    impuestoRenta = salario * 20 / 100;
   } else {
    impuestoRenta = salario * 25 / 100;
   }

   document.getElementById("resultadoRenta").textContent = impuestoRenta;

   let salarioNeto = salario - cargaSocial - impuestoRenta;

   document.getElementById("resultadoNeto").textContent = salarioNeto.toFixed(2);

   
}

function dolares(){
    let cambio = Number(document.getElementById("cambio").value);

    let salario1 = Number(document.getElementById("salario1").value);

    let calculo3 = salario1 * cambio; 
    
     document.getElementById("resultadoDolar").textContent = calculo3.toFixed(2);

}