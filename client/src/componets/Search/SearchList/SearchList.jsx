import React from 'react'
import './SearchList.css'

export function SearchList({tempSearchResult}) {
  return (
    <div className='Search-List'>
      {tempSearchResult.map((data,index)=>(
          <div className='Search-List-Rult' key={index}>
          <div><img src={data.Images}  alt="" style={{width:50,height:50}} className='image-data' /></div>
          <p>{data.Title}</p>
        </div>
      )) 
      }
      
    </div>
  )
}


