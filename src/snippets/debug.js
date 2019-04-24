const snippet = {
  title: "Debug",
  description:
    "Pauses the test and allows you to debug using the browser's developer tools.",
  code: ["t.debug()"],
  language: `javascript`,
  example: `fixture \`Debugger example\`
  .page \`http://devexpress.github.io/testcafe/example/\`;

test('Debugger', async t => {
  await t
      .debug()
      .click('#populate')
      .click('#submit-button');
});`,

  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/debugging.html"
};

export default snippet;
