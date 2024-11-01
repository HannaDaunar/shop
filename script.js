const items = [{
        title: "крем для век с коллагеном AHC Premier",
        description: "Высокопитательный ампульный крем для век с коллагеном AHC Premier Ampoule In Eye Cream Collagen T4 оказывает выраженное подтягивающее действие, разглаживает мелкие мимические морщинки, способствует осветлению тёмных кругов. Содержит комплекс пептидов, витамин С, пробиотики, масло макадамии и гиалуроновую кислоту.",
        button: 1,
        volume: "30мл",
        price: 2150,
        discount: null,
        img: "./img/1.png",
        rating: 4.8,
    },
    {
        title: "Антивозрастная сыворотка для век с женьшенем Fraijour",
        description: "Антивозрастная сыворотка для век с женьшенем Fraijour Alchemic Ginsenoside Contour Eye Serum подтягивает и укрепляет кожу вокруг глаз, уменьшает выраженность морщин, разглаживает и повышает упругость. Сокращает припухлости и тёмные круги.",
        button: 1,
        volume: "20мл",
        price: 1090,
        discount: 20,
        img: "./img/2.jpg",
        rating: 4.1,
    },
    {
        title: "Лифтинг-крем для век с пептидным комплексом Medi-Peel",
        description: "Лифтинг-крем для век с пептидным комплексом Medi-Peel Peptide Bor Tox Eye Cream эффективно разглаживает гусиные лапки и мимические морщины в области вокруг глаз, подтягивает и увлажняет. Предотвращает появление новых заломов, повышает упругость и уплотняет ткани.",
        button: 1,
        volume: "40мл",
        price: 3800,
        discount: 50,
        img: "./img/3.png",
        rating: 5.0,
    },
    {
        title: "Крем для век многофункционального действия Mizon",
        description: "Крем для век многофункционального действия Mizon Only One Eye Cream For Face выполняет сразу несколько действий: интенсивно увлажняет и питает, способствует разглаживанию морщин, замедляет процессы старения и борется с тёмными кругами.",
        button: 1,
        volume: "30мл",
        price: 780,
        discount: null,
        img: "./img/4.jpg",
        rating: 3.2,
    },
    {
        title: "Гель-крем для проблемной кожи с экстрактом красного лука IsNtree",
        description: "Гель-крем для проблемной кожи с экстрактом красного лука IsNtree Onion Newpair Gel Cream обладает мощным антибактериальным свойством, стимулирует заживление акне и мелких высыпаний. Высокая антиоксидантная активность средства блокирует разрушающее действие токсинов и укрепляет защитные функции эпидермиса.",
        button: 1,
        volume: "50мл",
        price: 2072,
        discount: null,
        img: "./img/5.jpg",
        rating: 3.9,
    },
    {
        title: "Восстанавливающий крем с пробиотиками и церамидами Neogen",
        description: "Восстанавливающий крем с пробиотиками и церамидами Neogen Dermalogy Probiotics Relief Cream делает кожу более гладкой и упругой, замедляет процессы окисления, препятствует преждевременному старению, разглаживает рельеф.",
        button: 1,
        volume: "50мл",
        price: 2610,
        discount: null,
        img: "./img/6.jpg",
        rating: 4.3,
    },
    {
        title: "Водостойкий солнцезащитный крем с алоэ Holika Holika",
        description: "Водостойкий солнцезащитный крем с алоэ Holika Holika Aloe Waterproof Sun Cream SPF 50+ PA ++++ надёжно защищает от ультрафиолетовых лучей типа UVA и UVB, предотвращает появление покраснения и ожогов, препятствует фотостарению и появлению пигментных пятен. Не оставляет белых следов, быстро впитывается, подходит для лица и тела.",
        button: 1,
        volume: "70мл",
        price: 1590,
        discount: null,
        img: "./img/7.jpg",
        rating: 3.8,
    },
    {
        title: "Санскрин с берёзовым соком Round Lab",
        description: "Санскрин с берёзовым соком Round Lab Birch Juice Moisturizing Mild-Up Sunscreen SPF50+ PA++++ отлично защищает чувствительную кожу от ультрафиолета, предотвращает покраснение и появление ожогов, препятствует фотостарению. Не вызывает жирного блеска, снижает чувствительность к внешним раздражителям.",
        button: 1,
        volume: "50мл",
        price: 2240,
        discount: null,
        img: "./img/8.jpg",
        rating: 4.1,
    },
    {
        title: "Глиняная маска для сужения пор с бобами маш beplain",
        description: "Глиняная маска с бобами маш beplain Mung Bean Pore Clay Mask проникает глубоко в поры и выводит из них всех загрязнения, растворяет комедоны и помогает в борьбе с чёрными точками. Регулирует выработку себума, сужает расширенные поры и осветляет сальные нити.",
        button: 1,
        volume: "120мл",
        price: 2250,
        discount: null,
        img: "./img/9.jpg",
        rating: 4.8,
    },
    {
        title: "Ночная гидрогелевая маска с церамидами против сухости Biodance",
        description: "Ночная гидрогелевая маска с церамидами против сухости Biodance Hydro Cera-Nol Real Deep Mask интенсивно питает и увлажняет, заживляет сухую и повреждённую кожу, снижает чувствительность и укрепляет защитный гидролипидный барьер, смягчает огрубевшие и обветренные участки, запускает внутренние процессы регенерации и снимает раздражение. Восстанавливает за 3-4 часа",
        button: 1,
        volume: "34г",
        price: 553,
        discount: null,
        img: "./img/10.jpg",
        rating: 3.2,
    },
    {
        title: "Гидрогелевые патчи с протеинами шёлка JMsolution",
        description: "Гидрогелевые патчи с протеинами шёлка JMsolution Silky Cocoon Home Esthetic Eye Patch оказывают лёгкое охлаждающее действие, разглаживают мелкие морщинки и уменьшают их выраженность, снимают отёки и следы усталости.",
        button: 1,
        volume: "90г (60шт)",
        price: 1112,
        discount: null,
        img: "./img/11.jpg",
        rating: 3.7,
    },
    {
        title: "Очищающее гидрофильное масло с бобами маш beplain",
        description: "Очищающее гидрофильное масло с бобами маш beplain Mung Bean Cleansing Oil эффективно удаляет все загрязнения, макияж любой стойкости, тональные и солнцезащитные средства. Масло проникает глубоко в поры, очищать и сужать их, сокращает выраженность чёрных точек и сальных нитей.",
        button: 1,
        volume: "200мл",
        price: 2650,
        discount: null,
        img: "./img/12.jpg",
        rating: 4.1,
    },
    {
        title: "Увлажняющий гель для умывания с церамидами Hyggee",
        description: "Увлажняющий гель для умывания Hyggee pH Hyaluron Gel Cleanser бережно устраняет все виды загрязнений, остатки макияжа и излишки себума. Имеет нейтральный pH и подходит для очищения самой чувствительной кожи, снимает покраснения, успокаивает воспаления и предотвращает появление новых.",
        button: 1,
        volume: "200 мл",
        price: 530,
        discount: null,
        img: "./img/13.png",
        rating: 4.7,
    },
    {
        title: "Увлажняющий тоник с пептидами и гиалуроновой кислотой JMsolution",
        description: "Увлажняющий тоник с пептидами и гиалуроновой кислотой JMsolution Water Luminous SOS Ringer Toner XL моментально освежает и наполняет влагой, делает кожу нежной, мягкой и упругой, предотвращает сухость и борется с чувством стянутости. Готовит кожу к дальнейшему уходу, нормализует баланс pH, поддерживает эластичность и гладкость.",
        button: 1,
        volume: "600мл",
        price: 1490,
        discount: null,
        img: "./img/14.jpg",
        rating: 3.7,
    },
    {
        title: "Мультивитаминный тоник для тусклой кожи Manyo",
        description: "Мультивитаминный тонер для тусклой кожи Manyo Galac Whitening Vita Toner в кратчайшие сроки наполняет кожу влагой, возвращает тонус и здоровое сияние, улучшает цвет кожи, выравнивает тон и способствует осветлению пигментных пятен.",
        button: 1,
        volume: "210мл",
        price: 2710,
        discount: null,
        img: "./img/12.jpg",
        rating: 4.1,
    },
];

let currentState = [...items];

const itemsContainer = document.querySelector("#shop-items");

const itemTemplate = document.querySelector("#item-template");

const nothingFound = document.querySelector("#nothing-found");

function renderItems(arr) {

    nothingFound.textContent = "";
    itemsContainer.innerHTML = "";
    arr.forEach((item) => {
        itemsContainer.append(prepareShopItem(item));
    });

    if (!arr.length) {
        nothingFound.textContent = "Ничего не найдено";
    }
}

function sortByAlphabet(a, b) {
    if (a.title > b.title) {
        return 1;
    }
    if (a.title < b.title) {
        return -1;
    }
    return 0;
}

renderItems(currentState.sort((a, b) => sortByAlphabet(a, b)));

const itemsFavourites = [];

function prepareShopItem(shopItem) {

    const { title, description, button, volume, img, price, discount, rating } = shopItem;
    const item = itemTemplate.content.cloneNode(true);
    item.querySelector("h1").textContent = title;
    item.querySelector("p").textContent = description;
    item.querySelector(".volume").textContent = volume;
    item.querySelector("img").src = img;
    item.querySelector(".price").textContent = `${price}P`;
    if (discount > 0) {
        item.querySelector(".discount").textContent = `-${discount}%`;
    }
    const buttonContainer = item.querySelector("button.heart");
    for (let i = 0; i < button; i++) {
        const heart = document.createElement("i");
        heart.classList.add("fa-regular", "fa-heart");
        heart.addEventListener('click', function() {
            if (itemsFavourites.includes(shopItem)) {
                heart.classList.remove('active');
                itemsFavourites.splice(itemsFavourites[heart.closest(".shop-item")], 1);
            } else {
                heart.classList.add('active');
                itemsFavourites.push(shopItem);
            }
        })
        buttonContainer.append(heart);
    }
    const ratingContainer = item.querySelector(".rating");
    for (let i = 0; i < rating; i++) {
        const star = document.createElement("i");
        star.classList.add("fa", "fa-star");
        ratingContainer.append(star);
    }

    return item;
}

const btnFavourites = document.querySelector(".favourites");
btnFavourites.addEventListener("click", function() {
    currentState = itemsFavourites;
    renderItems(currentState);
})

const buttonSale = document.querySelector(".btn-sale");
buttonSale.addEventListener("click", function() {
    currentState = items.filter((el) =>
        el.discount > 0);
    renderItems(currentState);
})


const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");


function applySearch() {
    const searchString = searchInput.value.trim().toLowerCase();
    currentState = items.filter((el) =>
        el.title.toLowerCase().includes(searchString)
    );
    currentState.sort((a, b) => sortByAlphabet(a, b));
    renderItems(currentState);
    sortControl.selectedIndex = 0;
}

searchButton.addEventListener("click", applySearch);
searchInput.addEventListener("search", applySearch);

const sortControl = document.querySelector("#sort");

sortControl.addEventListener("change", (event) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
        case "expensive":
            {
                currentState.sort((a, b) => b.price - a.price);
                break;
            }
        case "cheap":
            {
                currentState.sort((a, b) => a.price - b.price);
                break;
            }
        case "rating":
            {
                currentState.sort((a, b) => b.rating - a.rating);
                break;
            }
        case "alphabet":
            {
                currentState.sort((a, b) => sortByAlphabet(a, b));
                break;
            }
    }
    renderItems(currentState);

});