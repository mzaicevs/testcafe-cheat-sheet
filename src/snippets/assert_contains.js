const snippet = {
  title: "Contains - Assert",
  description: "Asserts that actual is not equal to expected.",
  code: ["t.expect( actual ).contains( expected, message, options );"],
  language: `javascript`,
  example: `import { ClientFunction } from 'testcafe';

  fixture \`My fixture\`;
  
  test('My test', async t => {
    const getLocation = ClientFunction(() => document.location.href.toString());

    await t
        .expect(getLocation()).contains('example.com')
        .expect('foo bar').contains('bar', 'string contains the expected substring')
        .expect([1, 2, 3]).contains(2, 'array contains the expected value')
        .expect({ foo: 'bar', hello: 'universe' }).contains({ foo: 'bar' }, 'object contains the expected property');
  });`,
  options: `{ 
    timeout: Number,
      allowUnawaitedPromise: Boolean 
  }`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#contains"
};

export default snippet;
