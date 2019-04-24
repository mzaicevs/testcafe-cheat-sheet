const snippet = {
  title: "Match - Assert",
  description: "Asserts that actual matches the 're' regular expression.",
  code: ["t.expect( actual ).match( re, message, options );"],
  language: `javascript`,
  example: `import { ClientFunction } from 'testcafe';

  fixture \`My fixture\`;
  
  test('My test', async t => {
      const getLocation = ClientFunction(() => document.location.href.toString());
      
      await t
        .expect(getLocation()).match(/\.com/)
        .expect('foobar').match(/^f/, 'this assertion will be passed');
  });`,
  options: `{ 
    timeout: Number,
      allowUnawaitedPromise: Boolean 
  }`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#match"
};

export default snippet;
