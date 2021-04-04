function drawCard(){
    const card_num   = document.getElementById('card_num').value
    const card_color = document.getElementById('card_color').value
    const card_bg    = document.getElementById('card_bg').value
        console.log(card_num)
        console.log(card_color)
        console.log(card_bg)
    const card = document.getElementById(`card_${card_num}`);
        card.setAttribute('style',`color: ${card_color}; background: ${card_bg}`)
}