import { Flex } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
const Box = () => {
  return (
    <motion.div
      animate={{
        scale: [1.5, 0.85],
      }}
      transition={{ duration: 2 }}
    >
      <Flex w={['400px', '700px', '800px', '1000px', '1500px', '1500px']} h={"100vh"} bg="red.500" justify={"right"}>
        {/* <Flex w={'800px'} h={'auto'} bg='gray.100' >Hello</Flex> */}
      </Flex>
    </motion.div>
  );
};
export default Box;
