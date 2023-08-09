/*
input: 
-so gio lam
-so tien mot ngay
/progress:
-var giolam = document.getid .value
tong= giolam * 100.000
/output:
-tong tien 1 ngay

 */

document.getElementById('btnCal').onclick = function(){
    var workingHour = document.getElementById('workingHour').value;
    
    document.getElementById("result").innerHTML = (workingHour * 100000).toLocaleString() +" VNĐ";
}