const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');


const setUpUser = async (apiKey, regionValue) => {
    console.log("Called");
    console.log(apiKey);
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionValue);
};

const handleSubmit = async (e) => {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
};

const init = async () => {
    region.value = localStorage.getItem('regionName');
    apiKey.value = localStorage.getItem('apiKey');
}

form.addEventListener('submit', (e) => handleSubmit(e));

init();