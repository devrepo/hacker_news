import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import App from './app/app';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import store from './app/store';
import { Board } from './hacker_feed';
import './index.scss';

afterEach(cleanup);


const renderComponent = () => {
  const comp = render(
    <BrowserRouter><App /></BrowserRouter>
  );
  return comp;
}

const renderPage2 = () => {
  const comp = render(
    <MemoryRouter initialEntries={["/?page=2"]}>
      <App />
    </MemoryRouter>
  );
  return comp
}

it('Renders default app', () => {
  const { getByText } = renderComponent();
  const linkElement = getByText(/Comments/i);
  expect(linkElement).toBeInTheDocument();
});

  
it('Next Page', async () => {
    const { getAllByTestId, getByTestId } = renderComponent(); 
    
    //check for first element
    const linkElements = await waitForElement(() => getAllByTestId("1")) 
    expect(linkElements[0]).toBeInTheDocument();
    
    //Go to next page
    fireEvent.click(getByTestId('next'))

    //Check first element of next page
    const linkElementsInNextPage = await waitForElement(() => getAllByTestId("31")) 
    expect(linkElementsInNextPage[0]).toBeInTheDocument();
});

it("Test random page rendering", async () => {
    const { getAllByTestId, getByTestId } = renderPage2();

    //check for first element on page 2 (which is actually 3rd page)
    const linkElements = await waitForElement(() => getAllByTestId("61")) 
    expect(linkElements[0]).toBeInTheDocument();
});