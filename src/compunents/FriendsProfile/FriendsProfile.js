import React from 'react';
import './FriendsProfile.css';

const FriendsProfile = (props) => {
    //console.log(props);
    const { img, name, email, sallary } = props.friends;
    return (
        <div className="friends">
            <div className="cart">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h5>{email}</h5>
                <h4>Yearly Income ${sallary}</h4>
                <button
                    onClick={() => props.handleAddBtn(props.friends)}
                    className="addBtn">
                    + Add Friend
                    </button>
            </div>
        </div>
    );
};

export default FriendsProfile;