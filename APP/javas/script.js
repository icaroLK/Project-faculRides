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
    var pageWidth = go_to * (100/qtd);
    progressFillx.style.width = pageWidth + '%';
}


var lig = false;
function onoffajuda(){
    var ajuda = document.getElementById('ajuda');
    if(lig==false){
        ajuda.style.display = "block";
        lig = true;
    }else if(lig==true){
        ajuda.style.display = 'none';
        lig = false;
    }


}