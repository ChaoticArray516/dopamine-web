import { Breadcrumb, type BreadcrumbItem } from "@/components/seo/Breadcrumb";

type BreadcrumbNavProps = {
  items: BreadcrumbItem[];
};

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <div className="py-4">
      <Breadcrumb items={items} />
    </div>
  );
}
