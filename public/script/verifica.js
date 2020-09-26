function vazio(){
var z = document.getElementById("pri").value
var y = document.getElementById("seg").value


if(z == "" || y == "")
    document.getElementById("demo").innerHTML = "Os espaços estão desocupados"    

}
function checkup(){
    var z = document.getElementById("pri").value
    var y = document.getElementById("seg").value
    if(z != "" && y != ""){
    document.getElementById("demo").innerHTML = ""
    email()
    nome()
    if(nome() && email()){
        return true 
    }
    }
}    
function email() {
    var y = document.getElementById("seg").value
usuario = y.substring(0, y.indexOf("@"))
dominio = y.substring(y.indexOf("@")+ 1, y.length)
if (usuario.length >=1 &&
dominio.length >=3 &&
usuario.search("@")==-1 &&
dominio.search("@")==-1 &&
usuario.search(" ")==-1 &&
dominio.search(" ")==-1 &&
dominio.search(".")!=-1 &&
dominio.indexOf(".") >=1 &&
dominio.lastIndexOf(".") < dominio.length - 1){
document.getElementById("demo").innerHTML= ""
return true}
else
document.getElementById("demo").innerHTML= "E-mail inválido"
}
function nome()
{ 
var z = document.getElementById("pri").value
var Nome = /^[A-Za-z]+$/
if(z.match(Nome))
{
document.getElementById("omed").innerHTML=""
return true
}
else
{
document.getElementById("omed").innerHTML="apenas letras"
}
}