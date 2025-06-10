import { Button, Field, Input, Stack } from "@chakra-ui/react";

export default function ContactForm() {
  return (
    <form>
      <Stack gap={4}>
        <Field.Root>
          <Field.Label>First Name</Field.Label>
          <input />
        </Field.Root>
        <Field.Root>
          <Field.Label>Last Name</Field.Label>
          <input />
        </Field.Root>
        <Field.Root>
          <Field.Label>Email Address</Field.Label>
          <input />
        </Field.Root>
        <Field.Root>
          <Field.Label>Phone Number</Field.Label>
          <input />
        </Field.Root>
        <Button>Submit</Button>
      </Stack>
    </form>
  );
}
