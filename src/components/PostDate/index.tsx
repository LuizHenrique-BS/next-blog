"use client";

import { useSyncExternalStore } from "react";
import { formatDatetime, formatRelatedDate } from "@/utils/format-datetime";

const emptySubscribe = () => () => {};

type PostDateProps = {
  dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  return (
    <time
      className="text-slate-600 text-sm/tight"
      dateTime={dateTime}
      title={isClient ? formatRelatedDate(dateTime) : undefined}
      suppressHydrationWarning
    >
      {formatDatetime(dateTime)}
    </time>
  );
}
