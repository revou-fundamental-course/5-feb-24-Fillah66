function celciusToFahrenheit () {
    var tempt = document.getElementById("in").value;
    if (!tempt|| isNaN(tempt)) {
        alert("Input suhu dengan nilai angka! Contoh : 25 atau 3.14");
        return;
      }
    
    var fahrenheit = (tempt * 9/5) + 32;
    fahrenheit = fahrenheit.toFixed(2);
    console.log(fahrenheit)
    document.getElementById("out").innerHTML = fahrenheit + "°F"
    document.getElementById("cara1").innerHTML = "diketahui :"
    document.getElementById("cara2").innerHTML = "°C=" + tempt
    document.getElementById("cara3").innerHTML = "Rumus konversi °C ke °F adalah : °F=(°C x 9/5) + 32"
    document.getElementById("cara4").innerHTML = "Maka, perhitungannya adalah sebagai berikut :"
    document.getElementById("cara5").innerHTML = "(" + tempt + "°C" + "* 9/5) + 32 =" + fahrenheit + "°F"
    document.getElementById("cara6").innerHTML = "Jadi," + tempt + "°C =" + fahrenheit + "°F" 
}

function fahrenheitToCelcius () {
    var tempt = document.getElementById("in").value;
    if (!tempt|| isNaN(tempt)) {
        alert("Input suhu dengan nilai angka! Contoh : 25 atau 3.14");
        return;
      }
    
    var celcius = (tempt - 32) * 5/9;
    celcius = celcius.toFixed(2);
    console.log(celcius)
    document.getElementById("out").innerHTML = celcius + "°C"
    document.getElementById("cara1").innerHTML = "diketahui :"
    document.getElementById("cara2").innerHTML = "°F=" + tempt
    document.getElementById("cara3").innerHTML = "Rumus konversi °F ke °C adalah : °C=(°F-32) x 5/9"
    document.getElementById("cara4").innerHTML = "Maka, perhitungannya adalah sebagai berikut :"
    document.getElementById("cara5").innerHTML = "(" + tempt + "°F" + "- 32) x 5/9 =" + celcius + "°C"
    document.getElementById("cara6").innerHTML = "Jadi," + tempt + "°F =" + celcius + "°C" 
}

function reset () {
    document.getElementById("in").value = "";
    document.getElementById("out").innerHTML = "";
    document.getElementById("cara1").innerHTML = "";
    document.getElementById("cara2").innerHTML = "";
    document.getElementById("cara3").innerHTML = "";
    document.getElementById("cara4").innerHTML = "";
    document.getElementById("cara5").innerHTML = "";
    document.getElementById("cara6").innerHTML = "";
}