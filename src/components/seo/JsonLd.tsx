// 通用 JSON-LD 渲染器
// 依据: MASTER_SOP.md SOP-3B-01 + SEO_TECH_SPEC.md §1
// Server Component：在服务端 HTML 中内联输出 <script type="application/ld+json">

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
};

export function JsonLd({ data, id }: JsonLdProps) {
  // JSON.parse(JSON.stringify()) 作为运行时自检，同时去除 undefined 字段
  const sanitized = JSON.parse(JSON.stringify(data));
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(sanitized) }}
    />
  );
}
