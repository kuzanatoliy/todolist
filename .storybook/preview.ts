import 'src/theme.scss';

const preview = {
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
