/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Layout from "@components/Layout";

import Icon from "@mdi/react";
import { mdiMapMarker, mdiEmailOutline, mdiPhone, mdiGithub, mdiAlphaVCircle, mdiLinkedin } from "@mdi/js";
import profileImage from "@images/profile-transparent.png";

export default function Contact() {
  return (
    <Layout id="contact" title={"Contact"}>
      <div css={contactContentStyle}>
        <div className="profile-image__wrapper">
          <img alt="profile image" src={profileImage}></img>
        </div>
        <div>
          <ul className="contact-list">
            <li>
              <Icon path={mdiMapMarker} size={1} />
              <div>Seoul, South Korea</div>
            </li>
            <li>
              <Icon path={mdiEmailOutline} size={1} />
              <a href="mailto:tosk3927@gmail.com">tosk3927@gmail.com</a>
            </li>
            <li>
              <Icon path={mdiPhone} size={1} />
              <a href="tel:010-7731-6767">010-7731-6767</a>
            </li>
          </ul>
          <ul className="social-list">
            <li>
              <Icon path={mdiGithub} size={1} />
              <a href="https://github.com/nagneo">Git</a>
            </li>
            <li>
              <Icon path={mdiAlphaVCircle} size={1} />
              <a href="https://velog.io/@nagneo/posts">Blog</a>
            </li>
            <li>
              <Icon path={mdiLinkedin} size={1} />
              <a href="https://www.linkedin.com/in/saena-kim-a775b2147/">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

const contactContentStyle = css`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: center;
  align-items: center;
  gap: 72px;
  margin-top: 72px;
  .profile-image__wrapper {
    width: 320px;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      background-color: var(--beige);
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .contact-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 24px;
      gap: 8px;
    }
  }
  .social-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-right: 12px;
      gap: 8px;
    }
  }
`;
