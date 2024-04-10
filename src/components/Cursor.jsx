import { useEffect } from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Cursor() {
  useEffect(() => {
    // 클릭할때 ripple 생성
    document.addEventListener("mousemove", movingCursor);
    document.addEventListener("click", createRipple);
    return () => {
      document.removeEventListener("mousemove", movingCursor);
      document.removeEventListener("click", createRipple);
    }
  }, []);

  // cursor를 이동하는 event listener 함수
  const movingCursor = (e) => {
    const cursorDefaultInner = document.querySelector(
      ".cursor__default__inner"
    );
    const cursorTraceInner = document.querySelector(".cursor__trace__inner");

    cursorDefaultInner.style.top = e.clientY + "px";
    cursorDefaultInner.style.left = e.clientX + "px";

    cursorTraceInner.style.top = e.clientY + "px";
    cursorTraceInner.style.left = e.clientX + "px";
  };

  // 물결 요소 만들어서 넣었다가 사라지게 하는 함수
  const createRipple = (e) => {
    const cursor = document.querySelector(".cursor");
    let ripple = document.createElement("span");
    ripple.classList.add("ripple");

    cursor.appendChild(ripple);

    ripple.style.top = e.clientY - ripple.clientHeight / 2 + "px";
    ripple.style.left = e.clientX - ripple.clientWidth / 2 + "px";

    ripple.addEventListener("animationend", () => {
      cursor.removeChild(ripple);
    });
  };

  return (
    <div css={cursorStyle}>
      <div className="cursor">
        <div className="cursor__default">
          <span className="cursor__default__inner"></span>
        </div>
      </div>
    </div>
  );
}

const cursorStyle = css`
  .cursor {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    pointer-events: none !important;
  }

  .cursor__default__inner {
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: rgba(10, 27, 16, 2.5);
    border: 2px solid var(--beige);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  .cursor__trace__inner {
    position: absolute;
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.25);
    transform: translate(-50%, -50%);
    transition: all 0.04s ease;
  }

  .cursor--active .cursor__trace__inner {
    transform: scale(0.5) translate(-100%, -100%);
    transition: transform 0.3s ease;
  }

  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    20% {
      transform: scale(5);
      opacity: 1;
    }
    100% {
      transform: scale(10);
      opacity: 0;
    }
  }

  .ripple {
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--beige);
    animation: ripple 0.5s ease-out;
    animation-fill-mode: forwards;
    z-index: -1;
  }
`;
