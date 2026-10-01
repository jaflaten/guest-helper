"use client";

import { useState, type ReactNode } from "react";
import { sendFeedback } from "@/lib/feedback";
import { savedStayToken } from "./StayLink";

type Labels = {
  question: string;
  yes: string;
  no: string;
  thanks: string;
  sorry: string;
  commentPrompt: string;
  send: string;
  sent: string;
};

/**
 * "Did this help?" A "No" is sent to Jorn's Slack right away, offers an optional
 * comment, and shows the contact card.
 */
export function Feedback({
  guide,
  lang,
  labels,
  contact,
}: {
  guide: string;
  lang: string;
  labels: Labels;
  contact: ReactNode;
}) {
  const [vote, setVote] = useState<"yes" | "no" | null>(null);
  const [comment, setComment] = useState("");
  const [commentSent, setCommentSent] = useState(false);

  if (vote === "no") {
    return (
      <div className="flex flex-col gap-3">
        <div className="rounded-[18px] bg-white p-[18px]">
          <p className="text-center text-base font-semibold">{labels.sorry}</p>
          {commentSent ? (
            <p className="mt-3 text-center text-[15px] text-muted">{labels.sent}</p>
          ) : (
            <form
              className="mt-3 flex flex-col gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (!comment.trim()) return;
                setCommentSent(true);
                void sendFeedback({ guide, lang, comment, stay: savedStayToken() });
              }}
            >
              <label className="text-sm text-muted">
                {labels.commentPrompt}
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  maxLength={500}
                  rows={3}
                  className="mt-1 w-full rounded-xl border border-line bg-paper p-3 text-[15px] text-ink"
                />
              </label>
              <button type="submit" className="h-11 cursor-pointer rounded-xl bg-pine text-[15px] font-semibold text-white">
                {labels.send}
              </button>
            </form>
          )}
        </div>
        {contact}
      </div>
    );
  }

  return (
    <div className="rounded-[18px] bg-white p-[18px] text-center">
      {vote === "yes" ? (
        <p className="text-base font-semibold">{labels.thanks}</p>
      ) : (
        <>
          <p className="text-base font-semibold">{labels.question}</p>
          <div className="mt-3 flex justify-center gap-2.5">
            <button
              type="button"
              onClick={() => setVote("yes")}
              className="h-11 min-w-24 cursor-pointer rounded-xl border border-line bg-paper text-[15px] font-semibold"
            >
              {labels.yes}
            </button>
            <button
              type="button"
              onClick={() => {
                setVote("no");
                void sendFeedback({ guide, lang, stay: savedStayToken() });
              }}
              className="h-11 min-w-24 cursor-pointer rounded-xl border border-line bg-paper text-[15px] font-semibold"
            >
              {labels.no}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
