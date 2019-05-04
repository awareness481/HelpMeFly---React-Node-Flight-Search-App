import React from "react";
import Switch from "@material-ui/core/Switch";

const SwitchToggle = props => {
  return (
    <div className="switch">
      <div className="switch--wrapper">
        <span className="switch--wrapper__text">Oneway trip</span>
        <Switch
          className="switch--wrapper__toggle"
          onChange={props.change}
          name="oneway"
          value={props.value}
        />
      </div>
    </div>
  );
};

export default SwitchToggle;
