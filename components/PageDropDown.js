import { useRouter } from "next/router";

function PageDropDown({ numOfPages, address }) {
  const router = useRouter();
  const newArr = [];
  for (let j = 21; j <= numOfPages; j++) {
    newArr.push(j);
  }
  const handleSelect = (e) => {
    router.push(`/${address}/${e.target.value}`);
  };
  const selectStyle = {
    maxHeight: "280px",
    width: "50px",
    marginLeft: "10px",
  };
  const dropDown = newArr.map((val, i) => {
    return (
      <option value={val} key={i}>
        {val}
      </option>
    );
  });
  return (
    <div>
      <select onChange={(e) => handleSelect(e)} style={selectStyle}>
        {dropDown}
      </select>
    </div>
  );
}
export default PageDropDown;
