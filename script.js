async function photos() {
    try {
        let searchValue = document.getElementById("value1").value;
        console.log(searchValue);
        let res = await fetch(`https://imsea.herokuapp.com/api/1?q=${searchValue}`);
        let res1 = await res.json();
        console.log(res1);

        document.getElementById("cardShow1").style.display = "flex";
        document.getElementById("image1").innerHTML = `<img src=${res1.results[0]} alt=${res1.image_name} width="300px" height="400px" class="card-img-top img1" />`
        document.getElementById("name1").innerText = `${res1.image_name}`

    } catch (error) {
        console.log(error)
    }

}