var quebrada = false;
    function mudaLampada(tipo){
        
        if (!quebrada){
            document.getElementById("luz").src = "assets/img/" + tipo + ".jpg";
            if (tipo == 'lampada-quebrada'){
                quebrada = true;
            }
        }
        
    }