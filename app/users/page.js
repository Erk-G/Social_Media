import User from "../lib/data";
import Link from 'next/link';
export default async function Users(){
    const users=await User.findAll();
    return(
        users.map(user=><div><img src={user.image_url}/><Link href={`/users/${user.id}`}>{user.username}</Link></div>)
    )
}
