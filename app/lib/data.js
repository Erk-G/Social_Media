import {sql} from '@vercel/postgres';

async function getAllUsers(){
    const {rows}= await sql`SELECT * FROM users;`;
    return rows;
}

export default getAllUsers;