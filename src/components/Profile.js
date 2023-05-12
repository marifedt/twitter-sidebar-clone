import React from 'react';
import '../css/Profile.css';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        //Receives an object with the following properties:
        // profilePic, name, and userName
         user : props.user
        }
    }

    render(){
        return(
        <div className='profile'>
            <div className='profile-img'>
                <img src={this.state.user.profilePic} alt='Profile' />
            </div>
            <div className=''>
                <p><strong>{this.state.user.name}</strong> <br />
                   {this.state.user.userName}
                </p>
            </div>
            <button className='btn'><i class="fa-regular fa-square-caret-down" /></button>
        </div>
        )
    }
}