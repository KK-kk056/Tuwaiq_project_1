const favoriteUserList = JSON.parse(localStorage.getItem('favoriteUser'));
favoriteUserList.forEach(element => {
    for (const key in element) {
        for (const item in element[key]['Favorites']) {
            $('.row-cols-1').append(
                `<div class="col-12 col-md-3">
                    <div class="card">
                        <img src="${element[key]['Favorites'][item]['image']}" class="card-img-top" alt="..." height:"170px">
                        <div class="card-body">
                            <h5 class="card-title">${element[key]['Favorites'][item]['name']}</h5>
                        </div>
                    </div>
                </div>`);
        }
    }
});

// $('.row-cols-1').append(`
//             <div class="col">
//                 <div class="card">
//                     <img id="bmw1"src="img/bmw.jpg" class="card-img-top image" alt="...">
//                         <div class="card-body">
//                         <h5 class="card-title ">MM</h5>
//                         <p  id="text1"class="card-text">LK</p>
//                     </div>
//                 </div>
//             </div>
// `);