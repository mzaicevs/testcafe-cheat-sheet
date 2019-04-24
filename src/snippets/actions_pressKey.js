const snippet = {
  title: "Press Key Action",
  description: "Presses the specified keyboard keys.",
  code: ["t.pressKey( keys [, options] )"],
  language: `javascript`,
  example: `import { Selector } from 'testcafe';

  const nameInput = Selector('#developer-name');
  
  fixture \`My fixture\`
      .page \`http://www.example.com/\`;
  
  test('Key Presses', async t => {
      await t
          .typeText(nameInput, 'Tony Stark')
          .pressKey('home right . delete delete delete')
          .expect(nameInput.value).eql('T. Stark');
  });`,
  options: `{
    speed: Number
}`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/actions/press-key.html"
};

export default snippet;
