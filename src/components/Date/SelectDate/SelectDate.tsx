import React from 'react';
import styled from "styled-components";
import {DateList} from "components/Date/DateList";
import {MonthControl} from "components/Date/MonthControl";

export const SelectDate: React.FC<{}> = () => {
  return (
      <Container>
        <DateList />
        <MonthControl />
      </Container>
  );
};

const Container = styled.div`
  background: #F6F6F6;
  padding: 10px 0 10px 70px;
`
