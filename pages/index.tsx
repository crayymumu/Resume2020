import Head from "next/head";
import Download from "../components/Download";
import Zh from "./zh";

import "./index.module.scss";
import index from "./index.module.scss";

export default function Resume() {
  return (
    <div className={`${index.typo} resume`}>
      <Head>
        <title>朱杨松简历-前端工程师-7年-2025</title>
      </Head>
      <Zh />
      <Download />
      <div className={index.version}>version: v2022.02.10</div>
    </div>
  );
}
