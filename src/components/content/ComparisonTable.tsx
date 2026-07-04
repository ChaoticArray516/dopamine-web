import type { ReactNode } from "react";

type ComparisonRow = {
  label: string;
  values: ReactNode[];
  winnerIndex?: number;
};

type ComparisonTableProps = {
  columns: string[];
  rows: ComparisonRow[];
};

export function ComparisonTable({ columns, rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse rounded-2xl border border-zinc-200 text-left text-sm dark:border-zinc-800">
        <thead>
          <tr className="bg-zinc-100 dark:bg-zinc-900">
            <th className="px-4 py-3 font-semibold">Feature</th>
            {columns.map((col) => (
              <th key={col} className="px-4 py-3 font-semibold">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-t border-zinc-200 dark:border-zinc-800">
              <td className="px-4 py-3 font-medium">{row.label}</td>
              {row.values.map((value, i) => (
                <td
                  key={i}
                  className={`px-4 py-3 ${row.winnerIndex === i ? "bg-emerald-50 font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200" : ""}`}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
