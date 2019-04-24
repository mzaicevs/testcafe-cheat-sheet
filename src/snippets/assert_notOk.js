const snippet = {
  title: "Not Ok - Assert",
  description: "Asserts that actual is false.",
  code: ["t.expect( actual ).notOk( message, options );"],
  language: `javascript`,
  example: `import { Selector } from 'testcafe';

  fixture \`My fixture\`;
  
  test('My test', async t => {
      await t
        .expect(Selector('#element').exists).notOk()
        .expect('ok').notOk('this assertion will fail')
        .expect(false).notOk('this assertion will pass');
  });`,
  options: `{ 
    timeout: Number,
      allowUnawaitedPromise: Boolean 
  }`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#not-ok"
};

export default snippet;
