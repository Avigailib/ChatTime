const firebaseConfig = {
  apiKey: "AIzaSyBcn1uCV3eeL_QCWKvhbzIA2GSNoXEvVBw",
  authDomain: "chti-51524.firebaseapp.com",
  databaseURL: "https://chti-51524-default-rtdb.firebaseio.com",
  projectId: "chti-51524",
  storageBucket: "chti-51524.appspot.com",
  messagingSenderId: "387701941613",
  appId: "1:387701941613:web:8b45c6a472147e314f6664"
};
  firebase.initializeApp(firebaseConfig);
  var nombre=localStorage.getItem("ingreso")
  document.getElementById("bienvenido").innerHTML=" Bienvenid@ "+nombre 
  function agregar(){
    var sala=document.getElementById("input").value
    firebase.database().ref("/").child(sala).update({contenido:"informacion"})
    localStorage.setItem("input", sala)
    window.location="index3.html"
  }
function leer(){
  firebase.database().ref("/").on('value',function(carpetas){
    document.getElementById("div").innerHTML=""
    carpetas.forEach(function(rais){
      var agrupar=rais.key 
      var fila="<div id="+agrupar+" onclick='Ir_a_la_sala(this.id)' >" +agrupar+"</div>"
      document.getElementById("div").innerHTML+=fila+"<hr>"
    })
  })
}
leer()
function Ir_a_la_sala(sala){
  localStorage.setItem("input",sala)
  window.location="index3.html"
}
function salir(){
  localStorage.removeItem("input")
  localStorage.removeItem("ingreso")
}