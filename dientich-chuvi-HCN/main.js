/*
input:
-cdai:
-crong:

progress:
chuvi: (d + r) *2
dien tich: d * r

output:
- chu vi
-dien tich:

**/

document.getElementById('btnChuvi').onclick = function(){
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuDaiNum = Number.parseInt(chieuDai);
  
    var chieuRong = document.getElementById("chieuRong").value;
    var chieuRongNum = Number.parseInt(chieuRong);

    console.log("🫀 ~ document.getElementById ~ chieuRongNum:", chieuRongNum)

    document.getElementById("chuVispan").innerHTML = (chieuDaiNum + chieuRongNum) *2;
}

document.getElementById("btnDientich").onclick = function () {
  var chieuDaii = document.getElementById("chieuDai").value;
  var chieuRongg = document.getElementById("chieuRong").value;

  document.getElementById("dientich-span").innerHTML =
    (chieuDaii* chieuRongg );
};
