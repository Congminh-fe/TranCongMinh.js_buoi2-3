/*
input
-gia tri nhap= input value
-so hang chuc nghin:
-so hang nghin:
-so hang tram:
-so hang chuc:
-so don vi:

tong: 5 cai cong lai
out put:
-tong 5 cai: 
*/

document.getElementById("btn-tong").onclick = function () {
  var so = document.getElementById("number").value;
  var hangChucNghin = Math.floor(so / 10000);
  var hangNghin = Math.floor(so% 10000 / 1000);
  var hangTram = Math.floor(so% 10000 % 1000 /100);
  var hangChuc = Math.floor(((so % 10000) % 1000) % 100 /10);
  var hangDonVi = ((so % 10000) % 1000) % 100 %10;
  var tongTb5So = (hangChucNghin + hangNghin+ hangTram + hangChuc +hangDonVi)/5;

  document.getElementById('resultt').innerHTML = tongTb5So;
};