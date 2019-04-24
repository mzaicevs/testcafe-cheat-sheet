const snippet = {
  title: "Within - Assert",
  description:
    "Asserts that actual is within a range from start to finish. Bounds are inclusive.",
  code: ["t.expect( actual ).within( start, finish, message, options );"],
  language: `javascript`,
  example: `import { Selector } from 'testcafe';

  fixture \`My fixture\`;
  
  test('My test', async t => {
      await t
        .expect(Selector('#element').scrollTop).within(300, 400)
        .expect(5).within(3, 10, 'this assertion will pass');
  });`,
  options: `{ 
    timeout: Number,
      allowUnawaitedPromise: Boolean 
  }`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#within"
};

export default snippet;
