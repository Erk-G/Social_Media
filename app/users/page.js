import file from "../test_data.json";
import Link from 'next/link';
export default function Users(){
    const users=file.users;
    return(
        users.map(user=><div><img src={user.image_url}/><Link href={`/users/${user.userid}`}>{user.username}</Link></div>)
    )
}
