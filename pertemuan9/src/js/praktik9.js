// soal 1
function hitungLingkaran(){
    var radius = document.getElementById("radius").ariaValueMax;
    if (radius > 0)
    var luas = 3.14 * radius * radius; 
    var keliling = 2 * 3.14 * radius;
    document.getElementById("lingkaranoutput").
    innerText = "Luas : " + luas + "cm², keliling : "
    + keliling + "cm²" ;
} else{
        documen.getElementById("lingkaranoutput")
        innerText = "Masukan jari-jari yang valid";

    }


    // soal 2 
    function hitungDuit(){
        var rupiah = document.getElementById("rupiah").value;
        if (rupiah > 0){
            var kurs = 15870;
            var dolar = rupiah / kurs; 
            document.getElementById("hasilDuit").innerText = 
            "nilai : $ " + dollar.tofixed(2);
        } else {
            document.getElementById("hasilDuit").innerText = 
            "Masukan Nilai yang Valid !!"
        }
        }

