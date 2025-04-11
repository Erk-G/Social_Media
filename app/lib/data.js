import {sql} from '@vercel/postgres';
const bcrypt = require("bcryptjs");
const { BCRYPT_WORK_FACTOR } = require("./config.js");

class User{
    static async authenticate(username, password) {
        // try to find the user first
        const result = await sql `SELECT username,
                                    password,
                                    first_name,
                                    last_name,
                                    image_url,
                                    header_image_url,
                                    email
                            FROM users
                            WHERE username = ${username};`;
        const user = result.rows[0];
    
        if (user) {
          // compare hashed password to a new hash from password
          const isValid = await bcrypt.compare(password, user.password);
          if (isValid === true) {
            delete user.password;
            return user;
          }
        }
        // Errors were more elegant in the original since Express has an error object you can edit. Can't find an easy equivalent
        throw alert("Invalid username/password");
      }

    static async register({username,password,first_name,last_name,image_url,header_image_url,email}){
        const duplicateCheck= await sql `SELECT username
                                        FROM users
                                        WHERE username = ${username};`
        if (duplicateCheck.rows[0]) {
            throw alert(`username: ${username} is taken`);
        }

        const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

        const result = await sql`INSERT INTO users
               (username,
                password,
                first_name,
                last_name,
                image_url,
                header_image_url,
                email)
               VALUES (${username}, ${hashedPassword}, ${first_name}, ${last_name}, ${image_url}, ${header_image_url},${email})
               RETURNING username, first_name, last_name,image_url,header_image_url, email;`;
    
        const user = result.rows[0];
    
        return user;
    }


    static async findAll(){
        const {rows}= await sql`SELECT * FROM users;`;
        return rows;  
    }

    static async get(id){
        const userRes= await sql`SELECT ID,
                                    username,
                                    first_name,
                                    last_name,
                                    image_url,
                                    header_image_url,
                                    bio,
                                    location
                                    FROM users
                                    WHERE id=${id};`;
        
        return userRes.rows[0];
    }

    static async getMessages(id){
        const messagesRes= await sql`SELECT id,
                                        text,
                                        timestamp
                                        FROM messages
                                        WHERE user_id=${id}
                                        ORDER BY id DESC;`;
        return messagesRes.rows;
    }

    // static async getFollowers(id){
    //     const userRes= await sql`SELECT id,
    //                                     text,
    //                                     timestamp
    //                                     FROM messages
    //                                     WHERE user_id=${id}
    //                                     ORDER BY id DESC;`;
    //     return userRes.rows[0];
    // }

    // static async getLikes(id){
    //     const userRes= await sql`SELECT id,
    //                                     text,
    //                                     timestamp
    //                                     FROM messages
    //                                     WHERE user_id=${id}
    //                                     ORDER BY id DESC;`;
    //     return userRes.rows[0];
    // }
}

export default User;