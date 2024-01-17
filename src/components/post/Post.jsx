import '../post/post.css';

export default function Post() {
  return (
    <div className="post">
        <img 
        className="PostImg"
        src="https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic atque, officiis delectus odit voluptas alias voluptate eaque quasi eum consectetur laudantium. Odit dolores obcaecati minus dicta, dignissimos recusandae aut numquam!
            </span>
            <hr />
            <span className="postDate">
                1 hr ago
            </span>
        </div>
    </div>
  )
}
