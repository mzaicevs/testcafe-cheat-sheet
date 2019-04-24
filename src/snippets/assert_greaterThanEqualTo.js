const snippet = {
  title: "Greater Than or Equal To - Assert",
  description: "Asserts that actual is greater than or equal to expected.",
  code: ["t.expect( actual ).gte( expected, message, options );"],
  language: `javascript`,
  example: `import { Selector } from 'testcafe';

  fixture \`My fixture\`;
  
  test('My test', async t => {
      await t
        .expect(Selector('#element').clientWidth).gte(50)
        .expect(5).gte(2, '5 is greater or equal than 2')
        .expect(2).gte(2, '2 is greater or equal than 2 ');
  });`,
  options: `{ 
    timeout: Number,
      allowUnawaitedPromise: Boolean 
  }`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#greater-than-or-equal-to"
};

export default snippet;
