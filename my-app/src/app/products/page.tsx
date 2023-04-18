import Link from "next/link";

const products = ["shirt", "pant", "skirt"];

export default function ProductsPage() {
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
