DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(255) ,
    pseudonym varchar(50) ,
    body varchar(500) 
);