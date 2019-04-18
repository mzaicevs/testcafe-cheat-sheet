const snippet = {
  title: "Drag Action",
  description: "Drag a webpage element in a test.",
  code:
    "t.drag( selector, dragOffsetX, dragOffsetY [, options] )\nt.dragToElement( selector, destinationSelector [, options] )",
  language: `javascript`,
  example: `import { Selector } from 'testcafe';

  const slider = Selector('#developer-rating');
  
  fixture \`My fixture\`
      .page \`http://www.example.com/\`;
  
  test('Drag slider', async t => {
      await t
          .click('#i-tried-testcafe');
          .expect(slider.value).eql(1)
          .drag('.ui-slider-handle', 360, 0, { offsetX: 10, offsetY: 10 })
          .expect(slider.value).eql(7);
          .dragToElement('.ui-slider-handle', '.developer-rating-best')
          .expect(slider.value).eql(10);
  });`,
  options: `{
      modifiers: {
          ctrl: Boolean,
          alt: Boolean,
          shift: Boolean,
          meta: Boolean
      },
  
      offsetX: Number,
      offsetY: Number,
      destinationOffsetX: Number,
      destinationOffsetY: Number,
      speed: Number
  }`,
  fullDocLink: 'https://devexpress.github.io/testcafe/documentation/test-api/actions/drag-element.html'
};

export default snippet;
