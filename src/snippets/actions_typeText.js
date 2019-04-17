const snippet = {
  title: "Typing Action",
  description: "Types the specified text into an input element.",
  code: "t.typeText( selector, text [, options] )",
  language: `javascript`,
  example: `import { Selector } from 'testcafe';

  const nameInput = Selector('#developer-name');
  
  fixture \`My fixture\`
      .page \`http://www.example.com/\`;
  
  test('Type and Replace', async t => {
      await t
          .typeText(nameInput, 'Tony')
          .typeText(nameInput, 'Stak', { replace: true })
          .typeText(nameInput, 'r', { caretPos: 3 })
          .expect(nameInput.value).eql('Stark');
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
    caretPos: Number,
    replace: Boolean,
    paste: Boolean,
    speed: Number
}`
};

export default snippet;
