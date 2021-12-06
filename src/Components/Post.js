import React, { useState, useEffect } from 'react';
import Postlist from './PostList';
import MyLoader from './ContentLoader';
import './Post.css'


function Post() {

    const [posts, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=>{        
            fetch ('https://us-central1-figure1-admin-dev.cloudfunctions.net/demoFeed')
                .then(res => {
                    if(!res.ok){
                        throw Error('could not fetch data!!')
                    }
                    return res.json();
                })
                .then((data) => {
                    setPost(data.feedItems)
                    setIsLoading(false)
                })
                .catch(error => {
                    console.log(error.message);
                })
        },2000)
    },[])

    //DUMMY DATA 
    // const [posts, setPost] = useState([
    //    {caption: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.", 
    //    followers:69, 
    //    imageUrl:"http://dummyimage.com/1243x113.png/ff4444/ffffff",
    //    likes: 411,
    //    profileImageUrl:"http://dummyimage.com/100x100.png/ff4444/ffffff",
    //    title: "th",
    //    username: "jstone"},
    //    {caption: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.", 
    //    followers:69, 
    //    imageUrl:"http://dummyimage.com/1243x113.png/ff4444/ffffff",
    //    likes: 411,
    //    profileImageUrl:"http://dummyimage.com/100x100.png/ff4444/ffffff",
    //    title: "the ",
    //    username: "jstone"}

    // ]);
        
  return (
    <div>
        {isLoading && <div> <MyLoader /> </div>}
        {posts && <Postlist posts = {posts} /> }
    </div>
  )
}

export default Post