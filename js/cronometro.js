function LimpiaReloj(){
    //resetar cronometro
    clearInterval(cronometro);
}

function IniciarReloj(){
    //inicia el reloj
    s=document.getElementById("segundos");
    m=document.getElementById("minutos");
    segundos=0;
    cronometro=setInterval(function(){
        segundos++;//incremento segs
        segs=segundos;
        mins=0;

        while(segs>=60){
            mins++;
            segs-=60;
        }

        //aqui se imprime los mins y segs
        if(mins<10){m.innerHTML="0"+mins;}
            else{m.innerHTML=mins;}//fin mins

        if(segs<10){s.innerHTML="0"+segs;}
            else{s.innerHTML=segs;}//fin segs

        Total_segs=segs;
        total_mins=mins;
    },1000);

}//iniciarreloj_fin