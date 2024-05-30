import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {

    const formattedUserName = <span>@123</span>

    return (
        <section className='App'>
        <TwitterFollowCard 
        formattedUserName={formattedUserName}
        isFollowing 
        userName="jesusponceb" 
        name="Jesus Mostacho" />

        <TwitterFollowCard 
        formattedUserName={formattedUserName}
        isFollowing={false} 
        userName="FFersaca" 
        name="Nacho" />
        </section>
    )
}