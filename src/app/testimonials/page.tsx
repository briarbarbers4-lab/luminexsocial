import { Metadata } from 'next';
import TestimonialsPage from './TestimonialsClient';

export const metadata: Metadata = {
  title: 'Client Success Stories | Luminex Social',
  description: 'Hear from the creators and businesses who scaled their content and automated their workflows with Luminex Social.',
};

export default function Page() {
  return <TestimonialsPage />;
}

