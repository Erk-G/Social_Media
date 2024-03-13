import file from "../../test_data.json";
import Link from 'next/link';
export default function userDetail({ params }){
    const user=file.users[params.userid];
    console.log(params)
    return(
        <div>
            <img src={user.header_image_url}/>
            <img src={user.image_url} alt="Image for {{ user.username }}" id="profile-avatar"/>
            <div>
            <div>
                <div>
                <div>
                    <ul>
                    <li>
                        <p>Messages</p>
                        <h4>
                        <Link href="/users/{{ user.id }}">{ user.messages}</Link>
                        </h4>
                    </li>
                    <li>
                        <p>Following</p>
                        <h4>
                        <Link href="/users/{{ user.id }}/following">{ user.following}</Link>
                        </h4>
                    </li>
                    <li>
                        <p c>Followers</p>
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