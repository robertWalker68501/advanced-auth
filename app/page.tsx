import Link from 'next/link';

import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className='mx-auto my-6 max-w-md px-4'>
      <div className='space-y-6 text-center'>
        <h1 className='text-3xl font-bold'>Welcome to our App</h1>
        <Button
          asChild
          size='lg'
        >
          <Link href='/auth/login'>Sign In / Sign Up</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
