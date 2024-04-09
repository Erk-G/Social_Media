import {sql} from '@vercel/postgres';

class User{
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