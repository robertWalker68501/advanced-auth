'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';

const signUpSchema = z.object({
  name: z.string().min(1),
  email: z.email().min(1),
  password: z.string().min(6),
});

type SignUpForm = z.infer<typeof signUpSchema>;

const SignUpTab = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: SignUpForm) => {
    console.log(data);
  };

  return (
    <form
      id='sign-up-form'
      onSubmit={form.handleSubmit(onSubmit)}
      className='max-w-lg'
    >
      <FieldGroup>
        <Controller
          name='name'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor='sign-up-form-name'>Name</FieldLabel>
              <Input
                {...field}
                type='text'
                id='sign-up-form-name'
                aria-invalid={fieldState.invalid}
                placeholder='John Doe'
                autoComplete='name'
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name='email'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor='sign-up-form-email'>Email</FieldLabel>
              <Input
                {...field}
                type='email'
                id='sign-up-form-email'
                aria-invalid={fieldState.invalid}
                placeholder='john.doe@example.com'
                autoComplete='email'
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name='password'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor='sign-up-form-password'>Password</FieldLabel>
              <Input
                {...field}
                id='sign-up-form-password'
                aria-invalid={fieldState.invalid}
                placeholder='********'
                autoComplete='off'
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Field
        orientation='horizontal'
        className='mt-5'
      >
        <Button
          type='submit'
          form='sign-up-form'
          disabled={loading}
          className='w-full'
        >
          {loading ? <Loader2 /> : 'Sign Up'}
        </Button>
      </Field>
    </form>
  );
};

export default SignUpTab;
