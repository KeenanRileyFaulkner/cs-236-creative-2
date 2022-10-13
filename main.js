const getResidentsBtn = document.querySelector('button');

const logClick = () => {
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((res) => {
        const residents = res.data.results[0].residents;
        residents
        .forEach(resident => {
            axios.get(resident)
            .then(res => {
                let container = document.createElement('div');
                container.id = "container"
                let toAdd = document.createElement('div');
                toAdd.id = "info";
                let charName = document.createElement('h2');
                charName.textContent = res.data.name;
                
                let charHeight = document.createElement('h4');
                charHeight.textContent = "Height: " + res.data.height;
                
                let charHair = document.createElement('h4');
                let charWeight = document.createElement('h4');
                let charEyeColor = document.createElement('h4');
                let birth_year = document.createElement('h4');
                
                charHair.textContent = "Hair: " + res.data.hair_color;
                charWeight.textContent = "Mass: " + res.data.mass;
                charEyeColor.textContent = "Eyes: " + res.data.eye_color;
                birth_year.textContent = "Birth: " + res.data.birth_year;
                
                container.appendChild(charName);
                container.appendChild(toAdd);
                toAdd.appendChild(charHeight);
                toAdd.appendChild(charWeight);
                toAdd.appendChild(charEyeColor);
                toAdd.appendChild(charHair);
                toAdd.appendChild(birth_year);
                document.querySelector('section').appendChild(container);
            })
            .catch((err) => {
                console.log(err);
            });
        });
    })
    .catch((err) => {
        console.log(err);
    });
}

getResidentsBtn.addEventListener('click', logClick);
