import Link from "next/link";
import style from "@/app/page.module.scss"

const Home = () => {
  return (
    <div className={style.container}>
      <div>Hello World !</div>
      <Link href={'/pageName'}>
        View API call sample.
      </Link>
    </div>
  );
}

export default Home;