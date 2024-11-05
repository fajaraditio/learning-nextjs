import LoginPage from './page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login Dashboard',
};

export default function Layout() {
  return <LoginPage />;
}
