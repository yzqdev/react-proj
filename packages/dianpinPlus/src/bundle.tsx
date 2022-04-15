import React, { Component, useEffect, useState } from "react";
/*
代码分割模型，调用该模型的方式如下。
 import SearchContainer from 'bundle-loader?lazy!./containers/Search/searchContainer';

 const Search = () => (
     <Bundle load={SearchContainer}>
     {(Search) => <Search />}
 </Bundle>
 )
 */

function Bundle(props: any) {
  let [mod, setMod] = useState(null);
  useEffect(() => {
    props.load((mod: any) => {
      setMod(mod.default ? mod.default : mod);
    });
  });

  if (!mod) return false;
  return props.children(mod);
}

export default Bundle;
