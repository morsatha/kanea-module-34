

const searchFood = () => {
    const searchFild = document.getElementById('search-input');
    const searchText = searchFild.value;
    // console.log(searchText)
    searchFild.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaymeal(data.meals));
};

const displaymeal = meals => {
    const displaydiv = document.getElementById('meals-div');
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadId(${meal.idMeal})" class="card mt-5">
                    <img src="${meal.strMealThumb}" class="card-img-top w" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                    </div>
                </div>

        `
        displaydiv.appendChild(div);
    })
};

const loadId = mealID => {
    console.log(mealID)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    fetch(url)
        .then(res => res.json())
        .then(data => mealDetail(data.meals[0]))
}

const mealDetail = meal => {
    console.log(meal)
    const modelId = document.getElementById('model');
    const div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('container')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top w" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                        <h5 class= text-center>strIngredient1</h5>
                        </div>
                        <span>${meal.strIngredient1}</span>
                        <span>${meal.strIngredient2}</span>
                        <span>${meal.strIngredient3}</span>
                        <span>${meal.strIngredient4}</span>
                        <span>${meal.strIngredient5}</span>
                        <span>${meal.strIngredient6}</span>
                        <span>${meal.strIngredient7}</span>
                        <span>${meal.strIngredient8}</span>
                        </div>
    `;
    modelId.appendChild(div)
}