var imagen=document.querySelector("img");
console.log(imagen.src)
var cant=10;

for(let i=1;i<=10;i++){
defpar="Impar";

if(i%2==0){
  defpar="par";
}

console.log("El numero es" +i+" " + "es"+ defpar);
}
 alert("Se termino de Ejecutar el algoritmo");

imagen.onclick = function(){
imagen.setAttribute("src","https://soyhorizonte.com/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg");
alert("Presionada");


var cantidad1= parseInt(prompt("ingresa el primer numero"));
var cantidad2= parseInt(prompt("ingresa el segundo numero"));

var suma=cantidad1+cantidad2;
var resta=cantidad1-cantidad2;
var multiplicacion=cantidad1*cantidad2;
var division=cantidad1/cantidad2;

document.write("La suma de los dos numeros es:"+suma);
document.write("La Resta de los dos numeros es:"+resta);
document.write("La multiplicación de los dos numeros es:"+multiplicacion);
document.write("La división de los dos numeros es:"+division);
}