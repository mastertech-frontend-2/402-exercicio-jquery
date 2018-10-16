const exibirAventura = () => {
    if($('#nav-aventura').hasClass('ativa')){
        exibirTodas();
        return;
    }

    $('nav span').removeClass('ativa');
    $('#nav-aventura').addClass('ativa');
    
    $('div').hide();
    $('.aventura').show();
}

const exibirComedia = () => {
    if($('#nav-comedia').hasClass('ativa')){
        exibirTodas();
        return;
    }

    $('nav span').removeClass('ativa');
    $('#nav-comedia').addClass('ativa');
    
    $('div').hide();
    $('.comedia').show();
}

const exibirDrama = () => {
    if($('#nav-drama').hasClass('ativa')){
        exibirTodas();
        return;
    }

    $('nav span').removeClass('ativa');
    $('#nav-drama').addClass('ativa');
    
    $('div').hide();
    $('.drama').show();
}

const exibirTodas = () => {
    $('nav span').removeClass('ativa');
    $('div').show();
}

$('#nav-aventura').click(exibirAventura);
$('#nav-comedia').click(exibirComedia);
$('#nav-drama').click(exibirDrama);