import User from "../../lib/data";
import Link from 'next/link';
export default async function userDetail({ params }){
    const user=await User.get(params.userid);
    const messages= await User.getMessages(params.userid);
    console.log(messages);
    console.log(messages[0].text);
    return(
        <div>
            <img src={user.header_image_url} className="object-contain h-48 w-96"/>
            <img src={user.image_url} alt="Image for {{ user.username }}" id="profile-avatar" className="object-contain h-48 w-48"/>
            <div>
            <div>
                <div>
                <div>
                    <ul>
                    <li>
                        <p>Messages</p>
                        <ul>
                        {messages.map(message=>{
                            console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
                            console.log(message);
                            return(
                            <div>
                                <p>{message.text}</p>
                                <h1>{message.timestamp.toString()}</h1>
                            </div>
                            )
                        })}
                        </ul>
                    </li>
                    <li>
                        <p>Following</p>
                        <h4>
                        <Link href="/users/{{ user.id }}/following">{ user.following}</Link>
                        </h4>
                    </li>
                    <li>
                        <p>Followers</p>
                        <h4>
                        <Link href="/users/{{ user.id }}/followers">{user.followers}</Link>
                        </h4>
                    </li>
                    <li>
                        <p>Likes</p>
                        <h4><Link href="/users/{{user.id}}/likes">{user.likes}</Link></h4>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            <div >
                <h4 id="sidebar-username">@{ user.username }</h4>
                <p>{user.bio}</p>
                <p>{user.location}</p>

            </div>
            </div>
            )
            }