$(document).ready(function() {

    $('#table-cliente').on('click', 'button.btn-edit', function(e){
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
            url: 'src/cliente/model/view-cliente.php',
            success: function(dado){
                if(dado.tipo == 'success'){
                    $('.modal-body').load('src/cliente/view/form-cliente.html', function(){
                        $('#NOME').val(dado.dados.NOMECLIENTE)
                        $('#TELEFONE').val(dado.dados.TELEFONE)
                        $('#ID').val(dado.dados.ID)
                    })
                    $('.btn-save').show()
                    $('.btn-save').removeAttr('data-operation')
                    $('#modal-cliente').modal('show')
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