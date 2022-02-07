import React, { useState, useEffect } from "react";
// import imageData from "./imageData";
import ImageRenderer from "./ImageRenderer";
import "./styles.css";

export default function App() {
  const [data, setData] = useState(null);

  const fetchURL = "https://picsum.photos/v2/list?page=2&limit=100&height=200";
  const getData = () => fetch(`${fetchURL}`).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  console.log(data);
  return (
    <div>
      <h1>Lazy Load Images</h1>
      <section>
        {data &&
          data.map((data) => (
            <ImageRenderer
              key={data.id}
              url={data.download_url}
              thumb={data.download_url}
              width={data.width}
              height={data.height}
            />
          ))}
      </section>
    </div>
  );
}
