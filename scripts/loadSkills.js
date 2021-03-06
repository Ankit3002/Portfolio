const loadSkills = () => {
  const skillselement = document.querySelector(
    "section#skills .skills-container"
  );

  const frontendElement = skillselement.querySelector(
    ".frontend .domain-skills-container"
  );
  const backendElement = skillselement.querySelector(
    ".backend .domain-skills-container"
  );
  const toolsElement = skillselement.querySelector(
    ".tools .domain-skills-container"
  );

  fetch("./assets/data/skills.json").then(async (response) => {
    const data = await response.json();
    const allSkills = data.skills;
    console.log(allSkills);

    allSkills.forEach((skillObj) => {
      const type = skillObj.type;
      const skills = skillObj.skills;

      const skillTypeElement = document.createElement("div");
      skillTypeElement.classList.add(type);
      const header = document.createElement("h2");
      header.innerText = type;

      const domainSkillsContainer = document.createElement("div");
      domainSkillsContainer.classList.add("domain-skills-container");

      skills.forEach((skill) => {
        const skillCard = createSkillCard(skill);
        domainSkillsContainer.appendChild(skillCard);
      });

      // For Categorisation
      // skillTypeElement.appendChild(header);
      skillTypeElement.appendChild(domainSkillsContainer);

      skillselement.appendChild(skillTypeElement);
    });
  });
};

const createSkillCard = ({ name, faclass, img }) => {
  const skillCard = document.createElement("div");
  const logo = document.createElement("img");
  logo.src = img;
  logo.loading = "lazy";

  const nameElement = document.createElement("p");
  nameElement.innerText = name;

  skillCard.appendChild(logo);
  skillCard.appendChild(nameElement);
  skillCard.classList.add("skill-card");

  return skillCard;
};

loadSkills();
