
var lig = false;
function onoffajuda(){
    var ajuda = document.getElementById('ajuda');
    var reenv = document.getElementsByClassName('reenv');
    if(lig==false){
        ajuda.style.display = "block";
        lig = true;
    }else if(lig==true){
        ajuda.style.display = 'none';
        lig = false;
    }


}