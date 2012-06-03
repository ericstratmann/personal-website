$ ->
    sub1 = (letter) ->
        String.fromCharCode letter.charCodeAt(0) - 1

    for obscure in $ ".obscure"
        # Shift letters down by 1, e.g. 'b' -> 'a'
        obscure.innerHTML = (sub1 letter for letter in obscure.innerHTML).join ''

        $(obscure).css "display", "inline"

    for hidden in $ ".hidden"
        $(hidden).css "display", "none"
