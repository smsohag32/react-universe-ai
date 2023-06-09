import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import SingleData from "../SingleData/SingleData";

const Card = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [uniqId, setUniqId] = useState(null);
  const [singleData, setSingleData] = useState({});
  const seeMoreHandle = () => {
    setShowAll(true);
  };
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const value = await res.json();
      setData(value.data.tools);
    };
    loadData();
  }, []);
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqId}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data.data));
  }, [uniqId]);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:px-4 mx-auto">
        {data?.slice(0, showAll ? 12 : 6).map((singleData, index) => (
          <SingleData key={index} setUniqId={setUniqId} {...singleData} />
        ))}
      </div>
      <span className="text-center inline bg-red-300" onClick={seeMoreHandle}>
        {!showAll && <Button>Show All</Button>}
      </span>
      <Modal key={uniqId} singleData={singleData}></Modal>
    </>
  );
};

export default Card;
