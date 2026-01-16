import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { ButtonPrimary } from "@components/compositions/ui/button";
import { Field } from "@components/compositions/ui/field";
import { TextInput, EmailInput } from "@components/compositions/ui/input";
import { Stack } from "@components/common/stack";
import { DialogBody, DialogFooter, DialogActionTrigger } from "@components/compositions/ui/dialog";

export const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must not exceed 100 characters" }),
  username: z
    .string()
    .min(1, { message: "Username is required" })
    .max(100, { message: "Username must not exceed 100 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" })
    .max(100, { message: "Email must not exceed 100 characters" }),
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .min(8, { message: "Phone number must be at least 6 characters long" })
    .max(12, { message: "Phone number must not exceed 12 characters" }),
  website: z.string().url({ message: "Please enter a valid URL" }),
});

export function UserForm(props) {
  const { onSubmit: onHandleSubmit, defaultValues, isPending } = props;

  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
    },
  });

  React.useEffect(() => {
    if (defaultValues) {
      reset({
        name: defaultValues.name ?? "",
        username: defaultValues.username ?? "",
        email: defaultValues.email ?? "",
        phone: defaultValues.phone ?? "",
        website: defaultValues.website ?? "",
      });
    } else {
      reset({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
      });
    }
  }, [defaultValues, reset]);

  const onSubmit = handleSubmit((data) => onHandleSubmit(data, setError));

  return (
    <React.Fragment>
      <DialogBody>
        <form id="form-users" noValidate onSubmit={onSubmit}>
          <Stack className="gap-4">
            <Field invalid={!!errors.name} label="Name" errorText={errors.name?.message} required>
              <Controller
                name="name"
                control={control}
                render={({ field }) => <TextInput placeholder="Enter name" {...field} />}
              />
            </Field>
            <Field
              invalid={!!errors.username}
              label="Username"
              errorText={errors.username?.message}
              required
            >
              <Controller
                name="username"
                control={control}
                render={({ field }) => <TextInput placeholder="Enter username" {...field} />}
              />
            </Field>
            <Field
              invalid={!!errors.email}
              label="Email"
              errorText={errors.email?.message}
              required
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => <EmailInput placeholder="Enter email" {...field} />}
              />
            </Field>
            <Field
              invalid={!!errors.phone}
              label="Phone Number"
              errorText={errors.phone?.message}
              required
            >
              <Controller
                name="phone"
                control={control}
                render={({ field }) => <TextInput placeholder="Enter phone number" {...field} />}
              />
            </Field>
            <Field invalid={!!errors.website} label="Website" errorText={errors.website?.message}>
              <Controller
                name="website"
                control={control}
                render={({ field }) => <TextInput placeholder="Enter website" {...field} />}
              />
            </Field>
          </Stack>
        </form>
      </DialogBody>
      <DialogFooter>
        <DialogActionTrigger size="sm" />
        <ButtonPrimary disabled={!isValid} form="form-users" loading={isPending} type="submit">
          Save
        </ButtonPrimary>
      </DialogFooter>
    </React.Fragment>
  );
}
