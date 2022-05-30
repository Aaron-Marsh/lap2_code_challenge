DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(255) NOT NULL,
    psuedoName varchar(50) NOT NULL,
    body varchar(500) NOT NULL
);