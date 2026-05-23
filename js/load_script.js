function LabSelector()
{
    const labNumber = new URLSearchParams(window.location.search).get('lab');
    const iframes = document.querySelectorAll('.page-demo');
    const links = document.querySelectorAll('.iframe-link');

    if (labNumber) {

        document.title = "Lab " + labNumber;

        iframes.forEach(function(iframe){
            iframe.src += labNumber[0] + '/lab' + labNumber + '.html';
        });

        links.forEach(function(link){
            link.href += labNumber[0] + '/lab' + labNumber + '.html';
        });

    } 
    else{
        document.title = "Lab not found";
    }
}

function BackButtonCreation(){
    const btn = document.createElement('a');

    btn.href ='index.html';
    btn.textContent = 'Back';
    btn.className = 'back-link';

    document.body.prepend(btn);
}