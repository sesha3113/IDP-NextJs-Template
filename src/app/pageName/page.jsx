import { services } from "@/services";
import { urlData } from "@/configs";

async function getData() {
  const { sampleApi } = urlData;
  const { getData } = services;
  const res = await getData(sampleApi);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const PageName = async () => {
  const data = await getData();
  return (
    <>
      <div>Sample data</div>
      {data &&
        data.products.map((item, index) => {
          return <div key={index}>{item.title}</div>;
        })}
    </>
  );
};

export default PageName;
