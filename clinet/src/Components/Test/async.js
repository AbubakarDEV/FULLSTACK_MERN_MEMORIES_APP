import React, { useEffect } from "react";

function AsyncProgramming() {
  const datas = [
    { name: "abc", professtion: "abczz" },
    { name: "abc2", professtion: "abczz2" },
    { name: "abc3", professtion: "abczz3" },
  ];
  const arr = useEffect(() => {
    return new Promise((resolve, reject) => {});
  });
  return <div>Async</div>;
}

export default AsyncProgramming;
