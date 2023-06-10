function GoToPage(go_to){

    var pages = document.getElementsByClassName('page');
    for(var i=0; i < pages.length; i++){
        pages[i].classList.remove('active');
    }

    var selectedPage = document.getElementById('page'+go_to);
    selectedPage.classList.add('active');

}


function progressBar(go_to, qtd){
    var progressFillx = document.getElementById("progressFill"+(go_to));
    if(go_to==1){
        var pageWidth = 1;
    progressFillx.style.width = pageWidth + '%';
    }else{

        var pageWidth = (go_to-1) * (100/qtd);
        progressFillx.style.width = pageWidth + '%';
    }
}


var lig = false;
function onoffajuda(){
    var ajuda = document.getElementById('ajuda');
    var reenv = document.getElementById('reenv');
    if(lig==false){
        ajuda.style.display = "block";
        reenv.style.marginTop = 'calc(100vh - 490px)';
        lig = true;
    }else if(lig==true){
        ajuda.style.display = 'none';
        reenv.style.marginTop = 'calc(100vh - 400px)';
        lig = false;
    }


}


function jumpToNextInput(atual) {
    var nextInput = document.getElementById('icod' + (atual + 1));
    if (nextInput) {
      nextInput.focus();
    }
  }