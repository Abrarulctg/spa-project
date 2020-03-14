import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Friends.css';
import FriendsProfile from '../FriendsProfile/FriendsProfile';
import Cart from '../Cart/Cart';

const Friends = () => {
    const first20 = fakeData.slice(0, 20);
    const [friends, setFriends] = useState(first20);
    const [cart, setCart]=useState([]);

    const handleAddBtn = (friends) =>{
        const newCart = [...cart, friends];
        setCart(newCart);
    }



    return (
        <div className="friends-container">
            <div className="frnd-profile-container">
                {
                    friends.map(frnds => <FriendsProfile 
                        handleAddBtn = {handleAddBtn}
                        friends={frnds}
                        >
                        
                        </FriendsProfile>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Friends;