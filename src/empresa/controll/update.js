$(document).ready(function(){
    $('#table-emprese').on('click', 'button.btn-edit', function(){

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Updeitiar ai')

        let id = `ID=${$(this).attr('id')}`

        $.ajax({
            url:'src/empresa/model/update.php',
            data:id,
            dataType:'json',
            assync: true,
            type: 'POST',
            success:function(dados){

            }
        })

    })
})