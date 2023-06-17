import { render } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

import { Card } from './Card';

describe('Card', () => {
  it('should render the component', () => {
    const CONTENT = 'CONTENT';
    const { getByText } = render(() => <Card>{CONTENT}</Card>);
    expect(getByText(CONTENT)).toBeInTheDocument();
  });
});
