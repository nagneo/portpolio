import Icon from "@mdi/react";
import PropTypes from "prop-types";
import { mdiArrowDown } from "@mdi/js";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import avatarImage from "../../assets/avatar-2.png"; 

export default function MainGate({ goToWorkContent }) {
  return (
    <section id="main" css={mainGateSectionStyle}>
      <div className="main-contents">
        <hgroup className="main-title">
          <span className="animated-text"></span>
          <div className="animated-content">
            <h1 className="animated-intro">
              안녕하세요.
              <br />
              프론트엔드 개발자 김새나입니다.
            </h1>
            <br/>
            <p className="animated-intro-second">
              사용자를 유익하게,
              <br />
              세상을 유익하게 하는 개발자가 되기를 꿈꿉니다.
              <br />
              계단을 오르듯 꾸준히 성장하는 개발자가 되겠습니다.
            </p>
          </div>
        </hgroup>
        <img className="main-profile" alt="profile image" src={avatarImage}></img>
      </div>
      <div css={buttonWrapperStyle}>
        <button className="gate-button" onClick={() => goToWorkContent()}>
          <div>Check out my work</div>
          <Icon className="down-arrow-icon" path={mdiArrowDown} size={1} />
        </button>
      </div>
    </section>
  );
}

MainGate.propTypes = {
  goToWorkContent: PropTypes.func.isRequired
}

const mainGateSectionStyle = css`
  width: 100%;
  height: calc(100vh - var(--header-height));
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 72px;
  .main-contents {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 24px;
    font-size: 1.2rem;
    line-height: 1.7;
    span {
      font-size: 3rem;
      font-weight: 700;
    }
  }
  .main-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }
  .animated-text:before {
    content: "Hello, there!";
    animation: words 1s 1, blink 2s infinite;
    padding-right: 4px;
    border-right: 4px solid #ff7f50;
  }

  @keyframes blink {
    0%,
    49% {
      border-color: transparent; /* 0%~49%에서는 투명 */
    }
    50%,
    100% {
      border-color: #ff7f50; /* 50%~100%에서는 빨간색 */
    }
  }

  @keyframes words {
    0% {
      content: "H";
    }
    8% {
      content: "He";
    }
    16% {
      content: "Hel";
    }
    24% {
      content: "Hell";
    }
    32% {
      content: "Hello";
    }
    40% {
      content: "Hello,";
    }
    48% {
      content: "Hello, ";
    }
    56% {
      content: "Hello, t";
    }
    64% {
      content: "Hello, th";
    }
    72% {
      content: "Hello, the";
    }
    80% {
      content: "Hello, ther";
    }
    90% {
      content: "Hello, there";
    }
    100% {
      content: "Hello, there!";
    }
  }
 
  .animated-intro {
    position: relative;
    top: 100px;
    animation: floatUp 1s forwards;
    opacity: 0;
    animation-delay: 1s; /** animated-text끝나고 */
  }
  .animated-intro-second {
    position: relative;
    top: 100px;
    animation: floatUp 1s forwards;
    opacity: 0;
    animation-delay: 1.5s; /** animated-text + animated-intro 끝나고 */
  }
  @keyframes floatUp {
    from {
      top: 100px;
      opacity: 0;
    }
    to {
      top: 0px;
      opacity: 1;
    }
  }

  .main-profile {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 380px;
    position: relative;
    right: -220px;
    opacity: 0;
    animation: slideIn 1s forwards;
  }

  @keyframes slideIn {
    from {
        right: -220px; /* 시작 위치: 화면 오른쪽 바깥 */
        opacity: 0;
    }
    to {
        right: 0px; /* 종료 위치: 오른쪽 여백 20px */
        opacity: 1;
    }
  }
`;

const buttonWrapperStyle = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @keyframes upAndDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
    border: none;
    background-color: transparent;
    gap: 24px;
    cursor: pointer;
  }
  .down-arrow-icon {
    animation: upAndDown 1s infinite;
  }
`;
