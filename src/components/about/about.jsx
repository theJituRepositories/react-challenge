import React from 'react'
import Main from '../main/main'
import { useParams } from 'react-router-dom'
function about() {
     const blogPosts = 
        [
            { id:1, title: "Technology", content: "Technology is the most important thing in our day to day life. Sarova Holdings Provides A space where technology interacts with humanity.",author:"linter" },
            { id:2,title: "Health", content: "A healthy community is what sarova holdings relies on, we embed technology and health to ensure a better future" ,author:"Microsoft" },
            { id:3,title: "Money", content: "We believe in the power of investment  and therefore we help our clients in managing thier wealth and investments",author:"Kali-linux" },
            { id:4,title: "Lifestyle", content: "A great lifestyle is a future for all our clients" ,author:"Ubuntu" }
        ];
    
    const { id } = useParams();
    //finding blogpost by id
    const post = blogPosts.find((post) => post.id === parseInt(id));
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
