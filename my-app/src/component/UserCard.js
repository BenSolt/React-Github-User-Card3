import React from 'react';

import '../App.css';

const UserCard = (props) => {


    return(

        <div className="cardholder">
            <div className='card1'>
                <h1>{props.userC.name}</h1>
                <img className='img1' src={props.userC.avatar_url} alt='user Image'/>
                <h5>{props.userC.bio}</h5>

            </div>


            <div className='cardholder2'>
                <h2>Followers</h2>
                <div className='followers'>
                {props.followersC.map(follower =>
                    <div className='card2' key={follower.id}>
                        <h3>{follower.login}</h3>
                        <img className='img2' src={follower.avatar_url} alt='user Image'/>
                    </div> 
                     )}
                </div>
            </div>
        </div>

    )
}

export default UserCard;


