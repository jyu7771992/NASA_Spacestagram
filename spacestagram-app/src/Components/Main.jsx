
import './Main.css';
import React, {Component} from 'react';
import Like from '../Images/Like.svg';

class Main extends Component{
  constructor(){
    super();
      this.state = {
        posters: [],
        comments:[
          {
            id: "uidhrtsdori",
            comment: "Omg! I can't believe this!",
          },
          {
            id: "kkk123r45",
            comment: 'MASTERPIECE!!',
          },
          {
            id: "qqihjkfl",
            comment: 'How did you create this?'
          },
          {
            id: "l18385",
            comment: "I swear I must to go to the space!!",
          },
          {
            id: "kkk123r45",
            comment: 'MASTERPIECE!!',
          },
          {
            id: "9wefnkf",
            comment: 'Unbelievable... '
          }],
          isCommentOpen_One: false,
          isCommentOpen_Two: false,
          isCommentOpen_Three: false,
      };
    
  }
  
  componentDidMount(){
    fetch('https://api.nasa.gov/planetary/apod?api_key=n55baMV2Dva4VjGvTZRENY6dscdSqaaf3cfEPoDs')
    .then(response => response.json())
    .then(post=> this.setState({ posters: post }));
  }

  isCommentOpen_One(){
    this.setState((preState) => ({
      isCommentOpen_One: !preState.isCommentOpen_One 
    }));
  }
  isCommentOpen_Two(){
    this.setState((preState) => ({
      isCommentOpen_Two: !preState.isCommentOpen_Two 
    }));
  }
  isCommentOpen_Three(){
    this.setState((preState) => ({
      isCommentOpen_Three: !preState.isCommentOpen_Three 
    }));
  }

  render(){
    let post_info = [this.state.posters];
    const comment = this.state.comments;
    return (
      <div className="Main">
        {
          post_info.map((index, post) => (
            <div key={index} className="card">
              <h4 className="card-title">{post_info[post].title}</h4>
              <div className="card-detail">
                <span className="card-author">Author: {(post_info[post].copyright) || `Unknown`}</span>
                <span className="card-date"> Date: {post_info[post].date}</span>
              </div>
              <div className="card-images">
                <img src={post_info[post].hdurl} alt="" />
              </div> 
              <p className="card-explanation">{post_info[post].explanation}</p>
              <div className="card-btn-block">
                <button className="card-btn like">
                  <img className="like-icon" src={Like} alt="" /><span className="btn-txt">Like</span>
                </button>
                <button className="card-btn comment" onClick={()=> this.isCommentOpen_One()}><span className="btn-txt">Comments</span></button>
                <button className="card-btn share"><span className="btn-txt">Share</span></button>
              </div>
              <ul className={`card-comment ${this.state.isCommentOpen_One ? "open" : "close"}`}>
                {
                  comment.map((user) => (
                    <li className="user">
                      <span className="user-id">{user.id}</span>
                      <span className="user-comment">{user.comment}</span>
                    </li>
                  ))
                } 
                <button className="load-btn">Load More...</button>
              </ul>
            </div>
          ))
        }
        {
          post_info.map((index, post) => (
            <div key={index} className="card">
              <h4 className="card-title">{post_info[post].title}</h4>
              <div className="card-detail">
                <span className="card-author">Author: {(post_info[post].copyright) || `Unknown`}</span>
                <span className="card-date"> Date: {post_info[post].date}</span>
              </div>
              <div className="card-images">
                <img src={post_info[post].hdurl} alt="" />
              </div> 
              <p className="card-explanation">{post_info[post].explanation}</p>
              <div className="card-btn-block">
                <button className="card-btn like">
                  <img className="like-icon" src={Like} alt="" /><span className="btn-txt">Like</span>
                </button>
                <button className="card-btn comment" onClick={()=> this.isCommentOpen_Two()}><span className="btn-txt">Comments</span></button>
                <button className="card-btn share"><span className="btn-txt">Share</span></button>
              </div>
              <ul className={`card-comment ${this.state.isCommentOpen_Two ? "open" : "close"}`}>
                {
                  comment.map((user) => (
                    <li className="user">
                      <span className="user-id">{user.id}</span>
                      <span className="user-comment">{user.comment}</span>
                    </li>
                  ))
                } 
                <button className="load-btn">Load More...</button>
              </ul>
            </div>
          ))
        }
        {
          post_info.map((index, post) => (
            <div key={index} className="card">
              <h4 className="card-title">{post_info[post].title}</h4>
              <div className="card-detail">
                <span className="card-author">Author: {(post_info[post].copyright) || `Unknown`}</span>
                <span className="card-date"> Date: {post_info[post].date}</span>
              </div>
              <div className="card-images">
                <img src={post_info[post].hdurl} alt="" />
              </div> 
              <p className="card-explanation">{post_info[post].explanation}</p>
              <div className="card-btn-block">
                <button className="card-btn like">
                  <img className="like-icon" src={Like} alt="" />
                  <span className="btn-txt">Like</span>
                </button>
                <button className="card-btn comment" onClick={()=> this.isCommentOpen_Three()}><span className="btn-txt">Comments</span></button>
                <button className="card-btn share"><span className="btn-txt">Share</span></button>
              </div>
              <ul className={`card-comment ${this.state.isCommentOpen_Three ? "open" : "close"}`}>
                {
                  comment.map((user) => (
                    <li className="user">
                      <span className="user-id">{user.id}</span>
                      <span className="user-comment">{user.comment}</span>
                    </li>
                  ))
                } 
                <button className="load-btn">Load More...</button>
              </ul>
            </div>
          ))
        }
      </div>
    );
  }
}


export default Main;
