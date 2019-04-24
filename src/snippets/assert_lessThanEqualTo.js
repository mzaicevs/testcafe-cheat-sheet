const snippet = {
  title: "Less Than or Equal To - Assert",
  description: "Asserts that actual is less than or equal to expected.",
  code: ["t.expect( actual ).lte( expected, message, options );"],
  language: `javascript`,
  example: `import { Selector } from 'testcafe';

  fixture \`My fixture\`;
  
  test('My test', async t => {
      await t
        .expect(Selector('#element').offsetHeight).lte(400)
        .expect(2).lte(5, '2 is less or equal than 5')
        .expect(2).lte(2, '2 is less or equal than 2 ');
  });`,
  options: `{ 
    timeout: Number,
      allowUnawaitedPromise: Boolean 
  }`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#less-than-or-equal-to"
};

export default snippet;
