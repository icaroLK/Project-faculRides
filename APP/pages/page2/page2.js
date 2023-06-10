function progressBar(go_to, qtd){
    var progressFill = document.getElementById("progressFill");
    var pageWidth = go_to * (100/qtd);
    progressFill.style.width = pageWidth + '%';
}