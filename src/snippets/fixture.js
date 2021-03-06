const snippet = {
  title: "Fixtures",
  codeSections: [
    {
      description:
        "TestCafe tests must be organized into categories called fixtures. They accept a String parameter",
      code: ["fixture( fixtureName )", "fixture `fixtureName`"],
      language: `javascript`
    },
    {
      description:
        "Specify the web page URL as a String parameter where all tests in a fixture start.",
      code: ["fixture.page( url )", "fixture.page `url`"],
      language: `javascript`
    },
    {
      description:
        "Specify additional information for tests in the form of key-value metadata and use it in reports.",
      code: [
        "fixture.meta({ key1: 'value1', key2: 'value2', key3: 'value3' })"
      ],
      language: `javascript`
    },
    {
      description:
        "Fixture hooks that execute a function before/after each test run",
      code: ["fixture.before( fn(ctx) )", "fixture.after( fn(ctx) )"],
      language: `javascript`
    },
    {
      description: "Test hooks that execute a function before/after each test.",
      code: ["fixture.beforeEach( fn(t) )", "fixture.afterEach( fn(t) )"],
      language: `javascript`
    },
    {
      description: "Skip a feature from execution.",
      code: ["fixture.skip"],
      language: `javascript`
    },
    {
      description: "Only execute a specific feature.",
      code: ["fixture.only"],
      language: `javascript`
    }
  ],
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#fixtures"
};

export default snippet;
