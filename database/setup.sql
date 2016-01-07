DROP TABLE users;
CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    firstname   VARCHAR(50),
    lastname    VARCHAR(50),
    email       VARCHAR(50),
    username    varchar(50),
    password    varchar(256),
    score       INTEGER
);

CREATE TABLE week1picks (
    id          SERIAL,
    cin_pit     VARCHAR
);
