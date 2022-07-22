$(document).ready(function(){
    $('.btn-new').click(function(e){

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adiciona algo ai')

        $('.modal-body').load('src/pedidos/view/form-pedidos.html', function(){

            $.ajax({
                type: 'POST',
                dataType: 'json',
                assync: true,
                url:'src/cliente/model/all.php',
                success:function(dados){
                    for(const result of dados){
                        $('#CLIENTE_ID').append(`<option value="${result.ID}">${result.NOME}</option>`)
                    }
                }
            })

            $.ajax({
                type: 'POST',
                dataType: 'json',
                assync: true,
                url:'src/produto/model/all.php',
                success:function(dados){
                    for(const result of dados){
                        $('#PRODUTO_ID').append(`<option value="${result.ID}">${result.NOME}</option>`)
                    }
                }
            })
        })

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-pedidos').modal('show')
        
    })
})