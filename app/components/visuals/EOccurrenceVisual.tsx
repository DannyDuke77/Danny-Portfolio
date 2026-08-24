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
  {
    label: "Case reported",
    time: "08:42",
    icon: ClipboardList,
  },
  {
    label: "Investigator assigned",
    time: "09:16",
    icon: UserRound,
  },
  {
    label: "Evidence added",
    time: "10:03",
    icon: Fingerprint,
  },
  {
    label: "Investigation in progress",
    time: "11:27",
    icon: FileSearch,
  },
  {
    label: "Prosecutor review",
    time: "Pending",
    icon: Gavel,
  },
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

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-slate-800 bg-[#080c14] p-5 shadow-2xl shadow-slate-950/50 sm:p-7">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-red-500/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-blue-500/[0.06] blur-3xl" />

      {/* Header */}
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900">
            <Shield className="h-5 w-5 text-slate-300" />
          </div>

          <div>
            <p className="text-sm font-bold tracking-tight text-white">
              eOccurrence
            </p>

            <p className="text-[11px] text-slate-500">
              Criminal Case Management
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.07] px-3 py-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

          <span className="text-[10px] font-medium text-emerald-400">
            Secure System
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ================================================================
            CASE OVERVIEW
        ================================================================= */}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentCase.number}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80"
          >
            {/* Case header */}
            <div className="flex items-center justify-between gap-3 border-b border-slate-800 bg-slate-900 px-4 py-3">
              <div className="flex items-center gap-2">
                <BadgeAlert className="h-4 w-4 text-red-400" />

                <span className="font-mono text-[10px] font-semibold tracking-wide text-slate-400">
                  CASE {currentCase.number}
                </span>
              </div>

              <span
                className={`rounded-full border px-2.5 py-1 text-[9px] font-semibold ${
                  currentCase.priority === "Critical"
                    ? "border-red-500/20 bg-red-500/10 text-red-400"
                    : currentCase.priority === "High"
                      ? "border-amber-500/20 bg-amber-500/10 text-amber-400"
                      : "border-blue-500/20 bg-blue-500/10 text-blue-400"
                }`}
              >
                {currentCase.priority.toUpperCase()} PRIORITY
              </span>
            </div>

            <div className="p-4 sm:p-5">
              {/* Offense */}
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-600">
                    Offense
                  </p>

                  <h3 className="mt-1 text-2xl font-bold tracking-tight text-white">
                    {currentCase.offense}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {currentCase.location} · Felony Case
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-500/10 bg-red-500/[0.06]">
                  <Gavel className="h-5 w-5 text-red-400" />
                </div>
              </div>

              {/* Current status */}
              <div className="mt-6 rounded-xl border border-slate-800 bg-[#080c14] p-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-slate-600">
                    Current status
                  </span>

                  <span className="flex items-center gap-1.5 text-[10px] font-semibold text-blue-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                    {currentCase.status}
                  </span>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-800">
                  <motion.div
                    animate={{
                      width: `${
                        ((timelineIndex + 1) / timeline.length) * 100
                      }%`,
                    }}
                    transition={{ duration: 0.5 }}
                    className="h-full rounded-full bg-blue-500"
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="mt-3 grid grid-cols-3 gap-2">
                <CaseStat
                  icon={<Fingerprint />}
                  value={currentCase.evidence}
                  label="Evidence"
                />

                <CaseStat
                  icon={<UserRound />}
                  value={currentCase.persons}
                  label="Persons of Interest"
                />

                <CaseStat
                  icon={<ClipboardList />}
                  value={currentCase.statements}
                  label="Statements"
                />
              </div>

              {/* Investigator */}
              <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-800 bg-[#080c14] px-3.5 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800">
                    <UserRound className="h-3.5 w-3.5 text-slate-400" />
                  </div>

                  <div>
                    <p className="text-[9px] text-slate-600">
                      Assigned investigator
                    </p>

                    <p className="text-[10px] font-medium text-slate-300">
                      {currentCase.investigator}
                    </p>
                  </div>
                </div>

                <span className="text-[9px] text-slate-600">
                  Active case
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ================================================================
            INVESTIGATION TIMELINE
        ================================================================= */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-white">
                Investigation timeline
              </p>

              <p className="mt-0.5 text-[10px] text-slate-600">
                Complete case audit trail
              </p>
            </div>

            <FileSearch className="h-4 w-4 text-slate-600" />
          </div>

          {/* Timeline */}
          <div className="relative mt-6">
            {/* Background line */}
            <div className="absolute left-[14px] top-3 h-[calc(100%-24px)] w-px bg-slate-800" />

            {/* Animated progress line */}
            <motion.div
              className="absolute left-[14px] top-3 w-px origin-top bg-blue-500"
              animate={{
                height: `${
                  (timelineIndex / (timeline.length - 1)) * 100
                }%`,
              }}
              transition={{ duration: 0.5 }}
            />

            <div className="space-y-5">
              {timeline.map((event, index) => {
                const Icon = event.icon;
                const complete = index <= timelineIndex;
                const active = index === timelineIndex;

                return (
                  <motion.div
                    key={event.label}
                    animate={{
                      opacity: complete ? 1 : 0.3,
                    }}
                    className="relative flex items-center gap-3"
                  >
                    <motion.div
                      animate={{
                        scale: active ? [1, 1.12, 1] : 1,
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: active ? Infinity : 0,
                      }}
                      className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                        complete
                          ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                          : "border-slate-800 bg-[#080c14] text-slate-700"
                      }`}
                    >
                      {complete && index === timeline.length - 1 ? (
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      ) : (
                        <Icon className="h-3.5 w-3.5" />
                      )}
                    </motion.div>

                    <div className="flex min-w-0 flex-1 items-center justify-between">
                      <p className="text-[11px] font-medium text-slate-300">
                        {event.label}
                      </p>

                      <span className="ml-3 font-mono text-[9px] text-slate-600">
                        {event.time}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Case progression */}
          <div className="mt-7 rounded-xl border border-slate-800 bg-[#080c14] p-3">
            <div className="flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-widest text-slate-600">
                Case progression
              </span>

              <span className="font-mono text-[9px] text-blue-400">
                {timelineIndex + 1}/{timeline.length}
              </span>
            </div>

            <div className="mt-3 flex items-center gap-1.5">
              {timeline.map((_, index) => (
                <motion.div
                  key={index}
                  animate={{
                    opacity: index <= timelineIndex ? 1 : 0.2,
                    scale: index === timelineIndex ? 1.05 : 1,
                  }}
                  className="h-1.5 flex-1 rounded-full bg-blue-500"
                />
              ))}
            </div>
          </div>

          {/* Details link */}
          <div className="mt-4 flex items-center justify-end gap-1 text-[9px] text-slate-600">
            Case details
            <ArrowRight className="h-3 w-3" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-5 flex items-center justify-center gap-2 text-[10px] text-slate-600">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

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
    <div className="rounded-xl border border-slate-800 bg-[#080c14] p-3">
      <div className="flex items-center gap-2 text-slate-600">
        <span className="h-3.5 w-3.5 [&>svg]:h-full [&>svg]:w-full">
          {icon}
        </span>

        <span className="truncate text-[9px]">{label}</span>
      </div>

      <p className="mt-2 text-lg font-bold text-white">{value}</p>
    </div>
  );
}