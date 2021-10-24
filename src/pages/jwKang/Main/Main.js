import React, { Component } from 'react';
import './Main.scss';

class MainKang extends Component {
  goLogin = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.history.push('/Login-jw');
  };
  render() {
    return (
      <div className="body">
        <div className="total">
          <nav className="nav-bar nav-bar-jw">
            <div className="nav-bar__left" onClick={this.goLogin}>
              <img
                alt="인스타로고"
                className="feed-image insta-logo"
                src="/images/jwKang/instagram.png"
              />
              <div className="thinLine" />
              <h2 className="westagram">Westagram</h2>
            </div>

            <div className="nav-bar__mid">
              <input className="nav-bar__mid" placeholder="검색" />
            </div>

            <div className="nav-bar__right">
              <img
                alt="컴퍼스"
                className="feed-image compass"
                src="/images/jwKang/compass.png"
              />
              <img
                alt="검은하트"
                className="feed-image heart-bck"
                src="/images/jwKang/heart.png"
              />
              <img
                alt="사람"
                className="feed-image people"
                src="/images/jwKang/user.png"
              />
            </div>
          </nav>

          <div className="main-layout">
            <main className="insta-main">
              <section className="feed-top">
                <div className="feed-top__left">
                  <div className="feed-profile__picture" />
                  <p className="feed-profile__id">kanxion</p>
                </div>
                <img
                  alt="menu"
                  className="feed-image feed-top__menu"
                  src="/images/jwKang//menu.png"
                />
              </section>

              <img
                alt="피드사진"
                className="my-picture"
                src="/images/jwKang//my-picture.jpg"
              />

              <section className="feed-mid">
                <div className="feed-mid__left">
                  <img
                    alt="red-heart"
                    className="feed-image heart-red"
                    src="/images/jwKang//heart-red.png"
                  />
                  <img
                    alt="chat"
                    className="feed-image chat"
                    src="/images/jwKang//chat.png"
                  />
                  <img
                    alt="upload"
                    className="feed-image upload"
                    src="/images/jwKang//upload.png"
                  />
                </div>
                <img
                  alt="bookmark"
                  className="feed-image feed-mid__right"
                  src="/images/jwKang//save-instagram.png"
                />
              </section>

              <section className="feed-third">
                <img
                  alt="travis scott"
                  className="another-profile__picture scott"
                  src="/images/jwKang//tavis-scott.jpg"
                />
                <p>travis scott님 외 199,200명이 좋아합니다</p>
              </section>

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
                    <ul className="area" id="area" />
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

              <section className="rippleBox" id="rippleBox">
                <input
                  type="text"
                  maxLength="10"
                  placeholder="댓글 달기..."
                  className="comment"
                  id="comment"
                />
                <button className="posting-btn" id="posting-btn">
                  게시
                </button>
              </section>
            </main>

            <aside>
              <section className="aside-top">
                <img
                  alt="위코드로고"
                  className="wecode-logo"
                  src="/images/jwKang//wecode-logo.png"
                />
                <div className="wecode-name">
                  <p>wecode_bootcamp</p>
                  <p>WeCode | 위코드</p>
                </div>
              </section>

              <section className="insta-story">
                <div className="story-top">
                  <p className="story-id">스토리</p>
                  <p className="story-info">모두 보기</p>
                </div>

                <div className="story-main story-main-first">
                  <div className="story-main__pic story-main__pic1" />
                  <div className="story-main__user1">
                    <p>egun_motchamji</p>
                    <p>1분 전</p>
                  </div>
                </div>

                <div className="story-main story-main-second">
                  <div className="story-main__pic story-main__pic2" />
                  <div className="story-main__user2">
                    <p>gudok_joayo</p>
                    <p>3시간 전</p>
                  </div>
                </div>

                <div className="story-main story-main-third">
                  <div className="story-main__pic story-main__pic3" />
                  <div className="story-main__user3">
                    <p>git_so_hard</p>
                    <p>18시간 전</p>
                  </div>
                </div>

                <div className="story-main story-main-fourth">
                  <div className="story-main__pic story-main__pic4" />
                  <div className="story-main__user4">
                    <p>window_user</p>
                    <p>1일 전</p>
                  </div>
                </div>
              </section>

              <section className="recommend">
                <div className="recommend-top">
                  <p className="recommend-user">회원님을 위한 추천</p>
                  <p className="recommend-look">모두 보기</p>
                </div>

                <div className="recommend-main recommend-main-first">
                  <div className="recommend-main__pic recommend-main__pic1" />
                  <div className="recommend-main__user1">
                    <p>fe_developer</p>
                    <p>legeno님 외 2명이...</p>
                  </div>
                  <button className="follow-btn">팔로우</button>
                </div>

                <div className="recommend-main recommend-main-second">
                  <div className="recommend-main__pic recommend-main__pic2" />
                  <div className="recommend-main__user2">
                    <p>a__baegopuda</p>
                    <p>pizza님 외 12명이...</p>
                  </div>
                  <button className="follow-btn">팔로우</button>
                </div>

                <div className="recommend-main recommend-main-third">
                  <div className="recommend-main__pic recommend-main__pic3" />
                  <div className="recommend-main__user3">
                    <p>domang_chyeo</p>
                    <p>guard님 외 7명이...</p>
                  </div>
                  <button className="follow-btn">팔로우</button>
                </div>
              </section>

              <section className="copyright">
                <p className="copyright-Paragraph">
                  Instagram 정보 · 지원 · 홍보 센터 · API ·
                </p>
                <p className="copyright-Paragraph">
                  채용 정보 · 개인정보처리방침 · 약관 ·
                </p>
                <p className="copyright-Paragraph">
                  디렉터리 · 프로필 · 해시태그 · 언어
                </p>
                <p className="copyright-Paragraph">ⓒ 2021 INSTAGRAM</p>
              </section>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default MainKang;
