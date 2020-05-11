//intercettiamo l'input dove verra scritto il messaggio
$('#insert-messaggi').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        // leggo il valore destritto inserito nel input
        var messaggio_utente = $('#insert-messaggi').val();
        if (messaggio_utente != ('')) {
            var ilMioNuovoMessaggio = $('.template .messaggio-inviato').clone();
            ilMioNuovoMessaggio.text(messaggio_utente);
            $('.container_chat').append(ilMioNuovoMessaggio);
            // input reset
            $('#insert-messaggi').val('');
            $(this).attr('placeholder', 'Scrivi un messaggio');
        }
    }
});
