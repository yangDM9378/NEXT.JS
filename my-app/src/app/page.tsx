import Counter from "@/components/Counter";
import { Inter } from "next/font/google";
import Image from "next/image";
import { notFound } from "next/navigation";
import os from "os"; // 노드 APIs

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // notFound();
  console.log("안녕-서버");
  console.log(os.hostname());
  return (
    <>
      <h1>홈페이지</h1>
      <Counter />
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="shop"
        width={400}
        height={400}
      />
    </>
  );
}
