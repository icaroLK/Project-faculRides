function GoToPage(go_to){

    var pages = document.getElementsByClassName('page');
    for(var i=0; i < pages.length; i++){
        pages[i].classList.remove('active');
    }

    var selectedPage = document.getElementById('page'+go_to);
    selectedPage.classList.add('active');

}





function progressBar(barra ,nivelbarra, finalbarra){
    var progressFillx = document.getElementById("progressFill"+(barra));
    if(nivelbarra==1){
        var pageWidth = 1;
    progressFillx.style.width = pageWidth + '%';
    }else{

        var pageWidth = (nivelbarra-1) * (100/(finalbarra-1));
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