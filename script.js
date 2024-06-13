
const apiKey = 'JASiAr9DVpAQx9PptTIbbwcqu0wbT4DnC7kCwjGRmcmZbboGLWsqKRMA';  
document.getElementById('load-images-btn').addEventListener('click', function () {
    
    const query = 'mountain';

     const url = `https://api.pexels.com/v1/search?query=${query}&per_page=12`;
     
     

    fetch(url, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('cards-container');
        if (container) {

            container.innerHTML = ""; // cosi non me ne carica sempre di nuovi ma pulisce la pagina
            
            data.photos.forEach(photo => {
                // creo la card
                const card = document.createElement('div');
                card.className = 'col-md-4 mb-4';
    
                const cardInner = document.createElement('div');
                cardInner.className = 'card shadow-sm';
    
                const img = document.createElement('img');
                img.className = 'card-img-top';
                img.src = photo.src.medium; 
    
                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';
    
                const cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.textContent = photo.photographer;
    
                const cardText = document.createElement('p');
                cardText.className = 'card-text';
                cardText.textContent = photo.alt;
    
                const cardFooter = document.createElement('div');
                cardFooter.className = 'd-flex justify-content-between align-items-center';
    
                const btnGroup = document.createElement('div');
                btnGroup.className = 'btn-group';
    
                const viewButton = document.createElement('button');
                viewButton.className = 'btn btn-sm btn-outline-secondary';
                viewButton.textContent = 'View';
    
                const editButton = document.createElement('button');
                editButton.className = 'btn btn-sm btn-outline-secondary';
                editButton.textContent = 'Hide';

                 editButton.addEventListener('click', function () {
                    card.remove(); 
                });
    
                const smallText = document.createElement('small');
                smallText.className = 'text-muted';
                smallText.textContent = `ID: ${photo.id}`;
    
                btnGroup.appendChild(viewButton);
                btnGroup.appendChild(editButton);
    
                cardFooter.appendChild(btnGroup);
                cardFooter.appendChild(smallText);
    
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(cardFooter);
    
                cardInner.appendChild(img);
                cardInner.appendChild(cardBody);
    
                card.appendChild(cardInner);
                container.appendChild(card);
            });
        }

    })
    .catch(error => console.log('Errore:', error));
});





// document.getElementById('load-secondary-img-btn').addEventListener('click', function () {
//     const apiKey = 'JASiAr9DVpAQx9PptTIbbwcqu0wbT4DnC7kCwjGRmcmZbboGLWsqKRMA';
//     const query = 'winter';

//      const url = `https://api.pexels.com/v1/search?query=${query}&per_page=12`;
     
     

//     fetch(url, {
//         headers: {
//             Authorization: `Bearer ${apiKey}`
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         const container = document.getElementById('cards-container');
//         if (container) {

//             container.innerHTML = ""; // cosi non me ne carica sempre di nuovi ma pulisce la pagina
            
//             data.photos.forEach(photo => {
//                 // creo la card
//                 const card = document.createElement('div');
//                 card.className = 'col-md-4 mb-4';
    
//                 const cardInner = document.createElement('div');
//                 cardInner.className = 'card shadow-sm';
    
//                 const img = document.createElement('img');
//                 img.className = 'card-img-top';
//                 img.src = photo.src.medium;
    
//                 const cardBody = document.createElement('div');
//                 cardBody.className = 'card-body';
    
//                 const cardTitle = document.createElement('h5');
//                 cardTitle.className = 'card-title';
//                 cardTitle.textContent = photo.photographer;
    
//                 const cardText = document.createElement('p');
//                 cardText.className = 'card-text';
//                 cardText.textContent = photo.alt;
    
//                 const cardFooter = document.createElement('div');
//                 cardFooter.className = 'd-flex justify-content-between align-items-center';
    
//                 const btnGroup = document.createElement('div');
//                 btnGroup.className = 'btn-group';
    
//                 const viewButton = document.createElement('button');
//                 viewButton.className = 'btn btn-sm btn-outline-secondary';
//                 viewButton.textContent = 'View';
    
//                 const editButton = document.createElement('button');
//                 editButton.className = 'btn btn-sm btn-outline-secondary';
//                 editButton.textContent = 'Hide';

//                  editButton.addEventListener('click', function () {
//                     card.remove();
//                 });
    
//                 const smallText = document.createElement('small');
//                 smallText.className = 'text-muted';
//                 smallText.textContent = `ID: ${photo.id}`;
    
//                 btnGroup.appendChild(viewButton);
//                 btnGroup.appendChild(editButton);
    
//                 cardFooter.appendChild(btnGroup);
//                 cardFooter.appendChild(smallText);
    
//                 cardBody.appendChild(cardTitle);
//                 cardBody.appendChild(cardText);
//                 cardBody.appendChild(cardFooter);
    
//                 cardInner.appendChild(img);
//                 cardInner.appendChild(cardBody);
    
//                 card.appendChild(cardInner);
//                 container.appendChild(card);
//             });
//         }

//     })
//     .catch(error => console.log('Errore:', error));
// });




