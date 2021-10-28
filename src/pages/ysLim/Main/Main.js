import React, { Component } from 'react';
import Feed from './Feed/Feed';
import StoryList from './Aside/StoryList';
import RecommendList from './Aside/RecommendList';
import Info from './Aside/Footer/Footer';
import './Main.scss';

class MainLim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
      comments: [],
    };
  }

  componentDidMount() {
    this.getFeedData();
    this.getCommentData();
  }

  getFeedData() {
    fetch('http://localhost:3000/data/ysLim/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });
  }

  getCommentData() {
    fetch('http://localhost:3000/data/ysLim/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          comments: data,
        });
      });
  }

  addComment = (feedId, comment) => {
    const { comments } = this.state;
    const newComment = {
      id: Math.floor(Math.random() * 2000),
      feedId: feedId,
      userName: 'mincraft_bangbang',
      content: comment,
      isLiked: false,
    };
    this.setState({ comments: [...comments, newComment] });
  };

  render() {
    const { comments, feeds } = this.state;
    return (
      <main className="main-page-ysLim">
        <article>
          {feeds.map(feed => (
            <Feed
              key={feed.id}
              id={feed.id}
              comments={comments}
              addComment={this.addComment}
            />
          ))}
        </article>
        <aside>
          <section className="my-profile">
            <img
              className="profile"
              src={process.env.PUBLIC_URL + '/images/ysLim/main/profile3.png'}
              alt="mincraft_bangbang profile"
            />
            <div className="my-username">
              <span className="username">mincraft_bangbang</span>
              <br />
              <span className="sub-my-username">Mincraft | 마크 자바버전</span>
            </div>
          </section>
          <StoryList />
          <RecommendList />
          <Info />
        </aside>
      </main>
    );
  }
}

export default MainLim;
