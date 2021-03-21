const allCountryApiCall = async() => {
    // .then(res => res.json())
    // .then(data => countryDetails(data));
    const response = await fetch(`https://restcountries.eu/rest/v2/all`)
    
    const data = await response.json()
    countryDetails(data)
};

var html = "";
const countryDetails = data => {
  data.forEach(
    singleData =>
      (html += `
      <div class="col-md-4 mb-3">
          <div class="card text-center" style="width: 18rem">
            <img src=${singleData.flag} class="card-img-top" alt=${singleData.name} />
            <div class="card-body">
              <h5 class="card-title">Country : ${singleData.name}</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Capital : ${singleData.capital}</li>
                <li class="list-group-item">Region : ${singleData.region}</li>
                <li class="list-group-item">Population : ${singleData.population}</li>
                <li class="list-group-item">Language : ${singleData.languages[0].name}</li>
              </ul>
            </div>
            </div>
        </div>
    `)
  );
  document.getElementById("wrapper").innerHTML = html;
};


allCountryApiCall();
