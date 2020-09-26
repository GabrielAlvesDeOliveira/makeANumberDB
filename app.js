const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const pagamento = require("./public/script/salvar")

app.use(express.static('public'))
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
app.get('/', function(req, res){
    res.render('');
});

app.get('/Number', function(req, res){
    res.render('Number');
});

function main(){
    vazio()
    checkup()    
    if(checkup()){
        gerador()
        gravar()
    }
}

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

function gerador(){
    var num = [8]
    var i = 1
    var numeroR
    while (i < 9){
        num[i] = Math.floor(Math.random() * (10 - 0)) + 0
        i++
    }
    
    numeroR = num[1]+""+num[2]+""+num[3]+"."+num[4]+""+num[5]+"."+num[6]+""+num[7]+""+num[8]
    return numeroR
}


app.post('/salva', async function(req, res){
    
    try { 
        await pagamento.create({
            nome: req.body.nome,
            email: req.body.email,
            numero: gerador()
        });
        return res.redirect('/Number');
            
    } catch (error) {
        return res.send({error: error.message});
    }
     
})


app.listen(8080);