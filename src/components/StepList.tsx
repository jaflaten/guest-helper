import { t, type Locale } from "@/i18n/config";
import type { GuideStep } from "@/content";
import { PhotoBox } from "./PhotoBox";

const tints = ["#d9cbb8", "#d3dfda", "#e6d8cc", "#ddd5e0", "#d6dde4"];

/** Numbered steps, each with an optional photo. Used by guides, arrival and check-out. */
export function StepList({ steps, lang }: { steps: GuideStep[]; lang: Locale }) {
  return (
    <ol className="flex flex-col gap-3.5">
      {steps.map((step, i) => (
        <li key={i} className="overflow-hidden rounded-[18px] bg-white">
          {step.video ? (
            <video
              src={step.video}
              poster={step.poster}
              controls
              muted
              playsInline
              preload="none"
              className="max-h-[70vh] w-full bg-ink object-contain"
            />
          ) : step.photo && (
            <div className="relative aspect-[4/3]">
              <PhotoBox photo={step.photo} lang={lang} tint={tints[i % tints.length]} />
            </div>
          )}
          <div className="flex gap-3.5 px-4 pb-4 pt-3.5">
            <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-paper">
              {i + 1}
            </span>
            <div>
              <h3 className="text-base font-semibold">{t(step.title, lang)}</h3>
              <p className="mt-0.5 text-[15px] leading-relaxed text-ink-soft">{t(step.body, lang)}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
