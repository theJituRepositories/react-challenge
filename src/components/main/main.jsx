import React from 'react'
import '../main/main.css'
import { Link } from 'react-router-dom'
import data from '../data/data';
function Main({title, content}) {
  return (
      <>
          <div className='main'>
              <div className='content'>
                  <ul>
                      {data.map((post, index) => (
                          <li className='post' key={index}>
                              <h3>{post.title}</h3>
                              <p>{post.content.substring(0,200)}</p>

                          </li>
                      ))}
                  </ul>
          
              I</div>
          
          <div className=' sidebar-main'>
              <ul>
                  {data.map((post) => (
                      <li>
                          <h3 id='title'>{post.title}</h3>
                          <img id ='avater' />
                          <h3 id='author'>{post.author}</h3>
                          <Link  to={`/about/${post.id}`}>
                          <button className='button-active' >Read more</button>
                          </Link>
                      </li>
                      
                  ))}
              </ul>
          </div>
         </div> 
      </>
  )
  }
export default Main
