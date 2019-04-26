(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{79:function(e,t,n){"use strict";var a={title:"Install TestCafe",code:["npm install -D testcafe"],language:"plaintext"},o={title:"Simple Test",code:["import { Selector } from 'testcafe';\n    \n    fixture `Getting Started`\n      .page `http://devexpress.github.io/testcafe/example`;\n                \n    test('My first test', async t => {\n      // Test code\n    });"],language:"javascript"},i={title:"Running a test on multiple browsers",code:["testcafe chrome,firefox,edge src/tests/my.e2e.test.js"],language:"plaintext"},s={title:"Skipping Tests",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#skipping-tests",codeSections:[{description:"Specify that a particular test or fixture should be skipped when running tests.",code:["fixture.skip","test.skip"],language:"javascript"},{description:"Specify that only a particular test or fixture should run while all others should be skipped.",code:["fixture.only","test.only"],language:"javascript"}]},r={title:"Browser Support",browsers:[{text:"Google Chrome: Stable, Beta, Dev and Canary",aliases:["chromium","chrome","chrome-canary","chrome:headless"]},{text:"Internet Explorer (11+)",aliases:["ie"]},{text:"Microsoft Edge",aliases:["edge"]},{text:"Mozilla Firefox",aliases:["firefox","firefox:headless"]},{text:"Safari",aliases:["safari"]},{text:"Opera",aliases:["opera"]}],fullDocLink:"https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/browsers/browser-support.html"},c={title:"Click - Action",description:"Click, Double-click, and Right-click a webpage element in a test.",code:["t.click( selector [, options] )","t.doubleClick( selector [, options]","t.rightClick( selector [, options] ))"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n    const avatar = Selector('#avatar');\n    const popupMenu = Selector('#popupMenu');\n    \n    fixture `My fixture`\n        .page `http://www.example.com/`;\n    \n    test('Click a check box and check its state', async t => {\n        await t\n            .click(avatar)\n            .expect(avatar.selected).ok();\n            .doubleClick(avatar)\n            .expect(avatar.visible).ok();\n            .rightClick(avatar)\n            .expect(popupMenu.exists).notOk();\n    });",options:"{\n      modifiers: {\n          ctrl: Boolean,\n          alt: Boolean,\n          shift: Boolean,\n          meta: Boolean\n      },\n  \n      offsetX: Number,\n      offsetY: Number,\n      destinationOffsetX: Number,\n      destinationOffsetY: Number,\n      speed: Number\n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/actions/click.html"},l={title:"Drag - Action",description:"Drag a webpage element in a test.",code:["t.drag( selector, dragOffsetX, dragOffsetY [, options] )","t.dragToElement( selector, destinationSelector [, options] )"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  const slider = Selector('#developer-rating');\n  \n  fixture `My fixture`\n      .page `http://www.example.com/`;\n  \n  test('Drag slider', async t => {\n      await t\n          .click('#i-tried-testcafe');\n          .expect(slider.value).eql(1)\n          .drag('.ui-slider-handle', 360, 0, { offsetX: 10, offsetY: 10 })\n          .expect(slider.value).eql(7);\n          .dragToElement('.ui-slider-handle', '.developer-rating-best')\n          .expect(slider.value).eql(10);\n  });",options:"{\n      modifiers: {\n          ctrl: Boolean,\n          alt: Boolean,\n          shift: Boolean,\n          meta: Boolean\n      },\n  \n      offsetX: Number,\n      offsetY: Number,\n      destinationOffsetX: Number,\n      destinationOffsetY: Number,\n      speed: Number\n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/actions/drag-element.html"},p={title:"Hover - Action",description:"Hovers the mouse pointer over a webpage element.",code:["t.hover( selector [, options] )"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  const comboBox = Selector('.combo-box');\n  \n  fixture `My fixture`\n      .page `http://www.example.com/`;\n  \n  test('Select combo box value', async t => {\n      await t\n          .hover(comboBox)\n          .click('#i-prefer-both')\n          .expect(comboBox.value).eql('Both');\n  });",options:"{\n      modifiers: {\n          ctrl: Boolean,\n          alt: Boolean,\n          shift: Boolean,\n          meta: Boolean\n      },\n  \n      offsetX: Number,\n      offsetY: Number,\n      destinationOffsetX: Number,\n      destinationOffsetY: Number,\n      speed: Number\n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/actions/hover.html"},u={title:"Select - Action",codeSections:[{description:"Selects text in input elements of various types",code:["t.selectText( selector [, startPos] [, endPos] [, options] )"],language:"javascript",example:"import { ClientFunction, Selector } from 'testcafe';\n\n      fixture `My fixture`\n          .page `http://devexpress.github.io/testcafe/example/`;\n      \n      const developerNameInput = Selector('#developer-name');\n      \n      const getElementSelectionStart = ClientFunction(selector => selector().selectionStart);\n      const getElementSelectionEnd   = ClientFunction(selector => selector().selectionEnd);\n      \n      test('Select text within input', async t => {\n          await t\n              .typeText(developerNameInput, 'Test Cafe', { caretPos: 0 })\n              .selectText(developerNameInput, 7, 1);\n      \n          await t\n              .expect(await getElementSelectionStart(developerNameInput)).eql(1)\n              .expect(await getElementSelectionEnd(developerNameInput)).eql(7);\n      });",options:"{ speed: Number }"},{description:"Select text within a <textarea> element",code:["t.selectTextAreaContent( selector [, startLine] [, startPos] [, endLine] [, endPos] [, options] )"],language:"javascript",example:"import { ClientFunction, Selector } from 'testcafe';\n\n      fixture `My fixture`\n          .page `http://devexpress.github.io/testcafe/example/`;\n      \n      const commentTextArea = Selector('#comments');\n      \n      const getElementSelectionStart = ClientFunction(selector => selector().selectionStart);\n      const getElementSelectionEnd   = ClientFunction(selector => selector().selectionEnd);\n      \n      test('Select text within textarea', async t => {\n          await t\n              .click('#tried-test-cafe')\n              .typeText(commentTextArea, [\n                  'Lorem ipsum dolor sit amet',\n                  'consectetur adipiscing elit',\n                  'sed do eiusmod tempor'\n              ].join(',\n'))\n              .selectTextAreaContent(commentTextArea, 0, 5, 2, 10);\n      \n          await t\n              .expect(await getElementSelectionStart(commentTextArea)).eql(5)\n              .expect(await getElementSelectionEnd(commentTextArea)).eql(67);\n      });",options:"{ speed: Number }"},{description:"Select HTML elements that have the contentEditable attribute enabled.",code:["t.selectEditableContent( startSelector, endSelector [, options] )"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n      fixture `My fixture`\n          .page `http://www.example.com/`;\n      \n      test('Delete text within a contentEditable element', async t => {\n          await t\n              .selectEditableContent('#foreword', '#chapter-3')\n              .pressKey('delete')\n              .expect(Selector('#chapter-2').exists).notOk()\n              .expect(Selector('#chapter-4').exists).ok();\n      });",options:"{ speed: Number }"}],fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/actions/select-text.html"},m={title:"Typing - Action",description:"Types the specified text into an input element.",code:["t.typeText( selector, text [, options] )"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  const nameInput = Selector('#developer-name');\n  \n  fixture `My fixture`\n      .page `http://www.example.com/`;\n  \n  test('Type and Replace', async t => {\n      await t\n          .typeText(nameInput, 'Tony')\n          .typeText(nameInput, 'Stak', { replace: true })\n          .typeText(nameInput, 'r', { caretPos: 3 })\n          .expect(nameInput.value).eql('Stark');\n  });",options:"{\n    modifiers: {\n        ctrl: Boolean,\n        alt: Boolean,\n        shift: Boolean,\n        meta: Boolean\n    },\n\n    offsetX: Number,\n    offsetY: Number,\n    caretPos: Number,\n    replace: Boolean,\n    paste: Boolean,\n    speed: Number\n}",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/actions/type-text.html"},f={title:"Press Key - Action",description:"Presses the specified keyboard keys.",code:["t.pressKey( keys [, options] )"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  const nameInput = Selector('#developer-name');\n  \n  fixture `My fixture`\n      .page `http://www.example.com/`;\n  \n  test('Key Presses', async t => {\n      await t\n          .typeText(nameInput, 'Tony Stark')\n          .pressKey('home right . delete delete delete')\n          .expect(nameInput.value).eql('T. Stark');\n  });",options:"{\n    speed: Number\n}",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/actions/press-key.html"},d={title:"Navigation - Action",description:"Navigates to the specified URL.",code:["t.navigateTo( url )"],language:"javascript",example:"fixture `My fixture`\n  .page `http://www.example.com/`;\n\ntest('Navigate to the main page', async t => {\n  await t\n      .click('#submit-button')\n      .navigateTo('http://devexpress.github.io/testcafe');\n});\ntest('Navigate to local pages', async t => {\n  await t\n      .navigateTo('file:///user/my-website/index.html')\n      .navigateTo('../my-project/index.html');\n});",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/actions/navigate.html"},x={title:"Resize Window - Action",description:"Resize the window to a specific pixel dimension, or to fit on the screen of the specified mobile device, or just to maximise",code:["t.resizeWindow( width, height )","t.resizeWindowToFitDevice( deviceName [, options] )","t.maximizeWindow( )"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  const menu = Selector('#side-menu');\n    \n  fixture `My fixture`\n    .page `http://www.example.com/`;\n    \n  test('Side menu disappears on small screens', async t => {\n    await t\n      .resizeWindow(200, 100)\n      .expect(menu.getStyleProperty('display')).eql('none');\n  });\n    \n  test('Header is displayed on Xperia Z in portrait', async t => {\n    await t\n      .resizeWindowToFitDevice('Sony Xperia Z', {\n        portraitOrientation: true\n      })\n      .expect(header.getStyleProperty('display')).notEql('none');\n  });\n    \n  test('Side menu is displayed in full screen', async t => {\n    await t\n      .maximizeWindow()\n      .expect(menu.visible).ok();\n  });",options:"{\n    portraitOrientation: Boolean\n    /** true for portrait - false for landscape\n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/actions/resize-window.html"},h={title:"Take Screenshot - Action",description:"Take screenshots of the tested page.",code:["t.takeScreenshot( [path] )"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  fixture `My fixture`\n      .page `http://devexpress.github.io/testcafe/example/`;\n  \n  test('Take a screenshot of a fieldset', async t => {\n      await t\n          .typeText('#developer-name', 'Tony Stark')\n          .click('#submit-button')\n          .takeScreenshot('my-fixture/thank-you-page.png')\n          .takeElementScreenshot(Selector('fieldset').nth(1), 'my-fixture/important-features.png')\n          .takeElementScreenshot('#avatar', {\n            includeMargins: true,\n            crop: {\n                top: -100,\n                left: 10,\n                bottom: 30,\n                right: 200\n            }\n        });\n  });",options:"{\n    scrollTargetX: Number,\n    scrollTargetY: Number,\n    includeMargins: Boolean,\n    includeBorders: Boolean,\n    includePaddings: Boolean,\n    crop: {\n        top: Number,\n        left: Number,\n        bottom: Number,\n        right: Number\n    },\n}",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/actions/take-screenshot.html"},g={title:"Fixtures",codeSections:[{description:"TestCafe tests must be organized into categories called fixtures. They accept a String parameter",code:["fixture( fixtureName )","fixture `fixtureName`"],language:"javascript"},{description:"Specify the web page URL as a String parameter where all tests in a fixture start.",code:["fixture.page( url )","fixture.page `url`"],language:"javascript"},{description:"Specify additional information for tests in the form of key-value metadata and use it in reports.",code:["fixture.meta({ key1: 'value1', key2: 'value2', key3: 'value3' })"],language:"javascript"},{description:"Fixture hooks that execute a function before/after each test run",code:["fixture.before( fn(ctx) )","fixture.after( fn(ctx) )"],language:"javascript"},{description:"Test hooks that execute a function before/after each test.",code:["fixture.beforeEach( fn(t) )","fixture.afterEach( fn(t) )"],language:"javascript"},{description:"Skip a feature from execution.",code:["fixture.skip"],language:"javascript"},{description:"Only execute a specific feature.",code:["fixture.only"],language:"javascript"}],fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#fixtures"},b={title:"Debug",description:"Pauses the test and allows you to debug using the browser's developer tools.",code:["t.debug()"],language:"javascript",example:"fixture `Debugger example`\n  .page `http://devexpress.github.io/testcafe/example/`;\n\ntest('Debugger', async t => {\n  await t\n      .debug()\n      .click('#populate')\n      .click('#submit-button');\n});",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/debugging.html"},y={title:"Within - Assert",description:"Asserts that actual is within a range from start to finish. Bounds are inclusive.",code:["t.expect( actual ).within( start, finish, message, options );"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  fixture `My fixture`;\n  \n  test('My test', async t => {\n      await t\n        .expect(Selector('#element').scrollTop).within(300, 400)\n        .expect(5).within(3, 10, 'this assertion will pass');\n  });",options:"{ \n    timeout: Number,\n      allowUnawaitedPromise: Boolean \n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#within"},w={title:"Not Within - Assert",description:"Asserts that actual is not within a range from start to finish. Bounds are inclusive.",code:["t.expect( actual ).notWithin( start, finish, message, options );"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  fixture `My fixture`;\n  \n  test('My test', async t => {\n      await t\n        .expect(Selector('#element').scrollTop).notWithin(100, 200)\n        .expect(1).notWithin(3, 10, 'this assertion will pass');\n  });",options:"{ \n    timeout: Number,\n      allowUnawaitedPromise: Boolean \n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#not-within"},v={title:"Ok - Assert",description:"Asserts that actual is true.",code:["t.expect( actual ).ok( message, options );"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  fixture `My fixture`;\n  \n  test('My test', async t => {\n      await t\n        .expect(Selector('#element').exists).ok()\n        .expect('ok').ok('this assertion will pass')\n        .expect(false).ok('this assertion will fail');\n  });",options:"{ \n    timeout: Number,\n      allowUnawaitedPromise: Boolean \n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#ok"},k={title:"Not Ok - Assert",description:"Asserts that actual is false.",code:["t.expect( actual ).notOk( message, options );"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  fixture `My fixture`;\n  \n  test('My test', async t => {\n      await t\n        .expect(Selector('#element').exists).notOk()\n        .expect('ok').notOk('this assertion will fail')\n        .expect(false).notOk('this assertion will pass');\n  });",options:"{ \n    timeout: Number,\n      allowUnawaitedPromise: Boolean \n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#not-ok"},S={title:"Type Of - Assert",description:"Asserts that the actual type is typeName.",code:["t.expect( actual ).typeOf( typeName, message, options );"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  fixture `My fixture`;\n  \n  test('My test', async t => {\n   \n    await t\n        .expect(Selector('#element').getAttribute('attr')).typeOf('string')\n        .expect({ a: 'bar' }).typeOf('object', 'it's an object')\n        .expect(/bar/).typeOf('regexp', 'it's a regular expression')\n        .expect(null).typeOf('null', 'it's a null');\n  });",options:"{ \n    timeout: Number,\n      allowUnawaitedPromise: Boolean \n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#type-of"},N={title:"Not Type Of - Assert",description:"Asserts that the actual type is not typeName.",code:["t.expect( actual ).notTypeOf( typeName, message, options );"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  fixture `My fixture`;\n  \n  test('My test', async t => {\n   \n    await t\n        .expect(Selector('#element').getAttribute('attr')).notTypeOf('null')\n        .expect('bar').notTypeOf('number', 'string is not a number');\n  });",options:"{ \n    timeout: Number,\n      allowUnawaitedPromise: Boolean \n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#not-type-of"},T={title:"Deep Equal - Assert",description:"Asserts that actual is equal to expected.",code:["t.expect( actual ).eql( expected, message, options );"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  fixture `My fixture`;\n  \n  test('My test', async t => {\n      await t\n        .expect(Selector('.className').count).eql(3)\n        .expect({ a: 'bar' }).eql({ a: 'bar' }, 'this assertion will pass')\n        .expect({ a: 'bar' }).eql({ a: 'foo' }, 'this assertion will fail');\n  });",options:"{ \n    timeout: Number,\n      allowUnawaitedPromise: Boolean \n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#deep-equal"},M={title:"Not Deep Equal - Assert",description:"Asserts that actual is not equal to expected.",code:["t.expect( actual ).notEql( unexpected, message, options );"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  fixture `My fixture`;\n  \n  test('My test', async t => {\n      await t\n        .expect(Selector('.className').count).notEql(2)\n        .expect({ a: 'bar' }).notEql({ a: 'bar' }, 'this assertion will fail')\n        .expect({ a: 'bar' }).notEql({ a: 'foo' }, 'this assertion will pass');\n  });",options:"{ \n    timeout: Number,\n      allowUnawaitedPromise: Boolean \n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#not-deep-equal"},A={title:"Match - Assert",description:"Asserts that actual matches the 're' regular expression.",code:["t.expect( actual ).match( re, message, options );"],language:"javascript",example:"import { ClientFunction } from 'testcafe';\n\n  fixture `My fixture`;\n  \n  test('My test', async t => {\n      const getLocation = ClientFunction(() => document.location.href.toString());\n      \n      await t\n        .expect(getLocation()).match(/.com/)\n        .expect('foobar').match(/^f/, 'this assertion will be passed');\n  });",options:"{ \n    timeout: Number,\n      allowUnawaitedPromise: Boolean \n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#match"},E={title:"Not Match - Assert",description:"Asserts that actual does not matches the 're' regular expression.",code:["t.expect( actual ).notMatch( re, message, options );"],language:"javascript",example:"import { ClientFunction } from 'testcafe';\n\n  fixture `My fixture`;\n  \n  test('My test', async t => {\n      const getLocation = ClientFunction(() => document.location.href.toString());\n      \n      await t\n        .expect(getLocation()).notMatch(/.ie/)\n        .expect('foobar').notMatch(/^b/, 'this assertion will be passed');\n  });",options:"{ \n    timeout: Number,\n      allowUnawaitedPromise: Boolean \n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#not-match"},j={title:"Contains - Assert",description:"Asserts that actual is not equal to expected.",code:["t.expect( actual ).contains( expected, message, options );"],language:"javascript",example:"import { ClientFunction } from 'testcafe';\n\n  fixture `My fixture`;\n  \n  test('My test', async t => {\n    const getLocation = ClientFunction(() => document.location.href.toString());\n\n    await t\n        .expect(getLocation()).contains('example.com')\n        .expect('foo bar').contains('bar', 'string contains the expected substring')\n        .expect([1, 2, 3]).contains(2, 'array contains the expected value')\n        .expect({ foo: 'bar', hello: 'universe' }).contains({ foo: 'bar' }, 'object contains the expected property');\n  });",options:"{ \n    timeout: Number,\n      allowUnawaitedPromise: Boolean \n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#contains"},B={title:"Not Contains - Assert",description:"Asserts that actual does not contain expected.",code:["t.expect( actual ).notContains( unexpected, message, options );"],language:"javascript",example:"import { ClientFunction } from 'testcafe';\n\n  fixture `My fixture`;\n  \n  test('My test', async t => {\n    const getLocation = ClientFunction(() => document.location.href.toString());\n\n    await t\n        .expect(getLocation()).notContains('google.com')\n        .expect('foo bar').notContains('baz', 'string does not contain a substring')\n        .expect([1, 2, 3]).notContains(4, 'array does not contain a value')\n        .expect({ foo: 'bar', hello: 'universe' }).notContains({ buzz: 'abc' }, 'object does not contain a property');\n  });",options:"{ \n    timeout: Number,\n      allowUnawaitedPromise: Boolean \n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#not-contains"},L={title:"Less Than - Assert",description:"Asserts that actual is less than expected.",code:["t.expect( actual ).lt( expected, message, options );"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  fixture `My fixture`;\n  \n  test('My test', async t => {\n      await t\n        .expect(Selector('#element').offsetHeight).lt(25)\n        .expect(2).lt(5, '2 is less than 5');\n  });",options:"{ \n    timeout: Number,\n      allowUnawaitedPromise: Boolean \n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#less-than"},D={title:"Less Than or Equal To - Assert",description:"Asserts that actual is less than or equal to expected.",code:["t.expect( actual ).lte( expected, message, options );"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  fixture `My fixture`;\n  \n  test('My test', async t => {\n      await t\n        .expect(Selector('#element').offsetHeight).lte(400)\n        .expect(2).lte(5, '2 is less or equal than 5')\n        .expect(2).lte(2, '2 is less or equal than 2 ');\n  });",options:"{ \n    timeout: Number,\n      allowUnawaitedPromise: Boolean \n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#less-than-or-equal-to"},C={title:"Greater Than - Assert",description:"Asserts that actual is greater than expected.",code:["t.expect( actual ).gt( expected, message, options );"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  fixture `My fixture`;\n  \n  test('My test', async t => {\n      await t\n        .expect(Selector('#element').clientWidth).gt(300)\n        .expect(5).gt(2, '5 is greater than 2');\n  });",options:"{ \n    timeout: Number,\n      allowUnawaitedPromise: Boolean \n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#greater-than"},q={title:"Greater Than or Equal To - Assert",description:"Asserts that actual is greater than or equal to expected.",code:["t.expect( actual ).gte( expected, message, options );"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  fixture `My fixture`;\n  \n  test('My test', async t => {\n      await t\n        .expect(Selector('#element').clientWidth).gte(50)\n        .expect(5).gte(2, '5 is greater or equal than 2')\n        .expect(2).gte(2, '2 is greater or equal than 2 ');\n  });",options:"{ \n    timeout: Number,\n      allowUnawaitedPromise: Boolean \n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/assertions/assertion-api.html#greater-than-or-equal-to"};n.d(t,"C",function(){return a}),n.d(t,"E",function(){return o}),n.d(t,"D",function(){return i}),n.d(t,"F",function(){return s}),n.d(t,"z",function(){return r}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return p}),n.d(t,"g",function(){return u}),n.d(t,"i",function(){return m}),n.d(t,"e",function(){return f}),n.d(t,"d",function(){return d}),n.d(t,"f",function(){return x}),n.d(t,"h",function(){return h}),n.d(t,"B",function(){return g}),n.d(t,"A",function(){return b}),n.d(t,"y",function(){return y}),n.d(t,"v",function(){return w}),n.d(t,"w",function(){return v}),n.d(t,"t",function(){return k}),n.d(t,"x",function(){return S}),n.d(t,"u",function(){return N}),n.d(t,"k",function(){return T}),n.d(t,"r",function(){return M}),n.d(t,"p",function(){return A}),n.d(t,"s",function(){return E}),n.d(t,"j",function(){return j}),n.d(t,"q",function(){return B}),n.d(t,"n",function(){return L}),n.d(t,"o",function(){return D}),n.d(t,"l",function(){return C}),n.d(t,"m",function(){return q})},80:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(87),s=n(326),r=n(293),c=function(e){var t=e.children,n=e.language;return o.a.createElement(s.a,{language:n,style:r.a},t)};n.d(t,"b",function(){return p}),n.d(t,"a",function(){return l});var l=function(e){var t=e.children,n=e.language;return o.a.createElement(o.a.Fragment,null,document.queryCommandSupported("copy")?o.a.createElement(i.CopyToClipboard,{text:t,onCopy:function(){}},o.a.createElement("div",{style:{cursor:"copy"}},o.a.createElement(c,{language:n},t))):o.a.createElement(c,{language:n},t))},p=function(e){var t=e.code,n=e.language;return o.a.createElement(o.a.Fragment,null,t.map(function(e){return o.a.createElement(l,{key:"".concat(n,"-").concat(e.substring(0,24)),language:n},e)}))}},81:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(287),s=n(82),r=function(e){var t=e.href,n=e.children;return o.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},n)};t.a=function(e){var t=e.docLink,n=e.title;return o.a.createElement(i.a.Header,null,o.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}},n,t&&o.a.createElement(r,{href:t},o.a.createElement(s.a,{variant:"info"},"Documentation"))))}}}]);
//# sourceMappingURL=1.1fab91a5.chunk.js.map