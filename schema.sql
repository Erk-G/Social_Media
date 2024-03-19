CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(25) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    image_url TEXT DEFAULT "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F04%2FGithub-PNG-Image-180x180.png&f=1&nofb=1&ipt=c3f90e52e8a2e2e2d511983f9d1413144e38b9fe770374a36342d55817b29b2b&ipo=images",
    header_image_url TEXT DEFAULT "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.suttonwriters.co.uk%2Fwp-content%2Fuploads%2F2015%2F08%2Fheader-plain-green.jpg&f=1&nofb=1&ipt=f7e1e5badeac65b288d31524d1d0e6b5c78b57eef90b0e628ccd35c2c572cc8a&ipo=images",
    bio TEXT,
    location TEXT,
    messaages TEXT
        REFERENCES messages,
    followers TEXT
        REFERENCES users,
    following TEXT
        REFERENCES users,
    follows INTEGER
        REFERENCES follows,
    likes INTEGER
        REFERENCES messages,
    email TEXT UNiQUE NOT NULL
        CHECK (position('@' IN email) > 1),
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    timestamp TEXT DEFAULT TIMESTAMP,
    user_id INTEGER
        REFERENCES users ON DELETE CASCADE
);

CREATE TABLE follows(
    user_being_followed_id INTEGER
        REFERENCES users ON DELETE CASCADE,
    user_following_id INTEGER
        REFERENCES users ON DELETE CASCADE,
    PRIMARY KEY (user_being_followed_id,user_following_id)
);

CREATE TABLE likes(
    id SERIAL PRIMARY KEY,
    user_id INTEGER
        REFERENCES users ON DELETE CASCADE,
    message_id INTEGER
        REFERENCES messaages ON DELETE CASCADE
);