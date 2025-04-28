$(document).on('click','.send', function(){
    /* Form Input */
    var input_name          = $("#name").val(),
        input_phone         = $("#phone").val(),
        input_product       = $("#product").val(),
        input_jumlah_product= $("#jumlah_product").val(),
        input_description   = $("#description").val();
 
    /* Whatsapp Setting */
    var walink      = 'https://web.whatsapp.com/send',
        phone       = '6289652537359',
        text        = 'Hello Aku ingin membeli',
        text_yes    = 'Your order was successfully sent.',
        text_no     = 'Fill this form to order.';
        response    = 'Segera Di Proses yaa!!'
 
    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var walink = 'whatsapp://send';
    }
 
    if(input_name != "" && input_phone != "" && input_product != ""){
        /* Whatsapp URL */
        var checkout_whatsapp = walink + '?phone=' + phone + '&text=' + text + '%0A%0A' + 
            '*Nama* : ' + input_name + '%0A' +
            '*No. Whatsapp* : ' + input_phone + '%0A' +
            '*Produk* : ' + input_product + '%0A' +
            '*Jumlah_product* : ' + input_jumlah_product + '%0A' +
            '*Catatan Tambahan* : ' + input_description + '%0A'+
            response + '%0A%0A';
 
        /* Whatsapp Window Open */
        window.open(checkout_whatsapp,'_blank');
        document.getElementById("text-info").innerHTML = '<div class="alert alert-success">'+text_yes+'</div>';
    } else {
        document.getElementById("text-info").innerHTML = '<div class="alert alert-danger">'+text_no+'</div>';
    }
});