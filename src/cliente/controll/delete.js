$(document).ready(function(){
    
    $('#table-cliente').on('click', 'button.btn-delete', function(e){

        e.preventDefault()

        let id = `ID=${$(this).attr('id')}`

        Swal.fire({
            title: 'Sistema',
            text: 'Deseja excluir ai?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'OK',
            cancelButtonText: 'Não'
        }).then(result=> {
            if(result.value){
                $.ajax({
                    assync: true,
                    data: id,
                    dataType: 'json',
                    method:'POST',
                    url:'src/cliente/model/delete.php',
                    success:function(dados){
                        Swal.fire({
                            title: 'Sistema',
                            icon: dados.tipo,
                            text: dados.message,
                            confirmButtonText: 'OK'
                        })
                        $('#table-cliente').DataTable().ajax.reload()
                    }

                })
            }
        })
        })
    })
