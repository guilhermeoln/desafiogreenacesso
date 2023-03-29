import { useSelector } from "react-redux";
import { useEffect } from "react";

type MyState = {
  personagens: string[];
};

export default function Home() {
  const personagens = useSelector((state: MyState) => state.personagens);

  useEffect(() => {
    console.log(personagens);
  }, []);

  return <>oi</>;
}
