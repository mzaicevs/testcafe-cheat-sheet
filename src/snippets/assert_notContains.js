const snippet = {
  title: "Not Contains - Assert",
  description: "Asserts that actual does not contain expected.",
  code: ["t.expect( actual ).notContains( unexpected, message, options );"],
  language: `javascript`,
  example: `import { ClientFunction } from 'testcafe';

  fixture \`My fixture\`;
  
  test('My test', async t => {
    const getLocation = ClientFunction(() => document.location.href.toString());

    await t
        .expect(getLocation()).notContains('google.com')
        .expect('foo bar').notContains('baz', 'string does not contain a substring')
        .expect([1, 2, 3]).notContains(4, 'array does not contain a value')
        .expect({ foo: 'bar', hello: 'universe' }).notContains({ buzz: 'abc' }, 'object does not contain a property');
  });`,
  options: `{ 
    timeout: Number,
      allowUnawaitedPromise: Boolean 
  }`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#not-contains"
};

export default snippet;
