let cars = [{
        "name": "Audi",
        "model": "2019",
        "mead": " Germany",

    },
    {
        "name": "porsche",
        "model": "2020",
        "mead": " Germany",


    },
    {
        "name": "Mercedes Benz",
        "model": "2021",
        "mead": " Germany",


    },
    {
        "name": "BMW",
        "model": "2020",
        "mead": " Germany",
        "img2": "img/BMW2.jpg",
        "img3": "img/bmw3.jpg",
        "img4": "img/bmw4.jpg",
    }
]

const bmw = [{
    name: "BMW X7",
    model: 2021,
    Made: "Germany",
    img: "img/bmw.jpg"
}, {
    name: "BMW i5",
    model: 2022,
    Made: "Germany",
    img: "img/bmw2.jpg"
}, {
    name: "BMW 500",
    model: 2021,
    Made: "Germany",
    img: "img/bmw4.jpg"
}, {
    name: "BMW s500",
    model: 2020,
    Made: "Germany",
    img: "img/bmw3.jpg"
}]

const audi = [{
    name: "audi Q8",
    model: 2021,
    Made: "Germany",
    img: "img/oud3.jpg"
}, {
    name: "audi A8",
    model: 2022,
    Made: "Germany",
    img: "img/oud2.jpg"
}, {
    name: "audi 500",
    model: 2021,
    Made: "Germany",
    img: "img/oud1.jpg"
}, {
    name: "audi sport",
    model: 2020,
    Made: "Germany",
    img: "img/oud5.jpg"
}]

const Mercedes = [{
    name: "G-class",
    model: 2021,
    Made: "Germany",
    img: "img/g-class.jpg"
}, {
    name: "s500",
    model: 2022,
    Made: "Germany",
    img: "img/s500.jpeg"
}, {
    name: "s300",
    model: 2021,
    Made: "Germany",
    img: "img/s300.jpg"
}, {
    name: "s200",
    model: 2020,
    Made: "Germany",
    img: "img/s200.jpg"
}]


const Porsche = [{
    name: "A9sport",
    model: 2021,
    Made: "Germany",
    img: "img/pursh1.jpg"
}, {
    name: "ss8",
    model: 2022,
    Made: "Germany",
    img: "img/pursh2.jpg"
}, {
    name: "ss250",
    model: 2021,
    Made: "Germany",
    img: "img/pursh3.jpg"
}, {
    name: "GTS",
    model: 2020,
    Made: "Germany",
    img: "img/pursh4.jpg"
}]



$(document).ready(function () {
    let selectedCar = sessionStorage.getItem('name');
    displayCar(selectedCar)
});


function displayCar(brand) {
    if (brand == 'bmw') {
        let i = 1;
        bmw.forEach(element => {
            $(".row").append(`
            <div class="col">
                <div class="card">
                    <img id="bmw1${i}" src="${element['img']}" class="card-img-top image" alt="...">
                        <div class="card-body">
                        <h5 class="card-title "> ${element['name']} </h5>
                        <p  id="text1"class="card-text"> ${element['model']} </p>
                    </div>
                </div>
            </div>`);

            $(`#bmw1${i}`).click(function () {
                const name = `${element['name']}`;
                const image = `${element['img']}`;
                const model = `${element['model']}`;

                const Favorite = [{
                    Favorites: [{
                        name: name,
                        image: image,
                        model: model,
                    }, ],
                }];

                const favoriteUserList = JSON.parse(localStorage.getItem('favoriteUser'));
                if (favoriteUserList !== null) {
                    favoriteUserList.push(Favorite);
                    localStorage.setItem('favoriteUser', JSON.stringify(favoriteUserList));
                } else {
                    let newFavorite = [];
                    newFavorite.push(Favorite)
                    localStorage.setItem('favoriteUser', JSON.stringify(newFavorite));
                }
            });
            i++
        });
    } else if (brand === 'audi') {
        let i = 1;
        audi.forEach(element => {
            $(".row").append(`
                <div class="col">
                    <div class="card">
                        <img id="audi1${i}" src="${element['img']}" class="card-img-top image" alt="...">
                            <div class="card-body">
                            <h5 class="card-title ">${element['name']}</h5>
                            <p  id="text1"class="card-text">${element['model']}</p>
                        </div>
                    </div>
                </div>`);

            $(`#audi1${i}`).click(function () {
                const name = `${element['name']}`;
                const image = `${element['img']}`;
                const model = `${element['model']}`;

                const Favorite = [{
                    Favorites: [{
                        name: name,
                        image: image,
                        model: model,
                    }, ],
                }];

                const favoriteUserList = JSON.parse(localStorage.getItem('favoriteUser'));
                if (favoriteUserList !== null) {
                    favoriteUserList.push(Favorite);
                    localStorage.setItem('favoriteUser', JSON.stringify(favoriteUserList));
                } else {
                    let newFavorite = [];
                    newFavorite.push(Favorite)
                    localStorage.setItem('favoriteUser', JSON.stringify(newFavorite));
                }
            });
            i++;
        });

    } else if (brand === 'Mercedes') {
        let i = 1;
        Mercedes.forEach(element => {
            $(".row").append(`
                <div class="col">
                    <div class="card">
                        <img id="Mercedes1${i}" src="${element['img']}" class="card-img-top image" alt="...">
                            <div class="card-body">
                            <h5 class="card-title ">${element['name']}</h5>
                            <p  id="text1"class="card-text">${element['model']}</p>
                        </div>
                    </div>
                </div>`);

            $(`#Mercedes1${i}`).click(function () {
                const name = `${element['name']}`;
                const image = `${element['img']}`;
                const model = `${element['model']}`;

                const Favorite = [{
                    Favorites: [{
                        name: name,
                        image: image,
                        model: model,
                    }, ],
                }];

                const favoriteUserList = JSON.parse(localStorage.getItem('favoriteUser'));
                if (favoriteUserList !== null) {
                    favoriteUserList.push(Favorite);
                    localStorage.setItem('favoriteUser', JSON.stringify(favoriteUserList));
                } else {
                    let newFavorite = [];
                    newFavorite.push(Favorite)
                    localStorage.setItem('favoriteUser', JSON.stringify(newFavorite));
                }
            });
            i++;
        });

    } else if (brand === 'Porsche') {
        let i = 1;
        Porsche.forEach(element => {
            $(".row").append(`
                <div class="col">
                    <div class="card">
                        <img id="Porsche1${i}" src="${element['img']}" class="card-img-top image" alt="...">
                            <div class="card-body">
                            <h5 class="card-title ">${element['name']}</h5>
                            <p  id="text1"class="card-text">${element['model']}</p>
                        </div>
                    </div>
                </div>`);

            $(`#Porsche1${i}`).click(function () {
                const name = `${element['name']}`;
                const image = `${element['img']}`;
                const model = `${element['model']}`;

                const Favorite = [{
                    Favorites: [{
                        name: name,
                        image: image,
                        model: model,
                    }, ],
                }];

                const favoriteUserList = JSON.parse(localStorage.getItem('favoriteUser'));
                if (favoriteUserList !== null) {
                    favoriteUserList.push(Favorite);
                    localStorage.setItem('favoriteUser', JSON.stringify(favoriteUserList));
                } else {
                    let newFavorite = [];
                    newFavorite.push(Favorite)
                    localStorage.setItem('favoriteUser', JSON.stringify(newFavorite));
                }
            });
            i++;
        });
    }
}

// bmw.forEach(element => {
//     $(".row").append(`
//     <div class="col">
//         <div class="card">
//             <img id="bmw1"src="${element['img']}" class="card-img-top image" alt="...">
//                 <div class="card-body">
//                 <h5 class="card-title ">${element['name']}</h5>
//                 <p  id="text1"class="card-text">${element['model']}</p>
//             </div>
//         </div>
//     </div>`)
// });

// 


function getCar(carName) {

    // console.log(carName);
    const rusult = cars.find(({
        name
    }) => name === carName);
    return rusult;
}

function FavItem(name, image, desc) {
    this.name = name;
    this.img = image;
    this.desc = desc;
}