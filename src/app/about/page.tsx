import { Metadata } from 'next';
import AboutPage from './AboutClient';

export const metadata: Metadata = {
  title: 'About Luminex Social | Our Story and Vision',
  description: 'Learn about Luminex Social, our mission to transform brands through storytelling and digital innovation since 2020.',
};

export default function Page() {
  return <AboutPage />;
}

