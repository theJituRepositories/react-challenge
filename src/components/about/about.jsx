import React from 'react'
import Main from '../main/main'
import data from '../data/data';
import { useParams } from 'react-router-dom'
function about() {
    
    const { id } = useParams();
    //finding blogpost by id
    const post = data.find((post) => post.id === parseInt(id));
    if (!post) {
        return <div> This Post not found</div>
    }
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
}

export default about
