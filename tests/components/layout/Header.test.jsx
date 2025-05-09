import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../../../src/components/layout/Header';
import { BrowserRouter } from 'react-router-dom';

// Mock the useTheme hook
vi.mock('../../../src/hooks/useTheme', () => ({
  default: () => ({
    theme: 'light',
    toggleTheme: vi.fn(),
  }),
}));

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Header', () => {
  it('renders with correct title', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText('Skip Hire')).toBeInTheDocument();
  });

  it('renders theme toggle button', () => {
    renderWithRouter(<Header />);
    const themeButton = screen.getByRole('button', { name: /toggle theme/i });
    expect(themeButton).toBeInTheDocument();
  });

  it('renders with correct layout classes', () => {
    renderWithRouter(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('w-full flex items-center justify-between px-4 py-3');
  });

  it('renders with correct title classes', () => {
    renderWithRouter(<Header />);
    const title = screen.getByText('Skip Hire');
    expect(title).toHaveClass('text-lg font-semibold tracking-wide select-none text-[var(--color-primary)]');
  });

  it('renders with correct theme button classes', () => {
    renderWithRouter(<Header />);
    const themeButton = screen.getByRole('button', { name: /toggle theme/i });
    expect(themeButton).toHaveClass('flex items-center justify-center w-10 h-10 sm:w-9 sm:h-9 rounded-full');
  });
}); 