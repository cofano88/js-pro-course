import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// import general from "./general-stats.json";
// import countries from "./countries-search.json";
import { Nav } from "./Nav";
import { RoutedContent } from "./RoutedContent";

export function App() {
  const [generalData, setGeneralData] = useState({ data: {} });
  const [countriesData, setCountriesData] = useState({ data: {} });
  const [currentPage, setCurrentPage] = useState(1);
  const [limitItems, setLimitItems] = useState(10);
  const [totalPages, setTotalPages] = useState();
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("total_cases");

  useEffect(() => {
    const getData = async () => {
      const responce = await fetch(
        " https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats"
      );
      const data = await responce.json();
      setGeneralData(data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const responce = await fetch(
        ` https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?page=${currentPage}&limit=${limitItems}&order=${order}&search=${search}`
      );
      const data = await responce.json();
      setCountriesData(data);
      setTotalPages(data.data.paginationMeta.totalPages);
    };
    getData();
  }, [currentPage, limitItems, search, order]);

  // setLimit((limit) => {
  //   setLimitItems(limit);
  // });

  // setCurrPage((page) => {
  //   setCurrentPage(page);
  // });

  function setLimit(limit) {
    setLimitItems(limit);
    setCurrentPage(1);
  }

  function setPage(page) {
    if (1 <= page && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  return (
    <>
      <BrowserRouter>
        <div className="header">
          COVID-19. #STAY HOME
          <hr />Y can see current worldwide statistics below...
        </div>
        <Nav />
        <RoutedContent
          generalData={generalData}
          countriesData={countriesData}
          totalPages={totalPages}
          currentPage={currentPage}
          order={order}
          search={search}
          setLimit={(limit) => setLimit(limit)}
          setPage={(page) => setPage(page)}
          setOrder={(order) => setOrder(order)}
          setSearch={(search) => setSearch(search)}
        />
      </BrowserRouter>
    </>
  );
}
