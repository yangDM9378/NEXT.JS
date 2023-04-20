import { getProducts } from "@/service/products";
import Link from "next/link";

export default function ProductsPage() {
  // 서버파일(데이터페이스)에 데이터 가져와 사용하기
  const products = getProducts();
  return (
    <>
      <h1>제품소개</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
