function appendToDisplay(value) { //Adiciona o valor ao campo de entrada. //
    document.getElementById('display').value += value; //Limpa o campo//
}

function clearDisplay() { //Limpa //
    document.getElementById('display').value = '';
}

function backspace() { //Apaga tudo//
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() { //Avalia o que eu escrevi//
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error'; //Aparece um error//
    }
}
