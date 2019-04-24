const snippet = {
  title: "Not Type Of - Assert",
  description: "Asserts that the actual type is not typeName.",
  code: ["t.expect( actual ).notTypeOf( typeName, message, options );"],
  language: `javascript`,
  example: `import { Selector } from 'testcafe';

  fixture \`My fixture\`;
  
  test('My test', async t => {
   
    await t
        .expect(Selector('#element').getAttribute('attr')).notTypeOf('null')
        .expect('bar').notTypeOf('number', 'string is not a number');
  });`,
  options: `{ 
    timeout: Number,
      allowUnawaitedPromise: Boolean 
  }`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#not-type-of"
};

export default snippet;
