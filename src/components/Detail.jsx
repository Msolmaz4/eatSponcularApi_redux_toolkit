import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';

const Detail = () => {
    const { state } = useLocation();
    const item = state && state.item; // Check if state exists before accessing its properties

    console.log(item);
  return (
    <div>
        {item.image}
        {item.title}
        {item.id}
        <Link to='/'>
          <button>home</button>  
        </Link>
        
    </div>
  )
}

export default Detail