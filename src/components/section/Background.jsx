import Layout from "@components/Layout";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Background() {
  return (
    <Layout id="background" title={"Background"}>
      <div css={backgroundStyle} className="background-content">
        <div className="background-item">
          <h3><bold>🎓</bold> Education</h3>
          <p>
            <strong></strong>
          </p>
        </div>
        <div className="background-item">
          <h3><bold>💼</bold> Experience</h3>
          <p>
            <strong></strong>
          </p>
        </div>
      </div>
    </Layout>
  );
}

const backgroundStyle = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  gap: 72px;
  margin-top: 72px;
  .background-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    bold {
      margin-right: 8px;
    }
    h3 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 12px;
    }
    p {
      font-size: 1.6rem;
      font-weight: 400;
      margin-bottom: 24px;
    }
  }
`;
