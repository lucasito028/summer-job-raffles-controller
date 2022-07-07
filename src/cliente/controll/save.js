$(document).ready(function(){

    $('.btn-save').click(function(e){
        e.preventDefault()

        var dados = $('#form-cliente').serialize()
        
        dados += `&operacao=${$('.btn-save').attr('data-operation')}`


        $.ajax({
            type: 'POST',
            dataType:'JSON',
            assync: true,
            url: '../model/save-cliente.php',
            data: dados,
            success:function(dados){
            }
        })
    })
    
})