function createBrewery({ name,brewery_type, address_2, address_3, city, state, country, phone, website_url }) {
    document.querySelector(".brewery-list").innerHTML += `
    <div class="user-container">
    <img src=${"brewery.jpg"} alt="img" class="user-pic">
    <div>
    <h3> Name: ${name},</h3>
    <p>brewery_type:  ${brewery_type},</p>
    <p>address_2:  ${address_2} </p>
    <p> address_3:  ${address_3}</p>
    <p>city:  ${city},</p>
    <p>state:  ${state},<p>
    <p>country:  ${country},</p>
    <p>phone:  ${phone},</p>
    <p>website_url:  ${website_url};<p>
    
    </div>
    
        
</div>`
};

// function getBrewery(){
//     fetch("https://api.openbrewerydb.org/breweries")
//     .then(data => data.json())
//     .then((breweryList) => {
//         breweryList.forEach((brewery) => createBrewery(brewery));
//     });
// }

async function getBrewery() {
    try {
        const data = await fetch("https://api.openbrewerydb.org/breweries")
        const breweryList = await data.json()

        breweryList.forEach((brewery) => createBrewery(brewery));
    }
    catch (err) {
        console.log("Error...", err);
    }

}
getBrewery();