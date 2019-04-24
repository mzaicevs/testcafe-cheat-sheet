const snippet = {
  title: "Greater Than - Assert",
  description: "Asserts that actual is greater than expected.",
  code: ["t.expect( actual ).gt( expected, message, options );"],
  language: `javascript`,
  example: `import { Selector } from 'testcafe';

  fixture \`My fixture\`;
  
  test('My test', async t => {
      await t
        .expect(Selector('#element').clientWidth).gt(300)
        .expect(5).gt(2, '5 is greater than 2');
  });`,
  options: `{ 
    timeout: Number,
      allowUnawaitedPromise: Boolean 
  }`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#greater-than"
};

export default snippet;
