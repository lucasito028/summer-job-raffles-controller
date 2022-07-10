$(document).ready(function() {

    $('#table-empresa').on('click', 'button.btn-edit', function(e){
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
            url: 'src/empresa/model/view-empresa.php',
            success: function(dado){
                if(dado.tipo == 'success'){
                    $('.modal-body').load('src/empresa/view/form-empresa.html', function(){
                        $('#NOME').val(dado.dados.NOME)
                        $('#LOGIN').val(dado.dados.LOGIN)
                        $('#SENHA').val(dado.dados.SENHA)
                        $('#ID').val(dado.dados.ID)
                    })
                    $('.btn-save').show()
                    $('.btn-save').removeAttr('data-operation')
                    $('#modal-empresa').modal('show')
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