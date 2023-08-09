document.getElementById('btn-tong').onclick = function(){
    var so = document.getElementById('number').value;
    var hangChuc = Math.floor(so / 10);

    var hangDonVi = so % 10;
    document.getElementById('resultt').innerHTML = hangChuc + hangDonVi;
    
}