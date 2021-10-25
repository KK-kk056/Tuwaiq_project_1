let cars=[
    {
        "name": "Audi",
        "model": "2019",
        "mead" : " Germany",

    },

    {
        "name": "porsche",
        "model": "2020",
        "mead" : " Germany",


    },

    {
        "name": "Mercedes Benz",
        "model": "2019",
        "mead" : " Germany",

    },
    
    {
        "name": "BMW",
        "model": "2018",
        "mead" : " Germany",

    }
]

$(document).ready(function(){
    let name =sessionStorage.getItem("name");
    console.log(name);
    let car = getCar(name);
    console.log(car)

})