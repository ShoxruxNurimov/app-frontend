import React from "react";
import {PageTemplate} from '../../../components';
import Header from "../../organisms/Header";

const HomePage = () => {
  return (
    <PageTemplate 
      header={<Header/>}
      responsive
    >
      Home
    </PageTemplate>
  );
};

export default HomePage;
