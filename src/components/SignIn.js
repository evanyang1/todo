import React, {useState} from 'react';
import {Button } from 'react-bulma-components'
import 'bulma/css/bulma.min.css';

function SignIn() {
    return (<div>
        <section>
            <h1>Sign In</h1>

            <label for="email">Email</label>
            <input type="text" placeholder="i.e. example@gmail.com" name="email" required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required></input>

            <Button>Sign In</Button>
        </section>
    </div>)
}

export default SignIn;