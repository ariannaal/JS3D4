document.addEventListener('DOMContentLoaded', function () {
            const params = new URLSearchParams(window.location.search);
            const imageId = params.get('id');
            const apiUrl = `https://api.pexels.com/v1/photos/${imageId}`;

            fetch(apiUrl, {
                headers: {
                    Authorization: "JASiAr9DVpAQx9PptTIbbwcqu0wbT4DnC7kCwjGRmcmZbboGLWsqKRMA"
                }
            })
            .then(response => response.json())
            .then(data => {
                const imageContainer = document.getElementById('image-container');
                const artistInfo = document.getElementById('artist-info');

                    const img = document.createElement('img');
                    img.src = data.src.large;
                   
                    //visualizzare immagine, nome artista e linkare la sua pagina personale

                
                const artistName = document.createElement("h2");
                    artistName.textContent = data.photographer;
                   
                
                    const artistLink = document.createElement('a');
                    artistLink.href = data.photographer_url;
                artistLink.textContent = "Link photographer";
                artistLink.classList.add = "link-ph"

                    artistName.appendChild(artistLink);

                    imageContainer.appendChild(img);
                    artistInfo.appendChild(artistName);
                
            })
            .catch(error => console.error("errore", error));
        });