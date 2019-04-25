/* eslint-disable no-useless-escape */
const snippet = {
  title: "Type Of - Assert",
  description: "Asserts that the actual type is typeName.",
  code: ["t.expect( actual ).typeOf( typeName, message, options );"],
  language: `javascript`,
  example: `import { Selector } from 'testcafe';

  fixture \`My fixture\`;
  
  test('My test', async t => {
   
    await t
        .expect(Selector('#element').getAttribute('attr')).typeOf('string')
        .expect({ a: 'bar' }).typeOf('object', 'it\'s an object')
        .expect(/bar/).typeOf('regexp', 'it\'s a regular expression')
        .expect(null).typeOf('null', 'it\'s a null');
  });`,
  options: `{ 
    timeout: Number,
      allowUnawaitedPromise: Boolean 
  }`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#type-of"
};

export default snippet;
