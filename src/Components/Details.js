import { useParams } from "react-router"
import React, { useState, useEffect } from 'react';

const Details = () => {
    const { id } = useParams()
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
        },0)
        
    },[])
  
    return(
    <section className="main">
      <div className="wrapper">
        <div className="left-col">         
          <div>
            {isLoading && <div> ..loading.. </div>}
            {posts && 
            <div>
              <h1>-- Details --</h1>
              <h3>{posts[`${id}`].caption}</h3>
            </div>}
          </div>           
        </div>
      </div>
  </section>
  )
}

export default Details