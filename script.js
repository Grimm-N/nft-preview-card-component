document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            createNFTCard(data); 
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

function createNFTCard(data) {
    const card = document.createElement('div');
    card.className = 'nft__card'; 

    const imageContainer = document.createElement('div');
    imageContainer.className = 'nft__card-image-container';

    const image = document.createElement('img');
    image.src = 'images/image-equilibrium.jpg'; 
    image.alt = 'A serene artwork representing balance and tranquility in the Equilibrium collection, featuring a glowing cube standing on one corner against a blue background.'; 
    image.className = 'nft__card-image'; 
    imageContainer.appendChild(image);

    const overlay = document.createElement('div');
    overlay.className = 'nft__card-overlay';
    
    const eyeIcon = document.createElement('img');
    eyeIcon.src = 'images/icon-view.svg';
    eyeIcon.alt = 'Eye icon';
    eyeIcon.className = 'nft__card-eye-icon';
    overlay.appendChild(eyeIcon);
    
    imageContainer.appendChild(overlay);
    card.appendChild(imageContainer);

    imageContainer.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('modalImage');
        modal.style.display = "flex"; 
        modalImage.src = image.src; 
    });

    const titleLink = document.createElement('a');
    titleLink.href = data.link; 
    titleLink.textContent = data.title; 
    titleLink.className = 'nft__card-title'; 
    card.appendChild(titleLink);

    const description = document.createElement('p');
    description.textContent = data.description;
    description.className = 'nft__card-description'; 
    card.appendChild(description);

    const detailsContainer = document.createElement('div');
    detailsContainer.className = 'nft__card-details-container';

    const priceContainer = document.createElement('div');
    priceContainer.className = 'nft__card-price-container';

    const priceImg = document.createElement('img');
    priceImg.src = 'images/icon-ethereum.svg'; 
    priceImg.alt = 'A blue diamond-shaped icon, symbolizing elegance and clarity'; 

    const price = document.createElement('p');
    price.textContent = data.price;

    priceContainer.appendChild(priceImg);
    priceContainer.appendChild(price);

    const timeLeftContainer = document.createElement('div');
    timeLeftContainer.className = 'nft__card-time-container';

    const timeImg = document.createElement('img');
    timeImg.src = 'images/icon-clock.svg';
    timeImg.alt = 'Clock icon'; 

    const timeLeft = document.createElement('p');
    timeLeft.textContent = data.time_left;

    timeLeftContainer.appendChild(timeImg);
    timeLeftContainer.appendChild(timeLeft);

    detailsContainer.appendChild(priceContainer);
    detailsContainer.appendChild(timeLeftContainer);

    card.appendChild(detailsContainer);

    const creatorContainer = document.createElement('div');
    creatorContainer.className = 'nft__card-creator-container';

    const creatorImg = document.createElement('img');
    creatorImg.src = 'images/image-avatar.png';
    creatorImg.alt = 'A portrait of a young brunette man, representing the creator of the artwork'; 

    const creatorText = document.createElement('p');
    creatorText.textContent = 'Creation of ';
    
    const creatorLink = document.createElement('a');
    creatorLink.href = data.creatorLink; 
    creatorLink.textContent = 'Jules Wyvern'; 
    creatorText.appendChild(creatorLink);

    creatorContainer.appendChild(creatorImg);
    creatorContainer.appendChild(creatorText);
    card.appendChild(creatorContainer);

    const container = document.getElementById('nft');
    container.appendChild(card);
}

// modal
document.getElementById('closeModal').onclick = function() {
    document.getElementById('modal').style.display = "none"; 
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none"; 
    }
}

