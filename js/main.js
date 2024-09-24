$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000')

    $('#tipos .tab-content button').click(function(){
        const destino = $('#contato')

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})