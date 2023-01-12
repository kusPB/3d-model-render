import React, { useEffect, useState } from "react";
import { useDataContext } from "../context";
import { useHistory } from "react-router-dom";
function ModelUploader() {
  const history = useHistory();
  const [dataContext, setDataContext] = useDataContext();
  const [data, setData] = useState();
  const testFunc = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const urrl = URL.createObjectURL(file);
    localStorage.setItem("token", urrl);
    setData(urrl);
  };
  const testF = async () => {
    const blob = await fetch(dataContext);
    const bblob = await blob.blob();
    console.log(bblob);
    setDataContext(data);
  };

  useEffect(() => {
    testF();
  });

  return (
    <>
      <input id="browse" type="file" onChange={testFunc} />
    </>
  );
}

export default ModelUploader;
