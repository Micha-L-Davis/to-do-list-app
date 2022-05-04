import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../app'
import SettingsProvider from '../context/settings'
import SettingsContext from '../context/settings'

describe('To-Do App Tests', () => {
  render(
    <SettingsProvider>
      <App />
      <SettingsContext.Consumer>
        {({ settings, settingsDispatch }) => {
          <>
            <button
              data-testid='toggle-button'
              onClick={(() => settingsDispatch({
                type: 'TOGGLE_HIDE',
                payload: !settings.hideCompleted
              }))}
            ></button>
            <button
              data-testid='number-set'
              onClick={(() => settingsDispatch({
                type: 'DISPLAY_NUM',
                payload: 4,
              }))}
            ></button>
          </>
        }}
      </SettingsContext.Consumer>
    </SettingsProvider>
  )
  let form = screen.getByTestId('form');


  it('should render three items and hide the fourth', () => {
    fireEvent.submit(form, { target: { text: 'test 1', assignee: 'test person', difficulty: 1 } })
    fireEvent.submit(form, { target: { text: 'test 2', assignee: 'test person', difficulty: 2 } })
    fireEvent.submit(form, { target: { text: 'test 3', assignee: 'test person', difficulty: 3 } })
    fireEvent.submit(form, { target: { text: 'test 4', assignee: 'test person', difficulty: 4 } })

    let firstElement = screen.getByTestId('element-0');
    let lastElement = screen.getByTestId('element-2');

    expect(firstElement).toBeTruthy();
    expect(lastElement).toBeTruthy();
  });
  it('should reveal the fourth when the display num is increased', () => {
    const button = screen.getByTestId('number-set');
    fireEvent.click(button);
    let hiddenElement = screen.getByTestId('element-3')

    expect(hiddenElement).toBeTruthy();
  });
});

