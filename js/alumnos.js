var alumnos = [
  {
   nombre: 'Juan Gomez',
   nota: 7
  }, {
   nombre: 'Pedro Rodriguez',
   nota: 4
  }, {
   nombre: 'Roxana García',
   nota: 8
  }, {
   nombre: 'Luciano Lopez',
   nota: 5
  }, {
   nombre: 'Fernanda Gimenez',
   nota: 6
  }, {
   nombre: 'Florencia Martinez',
   nota: 10
  }, {
   nombre: 'Raul Sanchez',
   nota: 7
  }, {
   nombre: 'Sandra Figueroa',
   nota: 8
  }
 ];
 
 let alumnosAprobados = alumnos.filter(alumno =>alumno.nota >=7);


 let titulo1=document.getElementById("titulo2");
let node1 = document.createElement("h3");  
let textnode1 = document.createTextNode("Array con los alumnos aprobados"); 
  node1.appendChild(textnode1);
  titulo1.appendChild(node1);

 for (let index = 0; index < alumnosAprobados.length; index++) {
  const element = alumnosAprobados[index];
  document.write( `<p> Alumno: ${alumnosAprobados[index].nombre} , Nota:${alumnosAprobados[index].nota}</p>`);
}


   
 
 