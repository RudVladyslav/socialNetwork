import React from 'react';
import style from './../Navbar.module.css';

const Friends = (props) => {
    let friends = props.state.FriendsData.map((friend) => {
            return (
                <div>
                    <img src={friend.avatar}  key={friend.id} alt={"ll"}/>
                    <p>{friend.name}</p>
                </div>
            );
        }
    );

    return (
        <div className={style.friends}>
            <h4 className={style.friends_header}>Friends</h4>
            <div className={style.friends__container}>
                {friends}

            </div>
        </div>
    )
}

export default Friends;