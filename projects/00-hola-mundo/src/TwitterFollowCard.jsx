export function TwitterFollowCard ({formattedUserName, userName, name, isFollowing}) {
    

    return (
        <article className='twitter-followCard'>
            <header className='twitter-followCard-header'>
                <img className='twitter-followCard-avatar' 
                alt="El avatar de nba" 
                src={`https://unavatar.io/twitter/${userName}`} />
                <div className='{twitter-followCard-info}'>
                    <strong>{name}</strong>
                    <span 
                    className='twitter-followCard-infoUserName'>{formattedUserName}
                    </span>
                </div>
            </header>
            <aside>
                <button className='twitter-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}