mlFaltantes: Cantidad de ml faltantes para completar el pedido del cliente

i : indice para indicar que botella estamos utilizando = 0

Botellas: arreglo de JSONS conteniendo los ml de cada botella con su cantidad en inventario ejemplo Botellas = [{cantidad:25, capacidadMl:750 , {cantidadBotella:30 , capacidadMl:350},{cantidadBotella:30 , capacidadMl:250}}]

botellasGastadas = [] arreglo donde almacenaremos los indices de las botellas utilizadas

- Primero se ordenarian las botellas con su capacidad de ML en orden de mayor a menor luego ,

- Crear un ciclo while (mientras mlFaltante > 0 ) -- un ciclo a repetirse hasta que le hayamos servido la cantidad de ml necesarios al cliente

  Si la cantidadBotella de la botella actual (botellas[i]) es = a 0 se pasa a la siguiente botella ya que no hay mas botellas en existencia haciendo i=i+1 y se avanza a la siguiente iteracion ;

  Si mlFaltantes es menor o igual que la capacidad de la botella actual (botellas[i](la de mayor capacidad)) la compararemos tambien con la siguiente botella (botellas [i+1]) , si la segunda comparacion es verdadera , pasaremos a la siguiente iteracion y al indice le aumentaremos 1 , asi en la siguiente iteracion del ciclo while usaremos la siguiente botella del arreglo como botella actual.-- Esto nos servira para escoger la botella que contenga los mlFaltantes desaprovechando el menor espacio

  si la segunda comparacion es falsa vamos a restarle a mlFaltantes la capacidad de la botella actual,a;adiremos el indice de la botella utilizada al arreglo de botellasGastadas , y tambien restaremos 1 de la cantidadBotella luego continuaremos a la siguiente iteracion.

  Si mlFaltantes es mayor que la capacidad de la botella actual (botellas[i]) haremos mlFaltantes - capacidadMl de botella actual,tambien a;adiremos el indice de la botella utilizada al arreglo de botellasGastadas y tambien restaremos 1 de la cantidadBotella, luego continuaremos a la siguiente iteracion.

  El ciclo while llega a su fin cuando mlFaltantes es menor o igual que 0 , esto quiere decir que ya le hemos servido los ml necesarios al cliente , en el arreglo de botellasGastadas estaran los indices de las botellas utilizadas , a partir de ahi podremos contar que botellas y en que cantidad se utilizaron , ademas ya estarian restadas las botellas utilizadas.

Cliente--------Compra en ML-------- Cantidad de botellas
Juan-------- 700 ML- 1 Botella de 500 ML , 1 de 250ML; restan 2 de 500ML y 14 de 250ML
Paco-------- 450 ML- 1 Botella de 500 ML; restan 1 de 500ML
Hugo-------- 185 ML- 1 Botella de 250 ML; restarian 14 botellas de 250 ML
Luis-------- 940 ML- 1 Botella de 500 ML , 1 Botella de 350 ML , 1 Botella de 100 ML; restarian 0 Botellas de 500 ML , 4 Botellas de 350 ML , 6 Botellas de 100 ML
