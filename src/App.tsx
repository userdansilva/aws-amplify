import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { router } from "./routes";
import { theme } from "./theme";

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
