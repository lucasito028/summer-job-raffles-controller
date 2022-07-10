$(document).ready(function() {

    $('#table-produto').on('click', 'button.btn-edit', function(e){
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Edição de registros')

        let ID = `ID=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: ID,
            url: 'src/produto/model/view-produto.php',
            success: function(dado){
                if(dado.tipo == 'success'){
                    $('.modal-body').load('src/produto/view/form-produto.html', function(){
                        $('#NOME').val(dado.dados.NOME)
                        $('#VALOR').val(dado.dados.VALOR)
                        $('#ID').val(dado.dados.ID)
                    })
                    $('.btn-save').show()
                    $('.btn-save').removeAttr('data-operation')
                    $('#modal-produto').modal('show')
                }else{
                    Swal.fire({
                        title: 'e-Comanda',
                        text: dados.mensagem,
                        icon: dados.tipo,
                        confirmButtonText: 'OK'
                    })
                }
            }
        })
    })

})