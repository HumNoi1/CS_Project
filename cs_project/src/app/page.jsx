import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Home',
  description: 'Home page',
};

export default function Home() {
  redirect('/login');
}