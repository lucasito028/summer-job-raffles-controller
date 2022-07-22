$(document).ready(function(){
    $('#table-pedidos').on('click', 'button.btn-edit',function(e){
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Ben vindo ao vizualizar pessoas ai')

        let id = `CLIENTE_ID=${$(this).attr('data-cliente')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: id,
            url:'src/pedidos/model/view.php',
            success:function(dados){
                if(dados.tipo == 'success'){
                $('.modal-body').load('src/pedidos/view/form-pedidos.html', function (){

                    $('#NOME').val(dados.dados.NOME)
    
                    $('#VALOR').val(dados.dados.VALOR)

                    $('#ID').val(dados.dados.ID)


                })
                

                $('.btn-save').show()
                $('.btn-save').removeAttr('data-operation')
                $('#modal-pedidos').modal('show')
            }else{
                Swal.fire({
                    title: 'Sistema',
                    text: dados.message,
                    icon:dados.tipo,
                    confirmButtonText: 'OK'
                })
            }
            }
        })
    })
})