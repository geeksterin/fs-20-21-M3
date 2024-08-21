let emoji_container = document.getElementById("emoje_container");
let search_field = document.getElementById("search_field");

function displayEmojee(searchQuery = ""){
    let filteredList = emojiList.filter(function(emoji){
        console.log(searchQuery, searchQuery.length);
        if(searchQuery.length === 0){
            return true;
        }
        if(emoji.description.indexOf(searchQuery)!== -1){
            return true;
        }
    })
    console.log(filteredList);
    // console.log(emojiList);
    emoji_container.innerHTML = "";
    filteredList.forEach(function(emoji){
        // console.log(emoji);
        let new_row = document.createElement("tr");
        let new_emoji = document.createElement("td");
        let new_aliases = document.createElement("td");
        let new_description = document.createElement("td");

        new_description.innerText = emoji.description;
        new_emoji.innerText = emoji.emoji;
        new_aliases.innerText = emoji.aliases.join(", ");


        new_row.appendChild(new_emoji);
        new_row.appendChild(new_description);
        new_row.appendChild(new_aliases);

        // console.log(new_row);

        emoji_container.appendChild(new_row);
    })
}


window.addEventListener("load", displayEmojee());

search_field.addEventListener("keyup", (e)=>{
    let value = e.target.value;
    console.log(value);
    displayEmojee(value)
})