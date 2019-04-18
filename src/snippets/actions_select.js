const snippet = {
  title: "Select Action",
  codeSections: [
    {
      description: "Selects text in input elements of various types",
      code: "t.selectText( selector [, startPos] [, endPos] [, options] )",
      language: `javascript`,
      example: `import { ClientFunction, Selector } from 'testcafe';

      fixture \`My fixture\`
          .page \`http://devexpress.github.io/testcafe/example/\`;
      
      const developerNameInput = Selector('#developer-name');
      
      const getElementSelectionStart = ClientFunction(selector => selector().selectionStart);
      const getElementSelectionEnd   = ClientFunction(selector => selector().selectionEnd);
      
      test('Select text within input', async t => {
          await t
              .typeText(developerNameInput, 'Test Cafe', { caretPos: 0 })
              .selectText(developerNameInput, 7, 1);
      
          await t
              .expect(await getElementSelectionStart(developerNameInput)).eql(1)
              .expect(await getElementSelectionEnd(developerNameInput)).eql(7);
      });`,
      options: `{ speed: Number }`
    },
    {
      description: "Select text within a <textarea> element",
      code:
        "t.selectTextAreaContent( selector [, startLine] [, startPos] [, endLine] [, endPos] [, options] )",
      language: `javascript`,
      example: `import { ClientFunction, Selector } from 'testcafe';

      fixture \`My fixture\`
          .page \`http://devexpress.github.io/testcafe/example/\`;
      
      const commentTextArea = Selector('#comments');
      
      const getElementSelectionStart = ClientFunction(selector => selector().selectionStart);
      const getElementSelectionEnd   = ClientFunction(selector => selector().selectionEnd);
      
      test('Select text within textarea', async t => {
          await t
              .click('#tried-test-cafe')
              .typeText(commentTextArea, [
                  'Lorem ipsum dolor sit amet',
                  'consectetur adipiscing elit',
                  'sed do eiusmod tempor'
              ].join(',\n'))
              .selectTextAreaContent(commentTextArea, 0, 5, 2, 10);
      
          await t
              .expect(await getElementSelectionStart(commentTextArea)).eql(5)
              .expect(await getElementSelectionEnd(commentTextArea)).eql(67);
      });`,
      options: `{ speed: Number }`
    },
    {
      description:
        "Select HTML elements that have the contentEditable attribute enabled.",
      code: "t.selectEditableContent( startSelector, endSelector [, options] )",
      language: `javascript`,
      example: `import { Selector } from 'testcafe';

      fixture \`My fixture\`
          .page \`http://www.example.com/\`;
      
      test('Delete text within a contentEditable element', async t => {
          await t
              .selectEditableContent('#foreword', '#chapter-3')
              .pressKey('delete')
              .expect(Selector('#chapter-2').exists).notOk()
              .expect(Selector('#chapter-4').exists).ok();
      });`,
      options: `{ speed: Number }`
    }
  ],
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/actions/select-text.html"
};

export default snippet;
