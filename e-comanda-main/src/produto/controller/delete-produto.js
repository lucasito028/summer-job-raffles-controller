$(document).ready(function() {

    $('#table-produto').on('click', 'button.btn-delete', function(e){
        e.preventDefault()

        let ID = `ID=${$(this).attr('id')}`

        Swal.fire({
            title: 'e-Comanda',
            text: 'Deseja realmente excluir o registro?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then(result => {
            if(result.value){
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: ID,
                    url: 'src/produto/model/delete-produto.php',
                    success: function(dados){
                        Swal.fire({
                            title: 'e-Comanda',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })
                        $('#table-produto').DataTable().ajax.reload()
                    }
                })
            }
        })

    })
})