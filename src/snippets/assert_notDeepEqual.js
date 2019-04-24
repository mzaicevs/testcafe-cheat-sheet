const snippet = {
  title: "Not Deep Equal - Assert",
  description: "Asserts that actual is not equal to expected.",
  code: ["t.expect( actual ).notEql( unexpected, message, options );"],
  language: `javascript`,
  example: `import { Selector } from 'testcafe';

  fixture \`My fixture\`;
  
  test('My test', async t => {
      await t
        .expect(Selector('.className').count).notEql(2)
        .expect({ a: 'bar' }).notEql({ a: 'bar' }, 'this assertion will fail')
        .expect({ a: 'bar' }).notEql({ a: 'foo' }, 'this assertion will pass');
  });`,
  options: `{ 
    timeout: Number,
      allowUnawaitedPromise: Boolean 
  }`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#not-deep-equal"
};

export default snippet;
