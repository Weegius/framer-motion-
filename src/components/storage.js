import { Box, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const AnimatedWord = ({word}) => {
  const degrees = [23, -30, 18, -25, 38];
  const [hover, setHover] = useState(false);

  // useEffect(() => {
  //   console.log(hover);
  // }, [hover]);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      w={"100%"}
      // bg={"red"}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        // bg={"red"}
        p={1}
        _hover={{
          cursor: "pointer",
          letterSpacing: "5px",
          color: "red",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        w={"auto"}
        h={"auto"}
      >
        {[...word].map((letter, index) => (
          <Link
            key={index}
            as="span"
            fontSize="2em"
            lineHeight="1em"
            style={{
              transform: hover ? `rotate(${degrees[index]}deg)` : "rotate(0deg",
              textDecoration: "none",
            }}
            // fontWeight="bold"
            textAlign="center"
            transition="all 0.3s ease-out"
          >
            {letter}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default AnimatedWord;
