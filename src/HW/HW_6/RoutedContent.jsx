import React from "react";
import { Switch, Route } from "react-router-dom";
import { General } from "./General";
import { Countries } from "./Countries";

export function RoutedContent(props) {
  return (
    <Switch>
      <Route
        path="/general"
        render={() => <General generalData={props.generalData} />}
      ></Route>
      <Route
        path="/countries"
        render={() => (
          <Countries
            countriesData={props.countriesData}
            totalPages={props.totalPages}
            currentPage={props.currentPage}
            order={props.order}
            search={props.search}
            setLimit={(limit) => props.setLimit(limit)}
            setPage={(page) => props.setPage(page)}
            setOrder={(order) => props.setOrder(order)}
            setSearch={(search) => props.setSearch(search)}
          />
        )}
      ></Route>
    </Switch>
  );
}
