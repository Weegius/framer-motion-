import React from "react";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/react";

const CoolButton = ({ children }) => {
  return (
    <>
      <motion.div whileHover={{ scale: 1.1 }}>
        {children.split("").map((letter, index) => (
          <motion.span
            // animate={{ rotate: [0, 360] }}
            // transition={{ duration: 0.2, yoyo: Infinity }}
          >
            <Link
              key={index}
              _hover={{ cursor: "pointer", color: "#f74239" }}
              style={{ textDecoration: "none" }}
            >
              {letter}
            </Link>
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};
export default CoolButton;
