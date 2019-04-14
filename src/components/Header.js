import React from 'react';

function Header(){
  return(
    <header style = {headerStyle}>
      <h1>TodoList</h1>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  /*borderStyle: 'solid',
  borderColor: '#333',*/
  borderBottom: 'solid #333',
  borderRadius: '5px',
  margin: '5px'
}

export default Header;