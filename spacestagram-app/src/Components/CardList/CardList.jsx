import './CardList.css';
import React, {Component} from 'react';
class CardList extends Component{
    render(){
        let post_info = [this.state.posters];
        return (
          <div className="Main">
            {
              post_info.map((index, post) => (
                <div key={index} className="card">
                  <h5 className="card-title">{post_info[post].title}</h5>
                </div>
              ))
            }
          </div>
        );
      }
}

export default CardList;