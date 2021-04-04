function drawCard(){
    const card_num = document.getElementById('card_num').value;
    const card_color = document.getElementById('card_color').value;
    const card_bg = document.getElementById('card_bg').value;
    const card_opcacity = document.getElementById('card_opcacity').value;
    const card_animation = document.getElementById('card_animation').value;
    
    const card = document.getElementById(`card_${card_num}`);
    
    card.style.color = card_color;
    card.style.background = card_bg;
    card.style.opacity = card_opcacity;
    card.style.animation = `${card_animation} 2s ease infinite`;
    }