import React from 'react';


class Boast extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
     posts : []
    }
  }
  componentDidMount(){
    fetch("http://127.0.0.1:8000/api/posts/Boast/")
    .then((res)=> res.json())
    .then((data)=> this.setState({posts:data}))
  }
  render(){
  return (
    <div className="App">
      {this.state.posts.map((post)=>(
        <div>
          <ul>
            <li>Type: {post.isRoast ? 'Roast' : 'Boast'}</li>
            <li>Score: {post.score}</li>
            <li>Upvotes: {post.Upvotes}</li>
            <li>Downvotes: {post.downvotes}</li>
            <li>Post Content: {post.post_content}</li>
            <li>Submission Date: {post.submissiondate}</li>
            </ul>
        </div>
      ))}
    </div>
  );
}
}
export default Boast;