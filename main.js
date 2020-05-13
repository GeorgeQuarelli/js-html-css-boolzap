//intercettiamo l'input dove verra scritto il messaggio
$('#insert-messaggi').keypress(function(event){
    var keycode = (event.which);
    if(keycode == '13'){
        // leggo il valore destritto inserito nel input
        var messaggio_utente = $('#insert-messaggi').val();
        if (messaggio_utente != ('')) {
            var ilMioNuovoMessaggio = $('.template .messaggio-inviato').clone();
            ilMioNuovoMessaggio.text(messaggio_utente);
            $('.container_chat').append(ilMioNuovoMessaggio);
            // input reset
            $('#insert-messaggi').val('');
            // rimetto il messaggio di default
            $(this).attr('placeholder', 'Scrivi un messaggio');
            //inseriamo la risposta del computer automatica
            setTimeout(function(){
            var pcmessaggio = $('.container_chat').append('<li class="messaggio-ricevuto">' + 'ok' + '</li>'); }, 100);
        }
    }
});

//scrivendo qualcosa nell’input a sinistra
$('.input-container').keyup(function(event){
        var testo_utente = $('.input-container').val().trim().toLowerCase();
        console.log('testo utente:' + testo_utente);
        if (testo_utente != '') {
            $('.chat_mex').each(function() {
            // facciamo in modo che il testo sia considerato tutto minuscolo
            var testo_h4 = $(this).find('h4').text().trim().toLowerCase();
            // // stampo il testo di ogni h4
            // console.log('testo h4:' + testo_h4);
            // verifico se il testo inserito è uguale a quello inserito
            if (testo_h4.includes(testo_utente)) {
                // se è uguale mostro la chat dell'utente corretto
                $(this).show();
            }
            else {
                // se non corrisponde il contatto con il nome inserito viene nascosto
                $(this).hide();
            }
            })
        }
        else {
            $('.chat_mex').show();
        }
});

// se clicco sull messaggio che ho inviato mi apre il suo dropdown
$('.container_chat').on('click','.messaggio-inviato',function() {
    //alert('click');
    // do la classe active al dropdown ,in modo da vederlo
    $('.message-pannello').find('.message-pannello').toggleClass('.active');
});
