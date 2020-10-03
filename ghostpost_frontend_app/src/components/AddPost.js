import React from 'react';


class AddPost extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
     isroast: false,
     upvotes: 0,
     downvotes: 0,
     post_content: '',
     submissiondate: null
    }
  }
  handlesubmit=(event)=>{
      event.preventDefault()
      const requestoptions={
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({data: this.state})
      }
    fetch("http://127.0.0.1:8000/api/posts/", requestoptions)
    .then((res)=> res.json())
    .then((data)=> console.log(data))
  }
  handleChange=(event)=>{
      this.setState({...this.state, post_content: event.target.value})
  }
  handleSelectChange=(event)=>{
      this.setState({...this.state, isroast: event.target.value})
  }
  render(){
  return (
    <div className="App">
      <form onSubmit={this.handlesubmit} >
      What do you want to say?<br/>
        <textarea cols="50" value={this.state.post_content} onChange={this.handleChange} /><br/>
        <label>Choose if it's a Roast or Boast:
        <select value={this.state.isroast} onChange={this.handleSelectChange}>
        <option value={true}>Boast</option>
        <option value={false}>Roast</option>
        </select>
        </label><br/>
        <input type='submit'value='submit' />
      </form>
      
    </div>
  );
}
}
export default AddPost;