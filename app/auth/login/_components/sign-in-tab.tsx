'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { authClient } from '@/lib/auth-client';

const signInSchema = z.object({
  email: z.email().min(1),
  password: z.string().min(6),
});

type SignInForm = z.infer<typeof signInSchema>;

const SignInTab = () => {
  const router = useRouter();

  const form = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: SignInForm) => {
    await authClient.signIn.email(
      { ...data },
      {
        onSuccess: () => {
          toast.success('Sign in was successful');
          router.push('/');
        },
        onError: (error) => {
          toast.error(error.error.message || 'Failed to sign in');
        },
      }
    );
  };

  return (
    <form
      id='sign-in-form'
      onSubmit={form.handleSubmit(onSubmit)}
      className='max-w-lg'
    >
      <FieldGroup className='mt-5'>
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
                type='password'
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
          form='sign-in-form'
          disabled={isSubmitting}
          className='w-full'
        >
          {isSubmitting ? <Loader2 /> : 'Sign In'}
        </Button>
      </Field>
    </form>
  );
};

export default SignInTab;
