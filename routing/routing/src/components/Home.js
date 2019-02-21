import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    console.log(this.props);
    const {posts} = this.props;
    const postList = posts.length ? (
        posts.map(post => {
          return (
              <div className="post card" key={post.id}>
                <img src={Pokeball} alt="pokeball" />
                <Link to={'/' + post.id}>
                  <div className="card-content">
                    <span className="card-title red-text">{post.title}</span>
                    <span>{post.body}</span>
                  </div>
                </Link>
              </div>
          );
        })
    ) : (
        <div className="center">No posts yet</div>
    );
    return (
        <div className="container">
          <h4 className="center">Home</h4>
          <div className="home">{postList}</div>
        </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);