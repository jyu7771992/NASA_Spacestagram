
import './Main.css';
import React, {Component} from 'react';
class Main extends Component{
  constructor(){
    super();

      this.state = {
        posters: []
      };
  }
  componentDidMount(){
    fetch('https://api.nasa.gov/planetary/apod?api_key=n55baMV2Dva4VjGvTZRENY6dscdSqaaf3cfEPoDs')
    .then(response => response.json())
    .then(post=> this.setState({ posters: post }));
  }

  render(){
    let post_info = [this.state.posters];
    console.log(post_info);
    return (
      <div className="Main">
        {
          post_info.map((index, post) => (
            <div key={index} className="card">
              <h4 className="card-title">{post_info[post].title}</h4>
              <span className="card-date">{post_info[post].date}</span>
              <img src={post_info[post].hdurl} alt="" />
              <p className="card-explanation">{post_info[post].explanation}</p>
              <button>Like</button>
            </div>
          ))
        }
      </div>
    );
  }
}


export default Main;
