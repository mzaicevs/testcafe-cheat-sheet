const snippet = {
  title: "Less Than - Assert",
  description: "Asserts that actual is less than expected.",
  code: ["t.expect( actual ).lt( expected, message, options );"],
  language: `javascript`,
  example: `import { Selector } from 'testcafe';

  fixture \`My fixture\`;
  
  test('My test', async t => {
      await t
        .expect(Selector('#element').offsetHeight).lt(25)
        .expect(2).lt(5, '2 is less than 5');
  });`,
  options: `{ 
    timeout: Number,
      allowUnawaitedPromise: Boolean 
  }`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#less-than"
};

export default snippet;
