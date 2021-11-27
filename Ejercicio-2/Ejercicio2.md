Para realizar el ejercicio primeramente se creara una funcion para separar la cadena en numeros y simbolos y los retornara en un arreglo,
Una vez teniendo este arreglo , lo enviaremos a otra funcion para buscar y operar las divisiones / multiplicaciones en este arreglo en orden de izquierda a derecha , cada que encontremos un simbolo de division o multiplicacion , operaremos los numeros a la izquierda y derecha de dicho simbolo , luego eliminaremos los 3 elementos involucrados e insertaremos el resultado de la operacion , esta accion se repetira hasta no encontrar mas multiplicaciones / divisiones en el arreglo ,
para la suma/resta se hizo una funcion con la misma logica

El programa al ingresar la cadena llama a la funcion operate() luego esta a su vez utiliza las funciones creadas multOrdiv sumOrRest para calcular el resultado total
