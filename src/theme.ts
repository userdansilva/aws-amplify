import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Inter",
        bg: "gray.900",
        color: "white",
      },
    },
  },
});

export { theme };
