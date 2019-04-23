const snippet = {
  title: "Hover Action",
  description: "Hovers the mouse pointer over a webpage element.",
  code: ["t.hover( selector [, options] )"],
  language: `javascript`,
  example: `import { Selector } from 'testcafe';

  const comboBox = Selector('.combo-box');
  
  fixture \`My fixture\`
      .page \`http://www.example.com/\`;
  
  test('Select combo box value', async t => {
      await t
          .hover(comboBox)
          .click('#i-prefer-both')
          .expect(comboBox.value).eql('Both');
  });`,
  options: `{
      modifiers: {
          ctrl: Boolean,
          alt: Boolean,
          shift: Boolean,
          meta: Boolean
      },
  
      offsetX: Number,
      offsetY: Number,
      destinationOffsetX: Number,
      destinationOffsetY: Number,
      speed: Number
  }`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/actions/hover.html"
};

export default snippet;
