import React from "react";
import styles from "./selectTab.module.css";

export const SelectTab = ({ setTab, tab }) => (
  <div className={styles.selectTab_wrap}>
    <h4>Select todos type:</h4>
    <input
      type="radio"
      id="status_1"
      name="status"
      value="current"
      checked={tab === "current"}
      onChange={(e) => {
        setTab(e.target.value);
      }}
    />
    <label for="status_1">current</label>

    <input
      type="radio"
      id="status_2"
      name="status"
      value="checked"
      checked={tab === "checked"}
      onChange={(e) => {
        setTab(e.target.value);
      }}
    />
    <label for="status_2">checked</label>

    <input
      type="radio"
      id="status_3"
      name="status"
      value="removed"
      checked={tab === "removed"}
      onChange={(e) => {
        setTab(e.target.value);
      }}
    />
    <label for="status_3">removed</label>
  </div>
);
