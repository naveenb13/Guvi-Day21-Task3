async function photos() {
    try {
        let searchValue = document.getElementById("value1").value;
        console.log(searchValue);
        let res = await fetch(`https://api.disneyapi.dev/character?name=${searchValue}`);
        let res1 = await res.json();
        console.log(res1);

        document.getElementById("cardShow1").style.display = "flex";
        document.getElementById("cardShow2").style.display = "flex";
        document.getElementById("name1").innerHTML = `<h1>${res1.data[0].name}</h1>`;
        document.getElementById("image1").innerHTML = `<img src=${res1.data[0].imageUrl} alt=${res1.data[0].name} width="100px" height="300px" class="card-img-top img1" />`
            document.getElementById("films1").innerText = `${res1.data[0].films}`;
            document.getElementById("tvShows1").innerText = `${res1.data[0].tvShows}`;
            document.getElementById("videoGames1").innerText = `${res1.data[0].videoGames}`;

    } catch (error) {
        console.log(error)
        document.getElementById("cardShow1").style.display = "flex";
        document.getElementById("cardShow2").style.display = "none";
        document.getElementById("name1").innerHTML = `<h5>Your Character Search does not belong to the Family of Disney</h5>`;
        document.getElementById("image1").innerHTML = `Nil`
    }

}