import React from "react";
import "./spinner.css";

const WithSpiner = WrappedComponent => {
  function LoadingSpiner(props) {
    return props.isLoading ? (
      <div class="loader"></div>
    ) : (
      <WrappedComponent {...props} />
    );
  }
  return LoadingSpiner;
};
export default WithSpiner;
