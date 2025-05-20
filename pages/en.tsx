import Head from "next/head";
import Info from "../components/Info/En";
import Education from "../components/Education/En";
import Experience from "../components/Experience/En";
import Page from "../components/Common/Page";
import Skills from "../components/Skills/En";
import Project from "../components/Project/En";
import Download from "../components/Download/En";
import Zh from "./zh";

import index from "./index.module.scss";

export default function Resume() {
  return (
    <>
      <div className={`${index.typo} ${index.resume}`}>
        <Head>
          <title>Yangsong-Zhu's Resume-Front-end-Engineer-4-years-2022</title>
        </Head>
        <Page className={index.page1}>
          <div className={index.left}>
            <Info />
            <Experience />
          </div>
          <div className={index.right}>
            <Skills />
            <Education />
          </div>
        </Page>
        <Page className={index.page2}>
          <Project />
        </Page>
        <Download />
      </div>
      <div>
        <Zh />
      </div>
    </>
  );
}
