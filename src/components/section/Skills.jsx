import { useState } from "react";
import Layout from "@components/Layout";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SkillBadge from "@components/item/SkillBadge";

import htmlIcon from "@images/html.png";
import cssIcon from "@images/css.png";
import jsIcon from "@images/js.png";
import reactIcon from "@images/react.png";
import vueIcon from "@images/vue.png";

export default function Skills() {
  const initSkill = [
    {
      name: "default",
      desc: ["Select a skill to view more"],
    },
    {
      name: "HTML",
      desc: ["HyperText Markup Language"],
    },
    {
      name: "CSS",
      img: cssIcon,
      desc: ["Cascading Style Sheets"],
    },
    {
      name: "JavaScript",
      desc: ["JavaScript"],
    },
    {
      name: "React",
      desc: ["React"],
    },
    {
      name: "Vue",
      desc: ["Vue"],
    },
  ];
  const [selectedSkill, setSelectedSkill] = useState("HTML");

  const onClickSkill = (skill) => {
    setSelectedSkill(skill.name);
  };

  return (
    <Layout id="skills" title={"Skills"}>
      <div css={skillsContentStyle}>
        <div className="skill-list">
          <div className="skill-row">
            <SkillBadge
              skill={{ name: "HTML", img: htmlIcon }}
              onClick={onClickSkill}
              isSelected={selectedSkill === "HTML"}
            />
            <SkillBadge
              skill={{ name: "CSS", img: cssIcon }}
              onClick={onClickSkill}
              isSelected={selectedSkill === "CSS"}
            />
            <SkillBadge
              skill={{ name: "JavaScript", img: jsIcon }}
              onClick={onClickSkill}
              isSelected={selectedSkill === "JavaScript"}
            />
          </div>
          <div className="skill-row">
            <SkillBadge
              skill={{ name: "React", img: reactIcon }}
              onClick={onClickSkill}
              isSelected={selectedSkill === "React"}
            />
            <SkillBadge
              skill={{ name: "Vue", img: vueIcon }}
              onClick={onClickSkill}
              isSelected={selectedSkill === "Vue"}
            />
          </div>
        </div>
        <div className="skill-desc">
          {initSkill.map((skill) => {
            if (skill.name === selectedSkill) {
              return (
                <div key={skill.name}>
                  <h3>{skill.name}</h3>
                  <p>{skill.desc}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </Layout>
  );
}

const skillsContentStyle = css`
  width: 100%;
  min-height: 420px;
  display: grid;
  grid-template-columns: 1fr auto;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  margin-top: 72px;
  gap: 72px;
  .skill-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
  .skill-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
  }
  .more-wrapper {
    background: #fafafa;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 10px solid #484848;
    cursor: pointer;
    color: red;
  }
  .skill-desc {
    min-width: 300px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    color: var(--light-theme-color);
    border-radius: 8px;
  }
`;
