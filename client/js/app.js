const form = document.getElementById('form')
form.addEventListener('submit', submitPost);

function submitPost(e){
    e.preventDefault();

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
            console.log(data)
            goToPost(id)
        })
        .catch(console.warn)
};

function goToPost(id){
    fetch(`http://localhost:3000/posts/${id}`)
    .then(r => r.json())
    .then(data =>{
    //    let url = `http://localhost:3000/posts/${id}`
        let doc = document.implementation.createHTMLDocument();

        let p = doc.createElement("p");
  p.textContent = "This is a new paragraph.";

  try {
    doc.body.appendChild(p);
  } catch(e) {
    console.log(e);
  }
  


  
       
        window.open(`http://localhost:5500/${doc}`);
    })
    .catch(console.warn)
}
