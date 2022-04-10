import PageNum from "./PageNum";
import dashboardstyle from "./Dashboard.module.css";
import { useRouter } from "next/router";
import Head from "next/head";

function DashBoard({ pageAdd, header, data }) {
  if (!data) {
    return <div>Loading!</div>;
  }
  const router = useRouter();
  const pageNum = router.asPath.split("/")[2];
  console.log(pageNum);
  const styles = {
    listStyleType: "none",
  };
  const lowerLimit = () => {
    if (pageNum === 1) {
      return 0;
    } else {
      return 10 * pageNum - 9;
    }
  };
  const upperLimit = () => {
    return pageNum * 10;
  };
  // const renderJSXFunction = (info) => {
  //   data.slice(lowerLimit(), upperLimit()).map((val, i) => {
  //     return <li key={i}>{val[info]}</li>;
  //   });
  // };

  const renderName = data.slice(lowerLimit(), upperLimit()).map((val, i) => {
    return <li key={i}>{val.name}</li>;
  });
  const renderCode = data.slice(lowerLimit(), upperLimit()).map((val, i) => {
    return <li key={i}>{val.code}</li>;
  });
  const renderCity = data.slice(lowerLimit(), upperLimit()).map((val, i) => {
    return <li key={i}>{val?.info?.city?.name}</li>;
  });
  const renderState = data.slice(lowerLimit(), upperLimit()).map((val, i) => {
    return <li key={i}>{val?.info?.city?.name}</li>;
  });
  const renderCountry = data.slice(lowerLimit(), upperLimit()).map((val, i) => {
    return <li key={i}>{val?.info?.city?.info?.country?.name}</li>;
  });

  return (
    <>
      <Head>
        <title>{pageAdd}</title>
      </Head>
      <div className={dashboardstyle.container}>
        <div className={dashboardstyle.tablecolumn}>
          <div className={dashboardstyle.ulitems}>
            <ul style={styles}>
              <h1>{header[0]}</h1>
              {renderName}
            </ul>
            <ul style={styles}>
              <h1>{header[1]}</h1>
              {renderCode}
            </ul>
            {pageAdd === "ports" ? (
              <>
                <ul style={styles}>
                  <h1>{header[2]}</h1>
                  {renderCity}
                </ul>
                <ul style={styles}>
                  <h1>{header[3]}</h1>
                  {renderState}
                </ul>
                <ul style={styles}>
                  <h1>{header[4]}</h1>
                  {renderCountry}
                </ul>
              </>
            ) : null}
          </div>
        </div>

        <PageNum count={data.length / 10} />
      </div>
    </>
  );
}

export default DashBoard;
