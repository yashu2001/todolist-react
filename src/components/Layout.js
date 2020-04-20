import React from 'react'

export default function Layout() {
    return (
        <header style={layoutstyle}>
            <h1>TodoList with React</h1>
        </header>
    )
}
const layoutstyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}
