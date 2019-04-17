import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = ({ component, spinnerAnimation = "border" }) => (
  <React.Suspense
    fallback={<Spinner animation={spinnerAnimation} variant="secondary" />}
  >
    {component}
  </React.Suspense>
);
export default Loading;
