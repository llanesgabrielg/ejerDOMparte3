const boton = document.getElementById("boton");

boton.addEventListener("click", function () {
  //valor de texto en el input
  const textoInput = document.getElementsByClassName("text")[0].value;
  console.log(textoInput);
  const textoUrl = document.getElementById("url").value;
  console.log(textoUrl);

  //tengo que obtener los objetos por id, por clase obtengo una lista
  // div donde voy a incluir los nuevos objetos creados
  const contenedor = document.getElementById("contenedor");
  console.log(contenedor);
  // puntero a un nuevo elemento creado, en la banca de suplentes xd
  const newContenedor = document.createElement("div");
  
  const newParrafo = document.createElement("p");
  newParrafo.textContent = textoInput;

  const newImage = document.createElement("img");
  //agrego atributo source con la direccion de imagen a mostrar
  newImage.setAttribute("src",textoUrl);

  newContenedor.appendChild(newParrafo);

  newContenedor.appendChild(newImage);
  // agrego el nuevo elemento creado a el DOM contenedor div con id="contenedor"
  contenedor.appendChild(newContenedor);
  // agrego una clase a los nuevos contenedores para agregar diseño
  newContenedor.classList.add("forma");
  newImage.classList.add("imagen");
  //xd
  const divGrande = document.getElementById("vistaGrande");
  const imgGrande = document.getElementById("imgGrande");
  newImage.addEventListener("click",function(){
    imgGrande.setAttribute("src",textoUrl);
    //elimina la class si existe sino la agrega. alterna 
    divGrande.classList.toggle("vistaGrande");
  });
  //boton cerrar
  const cerrarBoton = document.getElementById("cerrarImgGrande");
  cerrarBoton.addEventListener("click",function(){
    //elimina la class si existe sino la agrega. alterna 
    divGrande.classList.toggle("vistaGrande");
  });

});

