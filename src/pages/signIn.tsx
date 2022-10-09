import {
  Box,
  Button,
  Center,
  FormControl, FormHelperText, FormLabel, Heading, Input, Stack, Text,
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../hooks/useAuth";

interface FormValues {
  email: string;
  password: string;
}

function SignIn(): JSX.Element {
  const { isAuthenticated, signIn } = useAuth();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const {
    register, handleSubmit, formState: {
      isDirty, isValid, errors,
    },
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <Center height="100vh">
      <Stack width="md" background="gray.800" padding={16} rounded="lg" spacing={10}>
        <Heading>Sign In</Heading>

        <Text>
          {isAuthenticated ? "Authenticated" : "Not Authenticated"}
        </Text>

        <Box as="form" onSubmit={handleSubmit(signIn)}>
          <Stack spacing={10}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" {...register("email")} />
              <FormHelperText>{errors.email?.message}</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register("password")} />
              <FormHelperText>{errors.password?.message}</FormHelperText>
            </FormControl>

            <Button bg="cyan.500" disabled={!isValid && !isDirty} type="submit">Sign in</Button>
          </Stack>
        </Box>
      </Stack>
    </Center>
  );
}

export { SignIn };
