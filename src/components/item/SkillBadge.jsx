import PropTypes from "prop-types";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function SkillBadge({ skill, onClick, isSelected }) {
  return (
    <div css={skillItemContainer} onClick={() => onClick(skill)} selected={`${isSelected}`}>
      <div className="img-wrapper">
        <img src={skill.img} alt={skill.name} />
      </div>
      <div className="skill-name">{skill.name}</div>
    </div>
  );
}

SkillBadge.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

const skillItemContainer = css`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  .img-wrapper {
    background: #fafaf0;
    padding: 12px;
    border-radius: 50%;
    width: 104px;
    height: 104px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 10px solid #484848;
    img {
      width: 72px;
      object-fit: cover;
      transition: all .2s ease-in-out;
    }
    :hover {
      img {
        transform: scale(1.1);
      }
      .skill-name {
        text-decoration: underline;
      }
    }
  }
  .selected {
    img {
      scale: 1.1;
    }
  }
  .skill-name {
    font-size: 1rem;
    font-weight: 700;
  }
`;
