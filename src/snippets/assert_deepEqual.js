const snippet = {
  title: "Deep Equal - Assert",
  description: "Asserts that actual is equal to expected.",
  code: ["t.expect( actual ).eql( expected, message, options );"],
  language: `javascript`,
  example: `import { Selector } from 'testcafe';

  fixture \`My fixture\`;
  
  test('My test', async t => {
      await t
        .expect(Selector('.className').count).eql(3)
        .expect({ a: 'bar' }).eql({ a: 'bar' }, 'this assertion will pass')
        .expect({ a: 'bar' }).eql({ a: 'foo' }, 'this assertion will fail');
  });`,
  options: `{ 
    timeout: Number,
      allowUnawaitedPromise: Boolean 
  }`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#deep-equal"
};

export default snippet;
