import { Flex } from "@chakra-ui/react";
import AnimatedWord from "./components/storage";
import RotatedText from "./components/test";
import "./style.css";

function App() {
  return (
    <Flex w="100%" h="100vh" align={"center"} justify="center">
      {/* <RotatedText>Test</RotatedText> */}
      <AnimatedWord word="Test" />
    </Flex>
  );
}

export default App;
