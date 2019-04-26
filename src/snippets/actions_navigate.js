const snippet = {
  title: "Navigation - Action",
  description: "Navigates to the specified URL.",
  code: ["t.navigateTo( url )"],
  language: `javascript`,
  example: `fixture \`My fixture\`
  .page \`http://www.example.com/\`;

test('Navigate to the main page', async t => {
  await t
      .click('#submit-button')
      .navigateTo('http://devexpress.github.io/testcafe');
});
test('Navigate to local pages', async t => {
  await t
      .navigateTo('file:///user/my-website/index.html')
      .navigateTo('../my-project/index.html');
});`,

  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/actions/navigate.html"
};

export default snippet;
