import SignInTab from '@/app/auth/login/_components/sign-in-tab';
import SignUpTab from '@/app/auth/login/_components/sign-up-tab';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LoginPage = () => {
  return (
    <Tabs
      defaultValue='signin'
      className='my-6 max-w-lg px-4'
    >
      <TabsList>
        <TabsTrigger value='signin'>Sign In</TabsTrigger>
        <TabsTrigger value='signup'>Sign Up</TabsTrigger>
      </TabsList>

      <TabsContent value='signin'>
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl font-bold'>Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <SignInTab />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value='signup'>
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl font-bold'>Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <SignUpTab />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default LoginPage;
