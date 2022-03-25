import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import { Doughnut2D, Pie3D } from "./Charts";

const Repos = () => {
  const { repos } = useGlobalContext();

  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});
  console.log(languages);
  const mostUsed = Object.values(languages) //converts object to array
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5); //to showcase most used 5 languages

  // most stars per language

  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars }; //6:Assigning stars value to value property
    })
    .slice(0, 5);

  // dummy data
  // const chartData = [
  //   {
  //     label: "HTML",
  //     value: "46",
  //   },
  //   {
  //     label: "css",
  //     value: "39",
  //   },
  //   {
  //     label: "JavaScript",
  //     value: "14",
  //   },
  // ];
  // console.log(mostUsed);
  return (
    <section className="section">
      <Wrapper className="section-center">
        {/* <ExampleChart data={chartData}></ExampleChart> */}
        <Pie3D data={mostUsed}></Pie3D>
        <div>hi</div>
        <Doughnut2D data={mostPopular}></Doughnut2D>
        <div>there</div>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  /* these are the codes for charts responsiveness */
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
