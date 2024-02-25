let url = "https://api.publicapis.org/entries"
let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contests) => {
  console.log(contests)
  ihtml = ""
  for (item in contests) {
    console.log(item)
    ihtml += `
                <div class="card mx-2 my-2" style="width: 22rem;">
                                <img src="https://wallpaperaccess.com/full/3211465.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <h5 class="card-title">${contests[item].Description}</h5>
                                        <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
                                        <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours} </p>
                                        <p>Starts at: ${contests[item].start_time}
                                        <p>Starts at: ${contests[item].end_time}
                                        <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
                                </div>
                        </div>
                `
  }
  cardContainer.innerHTML = ihtml
})

/* ******************* NOTES APP (REMAINING QUESTIONS OF PRACTICE SET) *********** */
let n = localStorage.getItem("note")
alert("Your note is " + n)

let a = prompt("Enter your note")
if (a) {
  localStorage.setItem("note", a)
}

let c = confirm("Do you want to delete your note?")
if (c) {
  localStorage.removeItem("note")
  alert("Note deleted successfully!")
}