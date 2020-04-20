import React from 'react';
import {Link} from 'react-router-dom';

export default function Layout() {
    return (
        <header style={layoutstyle}>
            <h1>TodoList with React</h1>
            <Link to="/" style={{color:"white"}}>Home</Link>|<Link to="/about" style={{color:"white"}}>About</Link>
        </header>
    )
}
const layoutstyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}
