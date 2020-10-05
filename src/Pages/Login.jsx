import React from 'react';
import {firebase} from "../firebase"

function Login() {
    const handleLogin = async () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('user_birthday');
        provider.setCustomParameters({
            'display': 'popup'
        });
        await firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            });
        }
    return (
        <div className="login">
           <div className="loginHeader">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
           </div>
            <div className="loginButton">
                <img type="button"
                onClick={handleLogin}
                 src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/17639236_1785253958471956_282550797298827264_n.png?_nc_cat=105&_nc_sid=ad8a9d&_nc_ohc=DJq8RjytahUAX-coasH&_nc_ht=scontent-dfw5-1.xx&oh=4b757bf10adb8da2529646cf8cfe3249&oe=5FA0B116" />
            </div>
            
        </div>
    )
}

export default Login
