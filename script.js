document.addEventListener('DOMContentLoaded', function(){
    const searchInput = document.getElementById('search');
    const cards = document.querySelectorAll('.card-movies');
    const cardContainer = document.querySelector('.card-container')

    
    function filter(searchQuery){
        const nothingfound = document.getElementById('nothing');
        let number = 0;
        cards.forEach(function(card){
            const name = card.querySelector('h3').textContent.toLowerCase();
            if (name.includes(searchQuery.toLowerCase())){
                nothingfound.style.display = 'none'
                card.style.display = 'flex'
                number++;
            }else{
                card.style.display = 'none'
            }
        });
        if(number == 0){
            nothingfound.style.display = 'block'
        }
            
        };
        searchInput.addEventListener('input', function(){
            const searchQuery = searchInput.value.trim();
            filter(searchQuery);
            if(searchInput.value.length === 0){
                cardContainer.style.display = 'none'
            }else if(searchInput.value.length > 0){
                cardContainer.style.display = 'grid'

            }
        })
})


