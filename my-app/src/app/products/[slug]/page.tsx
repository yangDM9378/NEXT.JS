import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function PantsPage({ params }: Props) {
  if (params.slug === "noting") {
    notFound();
  }
  return <div>{params.slug} 제품 설명 페이지</div>;
}

export function genrateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
