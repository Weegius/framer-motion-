import React from "react";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/react";

const AnimatedWord = ({ children }) => {
  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.1,
          color: "#e63946",
          cursor: "pointer",
          letterSpacing: "5px",
        }}
      >
        <Link
          to="projects"
          _hover={{ cursor: "pointer" }}
          style={{ textDecoration: "none" }}
          display="inline-block"
        >
          {children}
        </Link>
      </motion.div>
    </>
  );
};
export default AnimatedWord;
