$(document).ready(function() {

    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar um nova pedido')

        $('.modal-body').load('src/pedido/view/form-pedido.html', function() {

            $.ajax({
                dataType: 'json',
                type: 'POST',
                assync: true,
                url: 'src/cliente/model/all-cliente.php',
                success: function(dados){
                    for(const result of dados){
                        $('#CLIENTE_ID').append(`<option value="${result.ID}">${result.NOMECLIENTE}</option>`)
                    }
                }
            })
            
            $.ajax({
                dataType: 'json',
                type: 'POST',
                assync: true,
                url: 'src/produto/model/all-produto.php',
                success: function(dados){
                    for(const result of dados){
                        $('#PRODUTO_ID').append(`<option value="${result.ID}">${result.NOME}</option>`)
                    }
                }
            })

        })

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-pedido').modal('show')
    })

})