import { Flex } from "@chakra-ui/react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const GrayBox = ({ isVisible }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0,  }}
        animate={{ opacity: 1,}}
        transition={{ duration: 0.5, delay:2.3 }}
      >
        <Flex w={"600px"} h={"100.04%"} bg="gray.100">
          
        </Flex>
      </motion.div>
    </>
  );
};
export default GrayBox;