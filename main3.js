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
  function salir(){
    localStorage.removeItem("input")
    localStorage.removeItem("ingreso")
  }
  var nombre=localStorage.getItem("ingreso")
  var sala=localStorage.getItem("input")
  document.getElementById("ns").innerHTML=" Bienvenido a la sala " + sala
  function enviar(){
    var almacenando = document.getElementById("mensaje").value 
    firebase.database().ref(sala).push({
        usuario:nombre,
        mensaje:almacenando,
        like:0
    })
    document.getElementById("mensaje").value=""
  }
  function leer2(){
    firebase.database().ref("/"+ sala).on("value",function(carpetas){
        document.getElementById("mds").innerHTML=""
        carpetas.forEach(function(rais){
            keys=rais.key
            contenido=rais.val()
            if(keys!="contenido"){
                keymensaje=keys
                datosmensaje=contenido
                usuario=datosmensaje["usuario"]
                mensaje=datosmensaje["mensaje"]
                like=datosmensaje["like"]
                var linea1="<h3>" + usuario +"</h3>"
                linea2="<h3>" + mensaje +"</h3>" 
                linea3="<button id="+ keymensaje +" value="+like+" onclick='Leerlikes(this.id)'>" + like +"</button>"
                var total=linea1+linea2+linea3
                document.getElementById("mds").innerHTML+=total
            }
        })
    })
  }
  leer2()
  function Leerlikes(activador){
    boton=activador
    liket=document.getElementById(boton).value 
    contador=Number(liket)+1
    firebase.database().ref(sala).child(boton).update({like:contador})
  }