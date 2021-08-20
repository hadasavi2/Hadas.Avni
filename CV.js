



function changeHeadLine () {
    setTimeout(function(){
        document.title = 'Hadas Avni CV';
        let cvHeadline = document.getElementById("CV_headline");
        cvHeadline.innerHTML  = "Hadas Avni's- CV ( I changed it too cause I wasn't sure what you meant )"
    }, 500);

}

window.onload = changeHeadLine()