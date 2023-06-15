import { render } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

import { PageTitle } from './PageTitle';

describe('PageTitle', () => {
  it('should render the component', () => {
    const CONTENT = 'CONTENT';
    const { getByText } = render(() => <PageTitle>{CONTENT}</PageTitle>);
    expect(getByText(CONTENT)).toBeInTheDocument();
  });
});
