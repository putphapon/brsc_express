const bootstrap = require('bootstrap');

var myModal = new bootstrap.Modal(document.getElementById('myModal'))
myModal.handleUpdate()

ClassicEditor
    .create( document.querySelector( '#editor' ) )
    .then( editor => {
        console.log( editor );
    } )
    .catch( error => {
        console.error( error );
    } );