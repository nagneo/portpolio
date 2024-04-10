/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // 현재 스크롤 위치 가져오기
    const scrollPosition = window.scrollY || window.pageYOffset;
    const header = document.querySelector(".header-content");
    
    // 스크롤 위치가 맨 위인지 확인
    if (scrollPosition === 0) {
      header.classList.remove('visible-element');
      header.classList.add('hidden-element');
    } else {
      header.classList.remove('hidden-element');
      header.classList.add('visible-element');
    }
  };

  return (
    <header css={headerStyle}>
      <div className="header-content hidden-element">
        <div className="header-title">SN.</div>
        <nav>
          <ul>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#about">Background</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

const headerStyle = css`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  margin: auto 0;
  z-index: var(--header-z-index);
  .header-content {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: auto;
    background-color: var(--dark-theme-background);
  }
  .visible-element {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    visibility: visible;
  }
  .hidden-element {
    opacity: 0;
    visibility: hidden;
  }
  .header-title {
    font-size: 2rem;
    font-weight: 700;
  }
  ul {
    display: flex;
    flex-direction: row;
    gap: 24px;
    li {
      a {
        text-decoration: none;
        color: var(--dark-theme-text);
        font-size: 1.2rem;
        font-weight: 700;
      }
    }
  }
  @media (prefers-color-scheme: light) {
    background-color: var(--light-theme-background);
  }
`;
