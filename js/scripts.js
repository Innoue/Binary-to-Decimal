// function bintodec(number) {
//     number = document.getElementById("bin").value
//     document.getElementById("dec").value = binDec(number)
//     console.log(binDec(number))
// }
var tecla = ""
$(document).ready(function() {
    //Armazena em tecla a tecla pressionada
    $(document).keypress(function(e) {
        tecla = e.keyCode
        if (!(tecla == 48 || tecla == 49)) {
            e.preventDefault()
            $("#texto").text("Please, insert a valid Binary Number")
        }

    })

    $('.binary').mask('00000000', options);
    $('#bin').keypress(function() {


    })
});

var options = {
    onKeyPress: function(number) {
        $('#dec').val(binDec($('#bin').val()))
        $("#texto").text("")
    }
};




// Conversão Binário para Decimal
function binDec(number) {

    let length = number.length - 1
    let result = 0

    number.split('').forEach((item) => {
        result += item * Math.pow(2, length)
        length--
    })
    return parseInt(result)
}