import getAllUsers from "../lib/data";
import Link from 'next/link';
export default async function Users(){
    const users=await getAllUsers();
    return(
        users.map(user=><div><img src={user.image_url}/><Link href={`/users/${user.userid}`}>{user.username}</Link></div>)
    )
}
