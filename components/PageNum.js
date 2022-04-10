import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import PageDropDown from "./PageDropDown";

function PageNum({ count }) {
  const router = useRouter();
  const address = router.asPath.split("/")[1];

  const jsxNum = () => {
    if (count > 20) {
      const numarr20 = Array.from({ length: 20 }, (_, index) => index + 1);

      return numarr20.map((val, i) => {
        return (
          <div key={i}>
            <Link href={`/${address}/${val}`}>
              <a
                style={{
                  height: "30px",
                  width: "30px",
                  border: "1px solid black",
                  fontSize: "20px",
                  cursor: "pointer",
                  marginLeft: "2px",
                  boxSizing: "borderbox",
                }}
              >
                {val}
              </a>
            </Link>
          </div>
        );
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {jsxNum()}
      <PageDropDown numOfPages={count - 20} address={address} />
    </div>
  );
}

export default PageNum;
