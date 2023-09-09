import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Blogs = () => {
    const [posts, setPosts] = useState([])
    const url =`https://randomuser.me/api/`;

    const getpostfunc = async() =>{
        try {
            const res = await axios.get(url)
            .then((response) => {console.log(response.data);
                setPosts(response.data.results);
            });

        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(()=>{
        getpostfunc()
    },[])

  return (
    <>
        <div>Blogs</div>
        <div>
            {posts.map((elem) =>{
                const {id, name ,email, picture} = elem;
                return(
                    <div id='id'>
                        <h1>{name.first}</h1>
                        <p>{email}</p>
                        <img src={picture.medium} />
                    </div>
                )
            })}
        </div>
    </>
    

  )
}

export default Blogs