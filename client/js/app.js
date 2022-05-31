const form = document.getElementById('form')
form.addEventListener('submit', submitPost);
const div = document.getElementById('div')

function submitPost(e){
    e.preventDefault();

    if (e.target.title.value && e.target.pseudonym.value && e.target.body.value){
    const postData = {
        title: e.target.title.value,
        pseudonym: e.target.pseudonym.value,
        body: e.target.body.value
    }
    console.log(e.target.title.value);
    
    const options = {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" }
    };
    
    fetch('http://localhost:3000/posts', options)
        .then(r => r.json())
        .then(data =>{
            data.title = postData.title;
            data.pseudonym = postData.pseudonym;
            data.body = postData.body;
            const id = data.id;
            goToPost(id)
        })
        .catch(console.warn)
    } else {
        alert('Fill all fields')
    }
};

function goToPost(id){
    let url = window.location.href
    let newUrl = url + `?${id}`
    window.open(newUrl, "_self");
}

function loadPage() {
let url = window.location.href
let splitUrl = url.split("/?")
console.log(url)
// if (splitUrl[0] ===  )
const id = splitUrl[1];

if (!(splitUrl[1] === undefined)){
fetch(`http://localhost:3000/posts/${id}`)
.then(r => r.json())
.then(data =>{

    let paragraph1 = document.createElement('p')
    paragraph1.textContent = data.title;
    paragraph1.className = "post_title";
    div.appendChild(paragraph1);

    let paragraph2 = document.createElement('p')
    paragraph2.textContent = data.pseudonym;
    paragraph2.className = "post_pseudonym";
    div.appendChild(paragraph2);

    let paragraph3 = document.createElement('p')
    paragraph3.textContent = data.body;
    paragraph3.className = "post_body";
    div.appendChild(paragraph3);

})


form.style.display = "none"
}


}
loadPage()
