/* 
input:
-input nhap:
progress ;
- input nhap * 23500

output:
=tien quy doi
*/

document.getElementById('btn-usd').onclick = function(){
    var usd = document.getElementById('money').value;

    document.getElementById("result-money").innerHTML = (usd * 23500).toLocaleString() + "VNĐ"
}