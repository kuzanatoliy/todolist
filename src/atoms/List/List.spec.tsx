import { render } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

import { List } from './List';

describe('List', () => {
  it('should render the component', () => {
    const CONTENT = 'CONTENT';
    const { getByText } = render(() => <List>{CONTENT}</List>);
    expect(getByText(CONTENT)).toBeInTheDocument();
  });
});
