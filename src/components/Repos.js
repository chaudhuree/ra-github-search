import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import { Pie3D } from "./Charts";


const Repos = () => {
  const { repos } = useGlobalContext();

  const languages = repos.reduce((total, item) => {
    const { language } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1};
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1
      };
    }
    return total;
  }, {});
console.log(languages);
  const mostUsed = Object.values(languages) //converts object to array
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);   //to showcase most used 5 languages 
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
