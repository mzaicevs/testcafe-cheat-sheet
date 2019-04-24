const snippet = {
  title: "Ok - Assert",
  description: "Asserts that actual is true.",
  code: ["t.expect( actual ).ok( message, options );"],
  language: `javascript`,
  example: `import { Selector } from 'testcafe';

  fixture \`My fixture\`;
  
  test('My test', async t => {
      await t
        .expect(Selector('#element').exists).ok()
        .expect('ok').ok('this assertion will pass')
        .expect(false).ok('this assertion will fail');
  });`,
  options: `{ 
    timeout: Number,
      allowUnawaitedPromise: Boolean 
  }`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#ok"
};

export default snippet;
