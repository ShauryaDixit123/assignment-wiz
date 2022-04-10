import { useState, useEffect } from "react";
import axios from "axios";
import DashBoard from "../../components/DashBoard";
import { useRouter } from "next/router";

const ports = () => {
  const headingForPort = ["Name", "Code", "City", "State", "Country"];
  const headingForHSCode = ["Name", "Code"];
  const portsDataUrl = "https://staging-api.wizfreight.com/v1/ports";
  const hscodeDataUrl = "https://staging-api.wizfreight.com/v1/hs-codes";
  const [port, setPort] = useState(null);
  const [hscode, setHSCode] = useState(null);
  const router = useRouter();

  const getData = async () => {
    const response = await axios.get(portsDataUrl);
    const dataFetched = response.data.ports;
    if (!port) {
      setPort(dataFetched);
    }
  };

  const getHSCodeData = async () => {
    const response = await axios.get(hscodeDataUrl);
    const dataFetched = response.data.hs_codes;
    if (!hscode) {
      setHSCode(dataFetched);
    }
    console.log(hscode);
  };
  const pageNum = router.asPath.split("/")[2];
  const address = router.asPath.split("/")[1];
  console.log(pageNum, "asdasd", address);

  useEffect(() => {
    getData();
    getHSCodeData();
  }, [port, hscode]);

  if (address === "ports") {
    return (
      <>
        <DashBoard header={headingForPort} data={port} pageAdd={address} />
      </>
    );
  }
  if (address === "hscodes") {
    return (
      <>
        <DashBoard header={headingForHSCode} data={hscode} pageAdd={address} />
      </>
    );
  }

  return <div>hiii</div>;
};
export default ports;
