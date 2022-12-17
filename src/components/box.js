import { Flex } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import GrayBox from "./graybox";
const Box = () => {
  return (
    <motion.div
      animate={{
        scale: [1.5, 1],
      }}
      transition={{ duration: 2 }}
      style={{width: "100%", height: "100%"}}
    >
      <Flex w={['400px', '700px', '800px', '100%', ]} h={"100%"} bg="#f74239" justify={"right"}  >
        <GrayBox />
      </Flex>
    </motion.div>
  );
};
export default Box;
