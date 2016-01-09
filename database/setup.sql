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

DROP TABLE picks;
CREATE TABLE picks (
    user_id    INTEGER,
    afc_g1     VARCHAR,
    afc_g2     VARCHAR,
    afc_g3     VARCHAR,
    afc_g4     VARCHAR,
    afc_g5     VARCHAR,
    nfc_g1     VARCHAR,
    nfc_g2     VARCHAR,
    nfc_g3     VARCHAR,
    nfc_g4     VARCHAR,
    nfc_g5     VARCHAR,
    sb_winner  VARCHAR
);
 
