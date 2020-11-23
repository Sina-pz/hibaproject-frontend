import React from "react";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";

const Pagination = ({ pageCount, page, section, ...props }) => {
    let history = useHistory();
  return (
    <ReactPaginate
      pageCount={pageCount}
      initialPage={parseInt(page) - 1}
      containerClassName={"pagination"}
      onPageChange={(pageEvent) => {
        if (parseInt(page) - 1 !== pageEvent.selected) {
            history.push(`/${section}/${pageEvent.selected + 1}`);
        
          console.log({ pageEvent, page });
        }
      }}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
