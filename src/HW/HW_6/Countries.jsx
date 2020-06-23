import React from "react";

export function Countries(props) {
  const data = props.countriesData.data;
  function orderChange(changeEvent) {
    props.setOrder(changeEvent.target.value);
  }
  function searchChange(changeEvent) {
    props.setSearch(changeEvent.target.value);
  }

  return (
    <>
      <div className="tools">
        <div className="limit">
          <span>Limit on page:</span>
          <button onClick={() => props.setLimit("10")}>10</button>
          <button onClick={() => props.setLimit("20")}>20</button>
          <button onClick={() => props.setLimit("30")}>30</button>
        </div>
        <div className="currentPage">
          <span>Page</span>
          <button onClick={() => props.setPage(props.currentPage - 1)}>
            previous
          </button>
          <input type="text" value={props.currentPage} />
          <button onClick={() => props.setPage(props.currentPage + 1)}>
            next
          </button>
        </div>
        <form className="sortBy">
          <div>Sort by:</div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="total_cases"
                checked={props.order === "total_cases"}
                onChange={orderChange}
              />
              total_cases
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="new_cases"
                checked={props.order === "new_cases"}
                onChange={orderChange}
              />
              new_cases
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="total_recovered"
                checked={props.order === "total_recovered"}
                onChange={orderChange}
              />
              total_recovered
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="total_deaths"
                checked={props.order === "total_deaths"}
                onChange={orderChange}
              />
              total_deaths
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="new_deaths"
                checked={props.order === "new_deaths"}
                onChange={orderChange}
              />
              new_deaths
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="active_cases"
                checked={props.order === "active_cases"}
                onChange={orderChange}
              />
              active_cases
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="serious_critical"
                checked={props.order === "serious_critical"}
                onChange={orderChange}
              />
              serious_critical
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="cases_per_mill_pop"
                checked={props.order === "cases_per_mill_pop"}
                onChange={orderChange}
              />
              cases_per_mill_pop
            </label>
          </div>
        </form>
        <div className="search">
          <div>Search:</div>
          <input
            type="text"
            value={props.search}
            onChange={searchChange}
            name=""
            id=""
          />
        </div>
      </div>
      <ul>
        {data.rows.map((area) => (
          <ul style={{ paddingBottom: `30px` }}>
            {Object.keys(area).map((key) => (
              <li>
                {key} : {area[key]}
              </li>
            ))}
          </ul>
        ))}
      </ul>
    </>
  );
}
