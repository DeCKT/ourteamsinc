import { useEffect, useState } from "react";

export default function Image(props) {
  const [image, setImage] = useState("");
  // useEffect(() => {
  //   const fetchImg = async () => {
  //     try {
  //       const resp = await import(
  //         `../assets/images/${props.img}` /* @vite-ignore */
  //       );
  //       setImage(resp.default);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   fetchImg();
  // }, [props.img]);
  return <img src={props.img} className="img-third"></img>;
}
