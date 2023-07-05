const cesar = {firstName:"Cesar", lastName:"Cedeño",age:"13"};
document.getElementById("nombre").innerHTML = cesar.firstName;
document.getElementById("apellido").innerHTML = cesar.lastName;
document.getElementById("edad").innerHTML = cesar.age;

const personas = ["Cesar", "Abuela", "Abuelo","Tia"];
let pers = personas.length;

let text = "<ul>";
    for (let i = 0; i < pers; i++){
    text += "<li>" + personas [i] + "</li>";
    }
    text += "</lu>";
document.getElementById("pers").innerHTML = text;

const number = ["0","1","2","3","4","5","6","7","8",]
let text2 ="<ul>"
number.forEach(numero)
text2 += "</ul>"
document.getElementById("numeros").innerHTML = text2;

function numero(value){
    text2 += "<li>" + value +"</li>"
}
