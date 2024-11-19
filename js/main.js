function calcularResultado(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const num1 = parseFloat(document.getElementById("num1").value) || 0; //nota firma
    const num2 = parseFloat(document.getElementById("num2").value) || 0; //nota final

    const resultado = (num1 * 0.4) + (num2 * 0.6); 

    if(num2>100 || num1>100){
        alert('No se conseguir una nota promediada por encima de 100 en la firma o en el examen final')
    }
    else if (num1<50){
        alert('No se puede habiitar una final con firma menor a 50')
    }
    else if (num2<50){
        document.getElementById("resultadoCal").textContent = `Nota final: 1`;
        document.getElementById("emojiCal").textContent = ':(';
    }
    else if (resultado >= 90.50) {
        document.getElementById("resultadoCal").textContent = `Nota final: 5`;
        document.getElementById("emojiCal").textContent = ';)';
    } else if (resultado >= 80.50) {
        document.getElementById("resultadoCal").textContent = `Nota final: 4`;
        document.getElementById("emojiCal").textContent = ':)';
    } else if (resultado >= 70.50) {
        document.getElementById("resultadoCal").textContent = `Nota final: 3`;
        document.getElementById("emojiCal").textContent = ':)';
    } else if (resultado >= 59.50) {
        document.getElementById("resultadoCal").textContent = `Nota final: 2`;
        document.getElementById("emojiCal").textContent = ':/';
    } else {
        document.getElementById("resultadoCal").textContent = `Nota final: 1`;
        document.getElementById("emojiCal").textContent = ':(';
    }
}

// Función para limpiar en calculadora
function limpiarFormularioCal() {
    document.getElementById("calculadoraForm").reset(); 
    document.getElementById('resultadoCal').textContent ='Calcular nota final'; 
    document.getElementById('emojiCal').textContent ='EXITOS!!'; 
}
// funcion que calcula la nota deseada
function calcularNotaDeseada(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    document.getElementById("notita").textContent = '';
    const firma = parseFloat(document.getElementById("firma").value) || 0;
    const sacar2= (60-(0.4*firma))/0.6;
    const sacar3= (71-(0.4*firma))/0.6;
    const sacar4= (81-(0.4*firma))/0.6;
    const sacar5= (91-(0.4*firma))/0.6;
    document.getElementById("nota2").textContent = `Para obtener un 2, en el examen final sacar: ${sacar2.toFixed(2)}`;
    document.getElementById("nota3").textContent = `Para obtener un 3, en el examen final sacar: ${sacar3.toFixed(2)}`;
    document.getElementById("nota4").textContent = `Para obtener un 4, en el examen final sacar: ${sacar4.toFixed(2)}`;
    document.getElementById("nota5").textContent = `Para obtener un 5, en el examen final sacar: ${sacar5.toFixed(2)}`;
}
//funcion para limpiar en notadeseada
function limpiarFormulario() {
    document.getElementById("calculadoraForm").reset(); 
    document.getElementById('nota2').textContent='';
    document.getElementById('nota3').textContent='';
    document.getElementById('nota4').textContent='';
    document.getElementById('nota5').textContent='';
    document.getElementById('notita').textContent='Ingrese la calificacion obtenida en su firma y calcule cuanto necesita para cada nota';
}