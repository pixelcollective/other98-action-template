module.exports = {
  title: 'Medicare is for everyone',
  callToAction: 'Take action',
  action: 'add-your-name-no-more-endless-wars',
  content: `
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
  `,
  copyright: 'Medicare for All',
  logos: [
    {
      icon: 'o98',
      name: 'Other98',
      url: 'https://other98.com',
    },
    {
      icon: '',
      name: 'Twitter',
      url: 'https://twitter.com/onlyanubhav',
    },
  ],
  theme: {
    breakpoints: [`40em`, `52em`, `64em`],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
    colors: {
      blue: `#07c`,
      lightgray: `#f6f6ff`,
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    fonts: {
      body: `system-ui, sans-serif`,
      heading: `system-ui, sans-serif`,
      monospace: `Menlo, monospace`,
    },
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.25,
    },
    shadows: {
      small: `0 0 4px rgba(0, 0, 0, .125)`,
      large: `0 0 24px rgba(0, 0, 0, .125)`,
    },
    variants: {},
    text: {},
    buttons: {
      primary: {
        color: `white`,
        bg: `primary`,
      },
    },
  },
};
