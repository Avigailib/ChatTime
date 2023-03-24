function iniciar(){
    var nombre=document.getElementById("ingreso").value 
    localStorage.setItem("ingreso", nombre)
    window.location="index2.html"
}