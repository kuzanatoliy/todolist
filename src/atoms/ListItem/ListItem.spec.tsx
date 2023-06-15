import { render } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

import { ListItem } from './ListItem';

describe('ListItem', () => {
  it('should render the component', () => {
    const CONTENT = 'CONTENT';
    const { getByText } = render(() => <ListItem>{CONTENT}</ListItem>);
    expect(getByText(CONTENT)).toBeInTheDocument();
  });
});
