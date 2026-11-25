"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeAlert,
  CheckCircle2,
  ClipboardList,
  FileSearch,
  Fingerprint,
  Gavel,
  Shield,
  UserRound,
} from "lucide-react";

const cases = [
  {
    number: "EO-2026-0147",
    offense: "Armed Robbery",
    location: "Naivasha",
    priority: "High",
    status: "Under Investigation",
    investigator: "D. Kamau",
    evidence: 12,
    persons: 3,
    statements: 7,
  },
  {
    number: "EO-2026-0152",
    offense: "Aggravated Assault",
    location: "Nakuru",
    priority: "Critical",
    status: "Evidence Review",
    investigator: "J. Mwangi",
    evidence: 18,
    persons: 2,
    statements: 5,
  },
  {
    number: "EO-2026-0158",
    offense: "Burglary",
    location: "Gilgil",
    priority: "Medium",
    status: "Investigation",
    investigator: "A. Njoroge",
    evidence: 9,
    persons: 4,
    statements: 11,
  },
];

const timeline = [
  { label: "Case reported", time: "08:42", icon: ClipboardList },
  { label: "Investigator assigned", time: "09:16", icon: UserRound },
  { label: "Evidence added", time: "10:03", icon: Fingerprint },
  { label: "Investigation in progress", time: "11:27", icon: FileSearch },
  { label: "Prosecutor review", time: "Pending", icon: Gavel },
];

export default function EoccurrenceVisual() {
  const [caseIndex, setCaseIndex] = useState(0);
  const [timelineIndex, setTimelineIndex] = useState(0);

  const currentCase = cases[caseIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCaseIndex((current) => (current + 1) % cases.length);
      setTimelineIndex(0);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimelineIndex((current) =>
        current < timeline.length - 1 ? current + 1 : current,
      );
    }, 1200);
    return () => clearInterval(timer);
  }, [caseIndex]);

  const priorityClass =
    currentCase.priority === "Critical"
      ? "text-red-700 dark:text-red-400"
      : currentCase.priority === "High"
        ? "text-amber-700 dark:text-amber-400"
        : "text-stone-500 dark:text-stone-400";

  return (
    <div className="relative w-full overflow-hidden border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4 dark:border-stone-800">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center border border-stone-200 text-stone-700 dark:border-stone-800 dark:text-stone-300">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-stone-900 dark:text-stone-100">
              eOccurrence
            </p>
            <p className="font-mono text-sm text-stone-500 dark:text-stone-400">
              Criminal case management
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse bg-emerald-700 dark:bg-emerald-400" />
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-emerald-700 dark:text-emerald-400">
            Secure system
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        {/* Case overview */}
        <div className="border-b border-stone-200 lg:border-r lg:border-b-0 dark:border-stone-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCase.number}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.35 }}
            >
              {/* Case header */}
              <div className="flex items-center justify-between gap-3 border-b border-stone-200 px-5 py-3 dark:border-stone-800">
                <div className="flex items-center gap-2">
                  <BadgeAlert className="h-4 w-4 text-red-700 dark:text-red-400" />
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
                    Case {currentCase.number}
                  </span>
                </div>
                <span className={`font-mono text-xs font-semibold uppercase tracking-[0.15em] ${priorityClass}`}>
                  {currentCase.priority} priority
                </span>
              </div>

              <div className="px-5 py-4">
                {/* Offense */}
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
                      Offense
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
                      {currentCase.offense}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-stone-500 dark:text-stone-400">
                      {currentCase.location} · Felony case
                    </p>
                  </div>
                  <Gavel className="h-6 w-6 shrink-0 text-stone-400 dark:text-stone-500" />
                </div>

                {/* Current status */}
                <div className="mt-5 border border-stone-200 p-3.5 dark:border-stone-800">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
                      Current status
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-xs font-semibold text-lime-700 dark:text-lime-300">
                      <span className="h-1.5 w-1.5 animate-pulse bg-lime-700 dark:bg-lime-300" />
                      {currentCase.status}
                    </span>
                  </div>

                  <div className="mt-3 h-1 overflow-hidden bg-stone-200 dark:bg-stone-800">
                    <motion.div
                      animate={{
                        width: `${((timelineIndex + 1) / timeline.length) * 100}%`,
                      }}
                      transition={{ duration: 0.5 }}
                      className="h-full bg-lime-700 dark:bg-lime-300"
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-3 grid grid-cols-3 divide-x divide-stone-200 border border-stone-200 dark:divide-stone-800 dark:border-stone-800">
                  <CaseStat icon={<Fingerprint />} value={currentCase.evidence} label="Evidence" />
                  <CaseStat icon={<UserRound />} value={currentCase.persons} label="Persons" />
                  <CaseStat icon={<ClipboardList />} value={currentCase.statements} label="Statements" />
                </div>

                {/* Investigator */}
                <div className="mt-3 flex items-center justify-between border border-stone-200 px-3.5 py-3 dark:border-stone-800">
                  <div className="flex items-center gap-2.5">
                    <UserRound className="h-4 w-4 text-stone-500 dark:text-stone-400" />
                    <div>
                      <p className="font-mono text-xs text-stone-500 dark:text-stone-400">
                        Assigned investigator
                      </p>
                      <p className="font-mono text-sm text-stone-900 dark:text-stone-100">
                        {currentCase.investigator}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
                    Active
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Investigation timeline */}
        <div className="px-5 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-stone-900 dark:text-stone-100">
                Timeline
              </p>
              <p className="mt-1 font-mono text-xs text-stone-500 dark:text-stone-400">
                Complete case audit trail
              </p>
            </div>
            <FileSearch className="h-4 w-4 text-stone-400 dark:text-stone-500" />
          </div>

          <div className="relative mt-5">
            <div className="absolute left-[13px] top-3 h-[calc(100%-24px)] w-px bg-stone-200 dark:bg-stone-800" />
            <motion.div
              className="absolute left-[13px] top-3 w-px origin-top bg-lime-700 dark:bg-lime-300"
              animate={{ height: `${(timelineIndex / (timeline.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />

            <div className="space-y-4">
              {timeline.map((event, index) => {
                const Icon = event.icon;
                const complete = index <= timelineIndex;
                const active = index === timelineIndex;

                return (
                  <motion.div
                    key={event.label}
                    animate={{ opacity: complete ? 1 : 0.35 }}
                    className="relative flex items-center gap-3"
                  >
                    <motion.div
                      animate={{ scale: active ? [1, 1.1, 1] : 1 }}
                      transition={{ duration: 0.8, repeat: active ? Infinity : 0 }}
                      className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center border ${
                        complete
                          ? "border-lime-700/40 bg-lime-700/10 text-lime-700 dark:border-lime-300/40 dark:bg-lime-300/10 dark:text-lime-300"
                          : "border-stone-200 bg-white text-stone-400 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-600"
                      }`}
                    >
                      {complete && index === timeline.length - 1 ? (
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      ) : (
                        <Icon className="h-3.5 w-3.5" />
                      )}
                    </motion.div>

                    <div className="flex min-w-0 flex-1 items-center justify-between">
                      <p className="font-mono text-sm text-stone-900 dark:text-stone-100">
                        {event.label}
                      </p>
                      <span className="ml-3 font-mono text-xs text-stone-500 dark:text-stone-400">
                        {event.time}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Case progression */}
          <div className="mt-5 border border-stone-200 p-3 dark:border-stone-800">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
                Case progression
              </span>
              <span className="font-mono text-xs text-lime-700 dark:text-lime-300">
                {timelineIndex + 1}/{timeline.length}
              </span>
            </div>

            <div className="mt-3 flex items-center gap-1">
              {timeline.map((_, index) => (
                <motion.div
                  key={index}
                  animate={{
                    opacity: index <= timelineIndex ? 1 : 0.2,
                    scale: index === timelineIndex ? 1.05 : 1,
                  }}
                  className="h-1 flex-1 bg-lime-700 dark:bg-lime-300"
                />
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-1 font-mono text-xs uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
            Case details
            <ArrowRight className="h-3 w-3" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center gap-2 border-t border-stone-200 px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-stone-500 dark:border-stone-800 dark:text-stone-400">
        <span className="h-1.5 w-1.5 bg-lime-700 dark:bg-lime-300" />
        Secure case records · Evidence · Investigation history
      </div>
    </div>
  );
}

function CaseStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
}) {
  return (
    <div className="p-3">
      <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400">
        <span className="h-3.5 w-3.5 [&>svg]:h-full [&>svg]:w-full">{icon}</span>
        <span className="truncate font-mono text-xs">{label}</span>
      </div>
      <p className="mt-2 font-mono text-lg font-semibold text-stone-900 dark:text-stone-100">
        {value}
      </p>
    </div>
  );
}