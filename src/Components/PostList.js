import './Post.css'

const Postlist = ({posts}) => {
  return ( 
    <div>
      {posts.map((post) => (         
        <div className="post" key={post.imageUrl}> 
            <div className="info">
                <div className="user">
                    <div className="profile-pic"><img src={ post.profileImageUrl } alt="" /></div>
                    <p className="username">{ post.username }</p>
                    <p className="followers">{ post.followers } Followers</p>
                </div>
                <img src="img/option.PNG" className="options" alt="" />
            </div>
            <img src={ post.imageUrl } className="post-image" alt="" />
            <div className="post-content">
                <div className="reaction-wrapper">
                    <img src="img/like.PNG" className="icon" alt="" />
                    <img src="img/comment.PNG" className="icon" alt="" />
                    <img src="img/send.PNG" className="icon" alt="" />
                    <img src="img/save.PNG" className="save icon" alt="" />
                </div>
                <p className="likes">{ post.likes } likes</p>
                <p className="description"><span>{ post.username } </span> { post.caption }</p>
                {/* <p className="post-time">2 minutes ago</p> */}
            </div>
            <div className="comment-wrapper">
                <img src="img/smile.PNG" className="icon" alt="" />
                <input type="text" className="comment-box" placeholder="Add a comment" />
                <button className="comment-btn">post</button>
              </div>
            </div>
      ))}
    </div>
  );
}

export default Postlist

