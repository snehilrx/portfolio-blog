import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Hero />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
