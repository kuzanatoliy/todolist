import { render } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

import { Chip } from './Chip';
import { EChipColorScheme, EChipVariant } from './Chip.types';

describe('Chip', () => {
  it('should render with default state', () => {
    const { container } = render(() => <Chip />);
    expect(container).not.toBeEmptyDOMElement();
    expect(
      container.querySelector(
        `[class*=chip__${EChipVariant.DEFAULT}__${EChipColorScheme.DEFAULT}]`
      )?.textContent
    ).toBe('');
  });

  it('should render component with custom state', () => {
    const CONTENT = 'CONTENT';
    const { container, getByText } = render(() => (
      <Chip
        text={CONTENT}
        variant={EChipVariant.OUTLINED}
        colorScheme={EChipColorScheme.DARK}
      />
    ));
    expect(getByText(CONTENT)).toBeInTheDocument();
    expect(
      container.querySelector(
        `[class*=chip__${EChipVariant.OUTLINED}__${EChipColorScheme.DARK}]`
      )?.textContent
    ).toBe(CONTENT);
  });
});
