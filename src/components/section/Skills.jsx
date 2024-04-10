/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Skills() {
  return (
    <section id="skills" css={skillsSectionStyle}>
      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Vue</li>
      </ul>
    </section>
  )
}

const skillsSectionStyle = css`
  width: 100%;
  height: calc(100vh - var(--header-height));
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 72px;
  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-top: 24px;
  }
`;