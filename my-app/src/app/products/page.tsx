import MeowArticle from "@/components/MeowArticle";
import { getProducts } from "@/service/products";
import Link from "next/link";

// 3초마다 데이터 받게
// export const revalidate = 10;

export default async function ProductsPage() {
  // // 에러 error.tsx 확인을 위한 에러 발생시키기
  // throw new Error();
  // 서버파일(데이터베이스)에 데이터 가져와 사용하기
  const products = await getProducts();

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
      <MeowArticle />
    </>
  );
}
