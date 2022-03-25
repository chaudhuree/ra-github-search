import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import { Pie3D } from "./Charts";

const Repos = () => {
  const { repos } = useGlobalContext();
  const chartData = [
    {
      label: "HTML",
      value: "46",
    },
    {
      label: "css",
      value: "39",
    },
    {
      label: "JavaScript",
      value: "14",
    },
  ];

  return (
    <section className="section">
      <Wrapper className="section-centre">
        {/* <ExampleChart data={chartData}></ExampleChart> */}
        <Pie3D data={chartData}></Pie3D>
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
  }import ExampleChart from './Charts/ExampleChart';

`;

export default Repos;
