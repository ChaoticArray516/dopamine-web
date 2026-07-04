type HowToStep = {
  position: number;
  name: string;
  text: string;
};

type HowToStepsProps = {
  steps: HowToStep[];
  title?: string;
};

export function HowToSteps({ steps, title }: HowToStepsProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
      {title && <h3 className="mb-4 font-display text-xl font-bold">{title}</h3>}
      <ol className="space-y-4">
        {steps.map((step) => (
          <li key={step.position} className="flex gap-4">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-white dark:bg-white dark:text-zinc-900">
              {step.position}
            </span>
            <div>
              <h3 className="font-semibold">{step.name}</h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-400">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
