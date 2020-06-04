// function tambah(){
//     var angka1 = parseFloat(document.dari.id.value);
//     var angka2 = parseFloat(document.dari.id.value);
//     var jumlah = angka1 + angka2;
//     console.log(jumlah)
//     }
// function kurang(){
//     var angka3 = parseFloat(document.dari.id.value);
//     var angka4 = parseFloat(document.dari.id.value);
//     var kurang =angka3+angka4;
//     console.log(kurang)
// }
//  kalkulator = () =>  {
//     //untuk isi label1 (untuk angka pertama yang diinput)
//     var label1 = parseFloat(document.getElementById("label1").value);
//     var label2 = parseFloat(document.getElementById("label2").value);
//     //operator+hasil+total
//     var operator = document.getElementById("operator").value;
//     var hasil = document.getElementById("hasil");
//     var total = hasil;
//     if (operator == "tambah") {
//         total = label1 + label2;
//     } else if (operator == "kurang") {
//         total = label1 - label2;
//     } else if (operator == "kali") {
//         total = label1 * label2;
//     } else {
//         total = label1 / label2;
//     }
//     hasil.value = total;
// }
function kalkulator() {
    //untuk isi label1 (untuk angka pertama yang diinput)
    var label1 = parseFloat(document.getElementById("label1").value);
    var label2 = parseFloat(document.getElementById("label2").value);
    //operator+hasil+total
    var operator = document.getElementById("operator").value;
    var hasil = document.getElementById("hasil");
    var total = hasil;
    if (operator == "tambah") {
        total = label1 + label2;
    } else if (operator == "kurang") {
        total = label1 - label2;
    } else if (operator == "kali") {
        total = label1 * label2;
    } else {
        total = label1 / label2;
    }
    hasil.value = total;
}