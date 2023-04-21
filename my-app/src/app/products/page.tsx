import { getProducts } from "@/service/products";
import Link from "next/link";
import styles from "./page.module.css";

// 3초마다 데이터 받게
// export const revalidate = 10;

export default async function ProductsPage() {
  // 서버파일(데이터베이스)에 데이터 가져와 사용하기
  const products = await getProducts();
  const res = await fetch("https://meowfacts.herokuapp.com", {
    // next: { revalidate: 0 }, //SSR
    next: { revalidate: 3 }, //SSI
  });
  const data = await res.json();
  const factText = data.data[0];
  return (
    <>
      <h1>제품소개</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <article className="styles.article">{factText}</article>
    </>
  );
}
