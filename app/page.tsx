'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';

const Home = () => {
  const { data: session, isPending: loading } = authClient.useSession();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mx-auto my-6 max-w-md px-4'>
      <div className='space-y-6 text-center'>
        {session == null ? (
          <>
            <h1 className='text-3xl font-bold'>Welcome to our App</h1>
            <Button
              asChild
              size='lg'
            >
              <Link href='/auth/login'>Sign In / Sign Up</Link>
            </Button>
          </>
        ) : (
          <>
            <h1 className='text-3xl font-bold'>Welcome {session.user.name}!</h1>
            <Button
              size='lg'
              variant='destructive'
              onClick={() => authClient.signOut()}
            >
              Sign Out
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
