import { rendor } from '@testing-library/react';
import test from 'test';
import App from '../App';

test('renders Vite + React text',()=>{
    rendor(<App />);
    // const linkElement = screen.getByText(/Vite + React/i);
    // expect(linkElement).toBeInTheDocument();
});