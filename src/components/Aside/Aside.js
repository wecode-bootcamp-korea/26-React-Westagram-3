import React from 'react';
import './Aside.scss';

class Aside extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Aside;
