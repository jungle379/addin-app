import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Demo Site</title>
      </Head>
      <img src="/images/hlogo.jpg" />
      <img src="/images/top_title.jpg" />
      <h1 className="text-red-300">Demo Site</h1>
      <h2>
        <Link href="posts/news">最新情報</Link>
        <Link href="posts/policy">〇〇の理念</Link>
        <Link href="posts/service">業務内容</Link>
        <Link href="posts/company">会社概要</Link>
        <Link href="posts/recruit">採用情報</Link>
        <Link href="posts/contact">お問い合わせ</Link>
      </h2>
    </div>
  );
}
