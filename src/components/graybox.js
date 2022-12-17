import { Flex } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const GrayBox = ({ isVisible }) => {
  return (
    <>
      <motion.div
        style={{ overflow: "hidden" }}
        initial={{ width: 0, opacity: 1 }}
        animate={{ width: "auto", opacity: 1 }}
        transition={{ duration: 1, delay: 2.3 }}
      >
        <Flex overflow={'hidden'} w={"600px"} h={"100.06%"} bg="gray.100"></Flex>
      </motion.div>
    </>
  );
};
export default GrayBox;
