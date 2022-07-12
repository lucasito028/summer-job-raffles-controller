$(document).ready(function(){
    $('.btn-new').click(function(e){

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adiciona algo ai')

        $('.modal-body').load('src/produto/view/form-produto.html')

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-produto').modal('show')
        
    })
})