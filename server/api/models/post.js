const db = require('../dbConfig');

class Post {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.psuedoName = data.pseudonym
        this.body = data.body
    }


    static get all() {
        return new Promise (async(resolve, reject) => {
            try {
                const postsData = await db.query(`SELECT * FROM posts;`)
                const posts = postsData.rows.map(p => new Post(p))
                resolve(posts);
            } catch (err) {
                reject("Error retreiving posts")
            }
         })
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let postsData = await db.query(`SELECT * FROM posts WHERE id = $1;`, [ id ]);
                let post = new Post(postsData.rows[0]);
                resolve (post);
            } catch (err) {
                reject('Post not found');
            }
        });
    }

    static create(title, pseudoname, body){
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`INSERT INTO posts (title, psuedoName, body) VALUES ($1, $2, $3) RETURNING *;`, [ title, pseudoname, body ]);
                let newPost = new Post(postData.rows[0]);
                resolve (newPost);
            } catch (err) {
                reject('Error creating post');
            }
        });
    }
    
}





module.exports = Post;
