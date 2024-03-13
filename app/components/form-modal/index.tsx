import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

export default function FormModal() {
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSubmit = (
    values: any,
    actions: { setSubmitting: (arg0: boolean) => void }
  ) => {
    setTimeout(() => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
      actions.setSubmitting(false);

      toast({
        title: "Submitted successfully",
        description: "You have already submit your feedback, Thank you.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      onClose();
    }, 1000);
  };
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please submit your feedback</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
              {(props) => (
                <Form>
                  <Field name="name">
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel>Name</FormLabel>
                        <Input {...field} placeholder="name" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  {/* email */}
                  <Field name="email">
                    {({ field, form }: any) => (
                      <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input {...field} />
                      </FormControl>
                    )}
                  </Field>
                  {/* message */}
                  <Field name="message">
                    {({ field, form }: any) => (
                      <FormControl>
                        <FormLabel>Message</FormLabel>
                        <Textarea {...field} />
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    mt={4}
                    colorScheme="teal"
                    isLoading={props.isSubmitting}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
