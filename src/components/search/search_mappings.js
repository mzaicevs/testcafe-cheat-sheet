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
  import("../cards/ClickActionCard")
);
const LazyDragActionCard = React.lazy(() => import("../cards/DragActionCard"));
const LazyHoverActionCard = React.lazy(() =>
  import("../cards/HoverActionCard")
);
const LazySelectActionCard = React.lazy(() =>
  import("../cards/SelectActionCard")
);
const LazyTypeTextActionCard = React.lazy(() =>
  import("../cards/TypeTextActionCard")
);
const LazyTypePressKeyActionCard = React.lazy(() =>
  import("../cards/PressKeyActionCard")
);
const LazyTypeNavigateActionCard = React.lazy(() =>
  import("../cards/NavigateActionCard")
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
        component={<LazyTypePressKeyActionCard />}
        spinnerAnimation="grow"
      />
    )
  },
  {
    keywords: ["navigate", "navigation", "url", "go to", "action"],
    getComponent: () => (
      <Loading
        key={12}
        component={<LazyTypeNavigateActionCard />}
        spinnerAnimation="grow"
      />
    )
  }
];

export default mappings;
