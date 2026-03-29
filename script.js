const imgElement = document.getElementById('cat-image');
const loadingMessage = document.getElementById('loading-message');
const errorMessage = document.getElementById('error-message');


async function buscarGatinho() {

    imgElement.style.display = 'none';
    errorMessage.style.display = 'none';
    loadingMessage.style.display = 'block';

    try {

        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        
        if (!response.ok) {
            throw new Error('Erro na comunicação com a API');
        }

        const data = await response.json();
        
        const imageUrl = data[0].url;

        imgElement.src = imageUrl;

        imgElement.onload = () => {
            loadingMessage.style.display = 'none';
            imgElement.style.display = 'block';
        };

    } catch (error) {
        console.error("Detalhes do erro:", error);
        loadingMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
}

window.addEventListener('load', buscarGatinho);