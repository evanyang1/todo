import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import {Button} from 'react-bulma-components';


function Home() {
    return (<div>
        <section>
            <h1 size="is-2">To Do List App</h1> 
        </section>
        <aside>
            <Link to="/signin">
                <Button color="link">
                    Sign In
                </Button>
            </Link>
            <Link to="/signup">
                <Button color="info">
                    Sign Up
                </Button>
            </Link>
            
            
        </aside>
        <Button color="primary" size="large">
            Add Task
        </Button>

    </div>)
}

export default Home;