var num=0;//creo la variable para almacenar el número.
accion = parseInt(prompt("Introduce un número: ","0"));//Introducimos el número correspondiente.
num = accion;//Almacenamos lo introducido por la entrada de teclado en la variable num.

while(num < 0){//Un bucle while en caso de que lo introducido sea un número negativo.
    alert("ERROR: El número introducido no es válido");
    accion2 = parseInt(prompt("Introduce un número válido","0"));
    num = accion2;//Almacenamoslo introducido por la entrada de teclado en la  variable num.
}
//En caso de que el número sea mayor que 5 devolvera el número introducido escrito por texto de color verde e impreso en el html.
if(num > 5){
    document.write("<p class='green'>" + num + "</p>");
}else{//En caso de que el número sea menor que 5 devolvera el número introducido escrito por texto de color rojo e impreso en el html.
    document.write("<p class='red'>" + num + "</p>");
}