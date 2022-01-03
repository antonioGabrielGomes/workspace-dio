import React from "react";
import { Container, Box, BoxTitle, BoxText } from "./HomeStyles";

interface BoxData {
  id: number;
  title: string;
  text: string;
  bgColor: string;
}

interface HomeProps {
  boxData: Array<BoxData>;
}

const Home: React.FC<HomeProps> = ({ boxData }) => {
  return (
    <Container>
      {boxData.map((box: BoxData) => (
        <Box key={box.id} bgColor={box.bgColor}>
            <BoxTitle>{box.title}</BoxTitle>
            <BoxText>{box.text}</BoxText>
        </Box>
      ))}
    </Container>
  );
};

export default Home;
