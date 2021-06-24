function toggle(){
    var header = document.getElementById('header')
    header.classList.toggle('active')
}

window.addEventListener('scroll' , reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++ ){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active')
        }
    }
}

window.onload=function(){
    setTimeout(media, 1000);
    setTimeout(logo, 1000);
    setTimeout(content, 1000);
}

function media(){
    var y=document.querySelectorAll('#header ul li a');
    var i;
    for(i=0; i<y.length; i++){
        y[i].style.opacity='1';
        y[i].style.transform='translate(0)';
    }
}

function logo(){
    var h=document.querySelector('#logo');
    h.style.opacity='1';
    h.style.transform='translate(0)';
}

function content(){
    var he=document.querySelector('#home h2');
    he.style.opacity='1';
        he.style.transform='translate(0)';
    var hs=document.querySelector('#home p');
    hs.style.opacity='1';
        hs.style.transform='translate(0)';
    var hh=document.querySelector('#home a');
    hh.style.opacity='1';
        hh.style.transform='translate(0)';
}