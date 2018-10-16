const exibirAventura = () => {
    $('div').hide();
    $('.aventura').show();
}

const exibirComedia = () => {
    $('div').hide();
    $('.comedia').show();
}

const exibirDrama = () => {
    $('div').hide();
    $('.drama').show();
}

$('#nav-aventura').click(exibirAventura);
$('#nav-comedia').click(exibirComedia);
$('#nav-drama').click(exibirDrama);