const snippet = {
  title: "Take Screenshot - Action",
  description: "Take screenshots of the tested page.",
  code: ["t.takeScreenshot( [path] )"],
  language: `javascript`,
  example: `import { Selector } from 'testcafe';

  fixture \`My fixture\`
      .page \`http://devexpress.github.io/testcafe/example/\`;
  
  test('Take a screenshot of a fieldset', async t => {
      await t
          .typeText('#developer-name', 'Tony Stark')
          .click('#submit-button')
          .takeScreenshot('my-fixture/thank-you-page.png')
          .takeElementScreenshot(Selector('fieldset').nth(1), 'my-fixture/important-features.png')
          .takeElementScreenshot('#avatar', {
            includeMargins: true,
            crop: {
                top: -100,
                left: 10,
                bottom: 30,
                right: 200
            }
        });
  });`,
  options: `{
    scrollTargetX: Number,
    scrollTargetY: Number,
    includeMargins: Boolean,
    includeBorders: Boolean,
    includePaddings: Boolean,
    crop: {
        top: Number,
        left: Number,
        bottom: Number,
        right: Number
    },
}`,
  fullDocLink:
    "https://devexpress.github.io/testcafe/documentation/test-api/actions/take-screenshot.html"
};

export default snippet;
