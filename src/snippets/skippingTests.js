const snippet = {
  title: "Skipping Tests",
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#skipping-tests",
  codeSections: [
    {
      description:
        "Specify that a particular test or fixture should be skipped when running tests.",
      code: ["fixture.skip", "test.skip"],
      language: `javascript`
    },
    {
      description:
        "Specify that only a particular test or fixture should run while all others should be skipped.",
      code: ["fixture.only", "test.only"],
      language: `javascript`
    }
  ]
};

export default snippet;
