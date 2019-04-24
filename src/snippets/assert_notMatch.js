const snippet = {
  title: "Not Match - Assert",
  description:
    "Asserts that actual does not matches the 're' regular expression.",
  code: ["t.expect( actual ).notMatch( re, message, options );"],
  language: `javascript`,
  example: `import { ClientFunction } from 'testcafe';

  fixture \`My fixture\`;
  
  test('My test', async t => {
      const getLocation = ClientFunction(() => document.location.href.toString());
      
      await t
        .expect(getLocation()).notMatch(/\.ie/)
        .expect('foobar').notMatch(/^b/, 'this assertion will be passed');
  });`,
  options: `{ 
    timeout: Number,
      allowUnawaitedPromise: Boolean 
  }`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#not-match"
};

export default snippet;
