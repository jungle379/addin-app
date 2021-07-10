import Link from "next/link";
import Layout from "../components/layout";

const Result = () =>{
  return <Layout>
    <div>今週の重賞一覧</div>
    <h1>
    <Link href="../race1">宝塚記念(G1)/6月27日/15:40</Link>
    </h1>
    {/* <h2>
    <Link href="../race2"></Link>
    </h2> */}
    </Layout>;
};

export default Result;