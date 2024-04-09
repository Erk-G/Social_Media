import User from "../lib/data";
import Link from 'next/link';
export default async function Users(){
    const users=await User.findAll();
    return(
        users.map(user=><div><img src={user.image_url} class="object-contain h-24 w-24"/><Link href={`/users/${user.id}`}>{user.username}</Link></div>)
    )
}
