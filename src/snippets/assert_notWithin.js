const snippet = {
  title: "Not Within - Assert",
  description:
    "Asserts that actual is not within a range from start to finish. Bounds are inclusive.",
  code: ["t.expect( actual ).notWithin( start, finish, message, options );"],
  language: `javascript`,
  example: `import { Selector } from 'testcafe';

  fixture \`My fixture\`;
  
  test('My test', async t => {
      await t
        .expect(Selector('#element').scrollTop).notWithin(100, 200)
        .expect(1).notWithin(3, 10, 'this assertion will pass');
  });`,
  options: `{ 
    timeout: Number,
      allowUnawaitedPromise: Boolean 
  }`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#not-within"
};

export default snippet;
