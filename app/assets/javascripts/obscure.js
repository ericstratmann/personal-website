$(function() {
    $(".obscure").each(function() {
        this.innerHTML = $.map(this.innerHTML, function(letter) {
            return String.fromCharCode(letter.charCodeAt(0) - 1) 
        }).join('');
    });
    $(".hidden").each(function() {
        $(this).css("display", "none"); 
    });
    $(".obscure").each(function() {
        $(this).css("display", "inline"); 
    });
});
