# TestCafe Cheat Sheet

[![Build Status](https://travis-ci.org/byrne-greg/GIPA.svg?branch=master)](https://travis-ci.org/byrne-greg/testcafe-cheat-sheet)
[![Coverage Status](https://coveralls.io/repos/github/byrne-greg/testcafe-cheat-sheet/badge.svg?branch=master)](https://coveralls.io/github/byrne-greg/testcafe-cheat-sheet?branch=master)

Copy TestCafe commands and code...and stuff!

See it live @ https://byrne-greg.github.io/testcafe-cheat-sheet/

## Mission
Provide a webapp that could be quickly searched to provide copy-able snippets of TestCafe code and commands

## Machiavellian Personal Agenda
To pump out code and learn some more!

## How it hangs together
Not ideally!

The app renders a few ancillary components but the main action is in `<CardContainer>`. This takes in every object of `search_mappings.js` and renders. It will filter for particular components based on keyword matches from the search.

`search_mappings.js` exports a simple array containing `React.lazy` loaded card components along with keyword matches.

Each card component is an abstract of the cards purpose (e.g. click action card) that renders a base component (e.g. `<CodeCard>`).  The abstract card imports json data from the `snippets/` that relates to it's purpose (e.g. `import { action_click } from snippets`). Each code snippet file contains the raw data used in each card (such as code examples, titles, full doc links, etc).