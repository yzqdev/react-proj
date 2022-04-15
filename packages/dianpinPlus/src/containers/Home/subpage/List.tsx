import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getListData } from "../../../fetch/home/home";
import HomeList from "../../../components/List";
import LoadMore from "../../../components/LoadMore";

import { ListData } from "./AdData";

import "./style.module.less";
function List(props: any) {
  useEffect(() => {
    const cityName = props.cityName;
    const result = getListData(cityName, 0);
    resultHandle(result);
  });

  function loadMoreData(props: { cityName: any; page: any; }) {
    //记录状态
    setIsLoadingMore(true);

    const cityName = props.cityName;
    const page = props.page;
    const result = getListData(cityName, page);
    resultHandle(result);

    //增加page
    setPage(page + 1);
  }
  function resultHandle(result) {
    result
      .then((data) => {
        const hasMore = data.hasMore;
        setHasMore(hasMore);
        setData(data.concat(data));
        setIsLoadingMore(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  let [hasMore, setHasMore] = useState(false);
  let [data, setData] = useState([]);
  let [isLoadingMore, setIsLoadingMore] = useState(false);
  let [page, setPage] = useState(0);
  return (
    <div>
      <h2 className="home-list-title">猜你喜欢</h2>
      {data.length ? <HomeList data={data} /> : <div>{/*加载中*/}</div>}
      {hasMore ? (
        <LoadMore isLoadingMore={isLoadingMore} loadMoreFn={loadMoreData} />
      ) : (
        ""
      )}
    </div>
  );

  //处理数据
}

export default List;
List.propTypes = { cityName: PropTypes.string,page:PropTypes.number };
