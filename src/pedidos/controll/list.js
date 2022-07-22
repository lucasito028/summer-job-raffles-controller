$(document).ready(function(){

    $('#table-pedidos').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "src/pedidos/model/list.php",
            "type": "POST"
        },
        "columns": [{
            "data": 'DATA',
            "className": 'text-center'
        },
        {
            "data": 'CLIENTE',
            "className": 'text-center'
        },
        {
            "data": 'PRODUTO',
            "className": 'text-center'
        },
        {
            "data": 'QTDE',
            "className": 'text-center'
        },
        {
            "data": 'DATA_ORIGINAL',
            "orderable": false,
            "searchable": false,
            "className": 'text-center',
            "render": function(data, type, row, meta){
                return `
                <button data-time="${data}" class="btn btn-danger btn-delete"><i class="fa-solid fa-trash"></i></button>`
            }
        }]
    })
})