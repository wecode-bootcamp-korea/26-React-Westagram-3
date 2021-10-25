import React, { Component } from 'react';
import '../Ripple/Ripple.scss';

class Ripple extends Component {
  render() {
    const box = this.props.commentText3.map(text => <li>{text}</li>);
    // box는 commentText3(댓글이 들어있는 배열)의 데이터값을 하나씩 가져와
    //<li> 태그를 붙여서 리턴해주겠다.
    return (
      <section className="feed-text">
        <div className="feed-text__top">
          <p className="user-id">kanxion</p>
          <p className="user-id__textarea">🏔</p>
        </div>

        <div className="feed-text__bottom">
          <div className="feed-text-ripple">
            <div className="feed-first-ripple">
              <p className="user-id2">we-workout</p>
              <p className="user-id2__textarea">🥇</p>
            </div>
            <ul className="area" id="area">
              {box}
            </ul>
          </div>
          <img
            alt="댓글 검은하트"
            className="feed-image heart-bck repl-heart"
            id="heart-bck"
            src="/images/jwKang//heart.png"
          />
        </div>
        <p className="feed-text__bottom-time">42분 전</p>
      </section>
    );
  }
}

export default Ripple;
