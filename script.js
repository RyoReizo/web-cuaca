const apiKey = '31193d562ba13d4e2a3629a830cafae7';
const kota = document.getElementById('kota');
const tombol = document.getElementById('tombol');
const hasilCuaca = document.getElementById('hasil');

tombol.addEventListener('click', () => {
    const lokasi = kota.value;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${lokasi}&appid=${apiKey}`)
    .then(response => {
        const data = response.data
        hasilCuaca.innerHTML = `
        <div>${data.name}</div>
        <div>Temperature: ${(data.main.temp - 273).toFixed(2)}</div>
        <div>Weather: ${data.weather[0].description}</div>`
    })
})