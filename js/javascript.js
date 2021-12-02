

function maior() {
    let select1 = parseInt(document.getElementById('numero1').value);
    let select2 = parseInt(document.getElementById('numero2').value);

    if (select1 > select2) 
        alert(select1 + " é maior que " + select2);
    else if(select2 > select1) 
        alert(select2 + " é maior que " + select1);
    else 
        alert(select1 + " é maior que " + select2);
    }


function valor() {
    let select = parseInt(document.getElementById('numero').value);

    if (select > 0)
        alert(select + " O valor é positivo");
    else if(select < 0)
        alert(select + " O valor é negativo");
    else 
        alert(select + " Não é positivo nem negativo");
    }


function resultado() {
    let select3 = document.getElementById('letra').value;

    if (select3 == "m")
        alert(select3 + " Sexo masculino");
    else if (select3 == "f")
        alert(select3 + " Sexo feminino");
    else 
        alert(select3 + " Sexo inválido");
    }


function Identificar() {
    var letra = document.getElementById("letra1").value;
    if(letra =='a' || letra =='e' || letra =='i' || letra =='o' || letra =='u')
    alert("vogal");
    else
    alert("consoante");
    }

function nota() {
    var nota1 = parseInt(document.getElementById('nota1').value);
    var nota2 = parseInt(document.getElementById('nota2').value);
    var nota3 = parseInt(document.getElementById('nota3').value);
    
    var media = (nota1 + nota2 + nota3)/3;
    if(media >=7)
    if(media == 10)
    alert("Você passou com distinção!");
    else
    alert("parabéns, você foi aprovado!" + media);
    else
    alert("reprovado.");
    }

function resultado6() {
    var num1 = parseFloat(document.getElementById('n1').value);
    var num2 = parseFloat(document.getElementById('n2').value);
    var num3 = parseFloat(document.getElementById('n3').value);

    if(num1 > num2 && num1 > num3)
    alert("Maior número é: " + num1);
    else if(num2 > num1 && num2 > num3)
    alert("Maior número é: " + num2);
    else if(num3 > num1 && num3 > num2)
    alert("Maior número é: " + num3);
    }

function turno() {
    var letraV = document.getElementById('Turno').value;
    if (letraV == 'm')
    alert("Bom dia, seu horário é matutino");
    else if (letraV =='v')
    alert('Bom dia, seu horário é vespertino');
    else if (letraV == 'n')
    alert('Bom dia, seu horário é noturno');
}

function preço() {
    var p1 = parseInt(document.getElementById('preco1').value);
    var p2 = parseInt(document.getElementById('preco2').value);
    var p3 = parseInt(document.getElementById('preco3').value);

    if (p1 < p2 && p1 < p3)
    alert("Você deve comprar o produto1");
    else if (p2 < p1 && p2 < p3)
    alert("Você deve comprar o produto2");
    else if(p3 < p1 && p3 < p2)
    alert("Você deve comprar o produto3");
}

function Media() {
    var nota01 = parseFloat(document.getElementById('nota01').value);
    var nota02 = parseFloat(document.getElementById('nota02').value);
    var media = (nota01 + nota02)/2;
    console.log(media)
    if (media == 0 || media < 4)
    alert("Não aprovado, conceito E");
    else if (media >= 4 || media < 6)
    alert("Não aprovado, conceito D");
    else if (media >= 6 || media < 7.4)
    alert("Aprovado, conceito C");
    else if (media >= 7.5 || media < 9)
    alert("Aprovado conceito B");
    else if (media > 9 || media <= 10)
    alert ("media incorreta");
}

    


