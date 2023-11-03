$(document).ready(function () {
    $('#informar-cadastro').on('submit', function (e) {
        e.preventDefault();
        const cadastrar = $('#cadastro').val().trim();
        if (cadastrar) {
            $('#tarefas').append(`<li>${cadastrar}</li>`);
            $('#cadastro').val('');
        }
    });

    $('#tarefas').on('click', 'li', function () {
        $(this).toggleClass('done');
    });
});