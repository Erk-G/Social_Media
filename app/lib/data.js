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
}

export default User;