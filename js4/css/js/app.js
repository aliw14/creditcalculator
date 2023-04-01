function faiz() {
    var faizmiqdari = Number(document.getElementById("inp3").value / 100)
    var kreditmeblegi = Number(document.getElementById("inp1").value)
    var muddeti = Number(document.getElementById("inp2").value)

    var mebleginfaizi = kreditmeblegi * faizmiqdari
    var umumimebleg = kreditmeblegi + mebleginfaizi
    var ayliqodenis = umumimebleg / muddeti

    document.getElementById("result1").innerHTML = "Aylıq ödəniş:" + ayliqodenis
    document.getElementById("result2").innerHTML = "Ümumi məbləğ:" + umumimebleg
}








