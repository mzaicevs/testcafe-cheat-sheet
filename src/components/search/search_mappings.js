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
const LazyDebugCard = React.lazy(() => import("../cards/DebugCard"));
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

const mappings = [
  {
    keywords: ["install"],
    getComponent: () => (
      <Loading
        key={1}
        component={<LazyInstallCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["running", "test"],
    getComponent: () => (
      <Loading
        key={2}
        component={<LazyRunningTestsCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["example", "test", "simple"],
    getComponent: () => (
      <Loading
        key={3}
        component={<LazySimpleTestCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["browser support"],
    getComponent: () => (
      <Loading
        key={4}
        component={<LazyBrowserSupportCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["fixture"],
    getComponent: () => (
      <Loading
        key={5}
        component={<LazyFixtureCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["click", " double click", " right click", "action"],
    getComponent: () => (
      <Loading
        key={6}
        component={<LazyClickActionCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["drag", "action"],
    getComponent: () => (
      <Loading
        key={7}
        component={<LazyDragActionCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["hover", "action"],
    getComponent: () => (
      <Loading
        key={8}
        component={<LazyHoverActionCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["select", "action"],
    getComponent: () => (
      <Loading
        key={9}
        component={<LazySelectActionCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["type", "typing", "text", "action"],
    getComponent: () => (
      <Loading
        key={10}
        component={<LazyTypeTextActionCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["press", "key", "action"],
    getComponent: () => (
      <Loading
        key={11}
        component={<LazyPressKeyActionCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["navigate", "navigation", "url", "go to", "action"],
    getComponent: () => (
      <Loading
        key={12}
        component={<LazyNavigateActionCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["resize", "window", "action"],
    getComponent: () => (
      <Loading
        key={13}
        component={<LazyResizeWindowActionCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["debug"],
    getComponent: () => (
      <Loading key={14} component={<LazyDebugCard />} spinnerAnimation="grow" />
    )
  },
  {
    keywords: ["assert", "deep", "equal"],
    getComponent: () => (
      <Loading
        key={15}
        component={<LazyDeepEqualAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "not", "deep", "equal"],
    getComponent: () => (
      <Loading
        key={16}
        component={<LazyNotDeepEqualAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "contains"],
    getComponent: () => (
      <Loading
        key={17}
        component={<LazyContainsAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "not", "contains"],
    getComponent: () => (
      <Loading
        key={18}
        component={<LazyNotContainsAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "ok"],
    getComponent: () => (
      <Loading
        key={19}
        component={<LazyOkAssertCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["assert", "not", "ok"],
    getComponent: () => (
      <Loading
        key={20}
        component={<LazyNotOkAssertCard />}
        spinnerAnimation="grow"
      />
    )
  }
];

export default mappings;
