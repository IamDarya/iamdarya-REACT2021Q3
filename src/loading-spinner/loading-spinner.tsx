import React from "react";
import "../style.scss";

type Props = {
  isLoading: boolean;
};

export function LoadingSpinner(props: Props): JSX.Element {
  return (
    <>
      {props.isLoading && (
        <div className="wrap">
          <div className="spinner-wrap">
            <div className="spinner">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
