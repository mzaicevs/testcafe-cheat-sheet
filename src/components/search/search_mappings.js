import React from "react";
import Loading from "../../base_components/Loading";

const LazyInstallCard = React.lazy(() => import("../cards/InstallCard"));
const LazyRunningTestsCard = React.lazy(() =>
  import("../cards/RunningTestsCard")
);
const LazySimpleTestCard = React.lazy(() => import("../cards/SimpleTestCard"));
const LazyBrowserSupportCard = React.lazy(() =>
  import("../cards/BrowserSupportCard")
);
const LazyFixtureCard = React.lazy(() => import("../cards/FixtureCard"));
const LazySkipTestCard = React.lazy(() => import("../cards/SkipTestCard"));
const LazyDebugCard = React.lazy(() => import("../cards/DebugCard"));

const LazyClickActionCard = React.lazy(() =>
  import("../cards/actions/ClickActionCard")
);
const LazyDragActionCard = React.lazy(() =>
  import("../cards/actions/DragActionCard")
);
const LazyHoverActionCard = React.lazy(() =>
  import("../cards/actions/HoverActionCard")
);
const LazySelectActionCard = React.lazy(() =>
  import("../cards/actions/SelectActionCard")
);
const LazyTypeTextActionCard = React.lazy(() =>
  import("../cards/actions/TypeTextActionCard")
);
const LazyPressKeyActionCard = React.lazy(() =>
  import("../cards/actions/PressKeyActionCard")
);
const LazyNavigateActionCard = React.lazy(() =>
  import("../cards/actions/NavigateActionCard")
);
const LazyResizeWindowActionCard = React.lazy(() =>
  import("../cards/actions/ResizeWindowActionCard")
);
const LazyScreenshotActionCard = React.lazy(() =>
  import("../cards/actions/ScreenshotActionCard")
);

const LazyDeepEqualAssertCard = React.lazy(() =>
  import("../cards/asserts/DeepEqualAssertCard")
);
const LazyNotDeepEqualAssertCard = React.lazy(() =>
  import("../cards/asserts/NotDeepEqualAssertCard")
);
const LazyContainsAssertCard = React.lazy(() =>
  import("../cards/asserts/ContainsAssertCard")
);
const LazyNotContainsAssertCard = React.lazy(() =>
  import("../cards/asserts/NotContainsAssertCard")
);
const LazyOkAssertCard = React.lazy(() =>
  import("../cards/asserts/OkAssertCard")
);
const LazyNotOkAssertCard = React.lazy(() =>
  import("../cards/asserts/NotOkAssertCard")
);
const LazyGreaterThanAssertCard = React.lazy(() =>
  import("../cards/asserts/GreaterThanAssertCard")
);
const LazyGreaterThanEqualToAssertCard = React.lazy(() =>
  import("../cards/asserts/GreaterThanEqualToAssertCard")
);
const LazyLessThanAssertCard = React.lazy(() =>
  import("../cards/asserts/LessThanAssertCard")
);
const LazyLessThanEqualToAssertCard = React.lazy(() =>
  import("../cards/asserts/LessThanEqualToAssertCard")
);
const LazyMatchesAssertCard = React.lazy(() =>
  import("../cards/asserts/MatchesAssertCard")
);
const LazyNotMatchesAssertCard = React.lazy(() =>
  import("../cards/asserts/NotMatchesAssertCard")
);
const LazyTypeOfAssertCard = React.lazy(() =>
  import("../cards/asserts/TypeOfAssertCard")
);
const LazyNotTypeOfAssertCard = React.lazy(() =>
  import("../cards/asserts/NotTypeOfAssertCard")
);
const LazyWithinAssertCard = React.lazy(() =>
  import("../cards/asserts/WithinAssertCard")
);
const LazyNotWithinAssertCard = React.lazy(() =>
  import("../cards/asserts/NotWithinAssertCard")
);

let id = 0;
const getId = () => {
  return ++id;
};

const mappings = [
  {
    keywords: ["install"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyInstallCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["running", "test"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyRunningTestsCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["example", "test", "simple"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazySimpleTestCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["browser support"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyBrowserSupportCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["fixture"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyFixtureCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["skipping", "only", "test"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazySkipTestCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["debug"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyDebugCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["click", " double click", " right click", "action"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyClickActionCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["drag", "action"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyDragActionCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["hover", "action"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyHoverActionCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["select", "action"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazySelectActionCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["type", "typing", "text", "action"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyTypeTextActionCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["press", "key", "action"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyPressKeyActionCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["navigate", "navigation", "url", "go to", "action"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyNavigateActionCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["resize", "window", "action"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyResizeWindowActionCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["screenshot", "snapshot", "action"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyScreenshotActionCard />}
        spinnerAnimation="grow"
      />
    )
  },

  {
    keywords: ["assert", "deep", "equal"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyDeepEqualAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "not", "deep", "equal"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyNotDeepEqualAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "contains"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyContainsAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "not", "contains"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyNotContainsAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "ok"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyOkAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "not", "ok"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyNotOkAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "greater", "than"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyGreaterThanAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "greater", "than", "equal"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyGreaterThanEqualToAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "less", "than"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyLessThanAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "less", "than", "equal"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyLessThanEqualToAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "matches"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyMatchesAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "not", "matches"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyNotMatchesAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "type of"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyTypeOfAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "not", "type of"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyNotTypeOfAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "within"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyWithinAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "not", "within"],
    getComponent: () => (
      <Loading
        key={getId()}
        component={<LazyNotWithinAssertCard />}
        spinnerAnimation="grow"
      />
    )
  }
];

export default mappings;
