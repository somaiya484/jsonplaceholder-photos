const photo = async() =>{
    const URL = `https://jsonplaceholder.typicode.com/photos`;
    const res = await fetch(URL);
    const data = await res.json();
    getPhotos(data)


    // fetch(URL)
    // .then(res => res.json())
    // .then(data => getPhotos(data))
}

const getPhotos = (photos) =>{
    console.log(photos);
    photos.slice(0, 200).forEach((photo) => {
        const {url, title, id} = photo;
        console.log(photo)
        const cardContainer = document.getElementById('card-container');
        cardContainer.classList.add('col');
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card">
                <img src="${url} " class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Id:${id} </p>
                    <h5 class="card-title">Title: ${title}</h5>
                </div>
            </div>
        `;
        cardContainer.appendChild(div)
    });
}
photo()