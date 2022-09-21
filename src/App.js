import { Flex } from "@chakra-ui/react";
import Box from "./components/box";
import "./style.css";
// import GrayBox from './components/graybox';

function App() {
  return (
    <Flex
      w={"100%"}
      h={"100vh"}
      justify="center"
      align={"center"}
    >
      <Box />
      {/* <GrayBox /> */}
    </Flex>
  );
}

export default App;
