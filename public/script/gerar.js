
function gerador(){
    var num = [8]
    var i = 1
    var numero
    while (i < 9){
        num[i] = Math.floor(Math.random() * (10 - 0)) + 0
        i++
    }
    
    numeroR = num[1]+""+num[2]+""+num[3]+"."+num[4]+""+num[5]+"."+num[6]+""+num[7]+""+num[8]
    document.getElementById("demo").innerHTML = numero
    
    }
