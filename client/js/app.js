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
            data.pseudoName = postData.pseudonym;
            data.body = postData.body;

            console.log(data)
            // goToPost()
        })
        .catch(console.warn)
};




    
// getAllPosts('http://localhost:3000/posts', options);



// function getAllPosts(){
//     fetch('http://localhost:3000/posts')
//         .then(r => r.json())
//         .then(r.send)
//         .catch(console.warn)
// }


