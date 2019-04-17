const snippet = {
  title: "Click Action",
  description:
    "Click, Double-click, and Right-click a webpage element in a test.",
  code:
    "t.click( selector [, options] )\nt.doubleClick( selector [, options]\nt.rightClick( selector [, options] ))",
  language: `javascript`,
  example: `import { Selector } from 'testcafe';

    const avatar = Selector('#avatar');
    const popupMenu = Selector('#popupMenu');
    
    fixture \`My fixture\`
        .page \`http://www.example.com/\`;
    
    test('Click a check box and check its state', async t => {
        await t
            .click(avatar)
            .expect(avatar.selected).ok();
            .doubleClick(avatar)
            .expect(avatar.visible).ok();
            .rightClick(avatar)
            .expect(popupMenu.exists).notOk();
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
  }`
};

export default snippet;
