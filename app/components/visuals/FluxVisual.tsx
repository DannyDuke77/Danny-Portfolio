"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Ticket, Zap } from "lucide-react";

const VIEW_W = 760;
const VIEW_H = 360;

const INTAKE = { x: 90, y: 180 };
const ROUTER = { x: 300, y: 180 };

const DEPARTMENTS = [
  { name: "HR", x: 650, y: 70, opacity: 1 },
  { name: "IT", x: 680, y: 180, opacity: 0.72 },
  { name: "Finance", x: 650, y: 290, opacity: 0.46 },
] as const;

const TICKETS = [
  { id: "FLX-1042", title: "Network access request", department: 1 },
  { id: "FLX-1043", title: "Payroll discrepancy", department: 2 },
  { id: "FLX-1044", title: "Leave request", department: 0 },
  { id: "FLX-1045", title: "New employee onboarding", department: 0 },
];

type Point = { x: number; y: number };

function createPath(target: Point) {
  return {
    p0: ROUTER,
    p1: { x: ROUTER.x + 100, y: ROUTER.y },
    p2: { x: target.x - 130, y: target.y },
    p3: target,
  };
}

function pathToString(path: ReturnType<typeof createPath>) {
  return `
    M ${path.p0.x} ${path.p0.y}
    C ${path.p1.x} ${path.p1.y},
      ${path.p2.x} ${path.p2.y},
      ${path.p3.x} ${path.p3.y}
  `;
}

function bezierPoint(t: number, p0: Point, p1: Point, p2: Point, p3: Point): Point {
  const mt = 1 - t;
  return {
    x: mt ** 3 * p0.x + 3 * mt ** 2 * t * p1.x + 3 * mt * t ** 2 * p2.x + t ** 3 * p3.x,
    y: mt ** 3 * p0.y + 3 * mt ** 2 * t * p1.y + 3 * mt * t ** 2 * p2.y + t ** 3 * p3.y,
  };
}

export default function FluxVisual() {
  const paths = useMemo(() => DEPARTMENTS.map((d) => createPath(d)), []);
  const [activeTicket, setActiveTicket] = useState(0);

  const ticket = TICKETS[activeTicket];
  const department = DEPARTMENTS[ticket.department];
  const activePath = paths[ticket.department];

  const ticketPosition = useMemo(() => {
    return Array.from({ length: 41 }, (_, index) =>
      bezierPoint(index / 40, activePath.p0, activePath.p1, activePath.p2, activePath.p3),
    );
  }, [activePath]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTicket((current) => (current + 1) % TICKETS.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4 dark:border-stone-800">
        <div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-lime-700 dark:text-lime-300" />
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-stone-900 dark:text-stone-100">
              Flux
            </span>
          </div>
          <p className="mt-1 font-mono text-sm text-stone-500 dark:text-stone-400">
            Real-time ticket routing
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse bg-lime-700 dark:bg-lime-300" />
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
            WebSocket connected
          </span>
        </div>
      </div>

      {/* Routing diagram */}
      <div className="relative px-4 py-6 sm:px-6">
        <div className="relative aspect-[760/360] w-full">
          <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="absolute inset-0 h-full w-full">
            <path
              d={`M ${INTAKE.x} ${INTAKE.y} C 150 ${INTAKE.y}, 210 ${ROUTER.y}, ${ROUTER.x} ${ROUTER.y}`}
              fill="none"
              stroke="currentColor"
              className="text-stone-300 dark:text-stone-700"
              strokeWidth="2"
            />
            <motion.path
              d={`M ${INTAKE.x} ${INTAKE.y} C 150 ${INTAKE.y}, 210 ${ROUTER.y}, ${ROUTER.x} ${ROUTER.y}`}
              fill="none"
              stroke="currentColor"
              className="text-stone-500 dark:text-stone-400"
              strokeWidth="1.5"
              strokeDasharray="4 8"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />

            {paths.map((path, index) => {
              const isActive = ticket.department === index;
              const opacity = DEPARTMENTS[index].opacity;

              return (
                <g key={DEPARTMENTS[index].name}>
                  <path
                    d={pathToString(path)}
                    fill="none"
                    stroke="currentColor"
                    className="text-stone-300 dark:text-stone-700"
                    strokeWidth="2"
                  />
                  <motion.path
                    d={pathToString(path)}
                    fill="none"
                    stroke="currentColor"
                    className="text-lime-700 dark:text-lime-300"
                    strokeWidth={isActive ? 2 : 1.25}
                    strokeDasharray="4 8"
                    opacity={isActive ? opacity : opacity * 0.35}
                    animate={{ strokeDashoffset: [0, -24] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                  />
                </g>
              );
            })}

            {/* Intake node */}
            <circle
              cx={INTAKE.x}
              cy={INTAKE.y}
              r={30}
              fill="currentColor"
              className="text-white dark:text-stone-950"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <foreignObject x={INTAKE.x - 12} y={INTAKE.y - 12} width={24} height={24}>
              <div className="flex h-full w-full items-center justify-center">
                <Ticket className="h-5 w-5 text-stone-500 dark:text-stone-400" />
              </div>
            </foreignObject>
            <text
              x={INTAKE.x}
              y={INTAKE.y + 58}
              textAnchor="middle"
              className="fill-stone-500 dark:fill-stone-400 font-mono"
              style={{ fontSize: 13, letterSpacing: "0.15em" }}
            >
              INCOMING
            </text>

            {/* Router node */}
            <motion.circle
              cx={ROUTER.x}
              cy={ROUTER.y}
              r={36}
              fill="currentColor"
              className="text-white dark:text-stone-950"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ strokeOpacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <foreignObject x={ROUTER.x - 13} y={ROUTER.y - 13} width={26} height={26}>
              <div className="flex h-full w-full items-center justify-center">
                <Zap className="h-5 w-5 text-lime-700 dark:text-lime-300" />
              </div>
            </foreignObject>
            <text
              x={ROUTER.x}
              y={ROUTER.y + 62}
              textAnchor="middle"
              className="fill-stone-900 dark:fill-stone-100 font-mono"
              style={{ fontSize: 13, letterSpacing: "0.15em", fontWeight: 600 }}
            >
              ROUTER
            </text>

            {/* Department nodes */}
            {DEPARTMENTS.map((dept, index) => {
              const isActive = ticket.department === index;
              return (
                <g key={dept.name}>
                  <motion.circle
                    cx={dept.x}
                    cy={dept.y}
                    r={28}
                    fill="currentColor"
                    className="text-white dark:text-stone-950"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    animate={{
                      r: isActive ? [28, 31, 28] : 28,
                      strokeOpacity: isActive ? [0.6, 1, 0.6] : 0.5,
                    }}
                    transition={{ duration: 0.8, repeat: isActive ? Infinity : 0 }}
                  />
                  <text
                    x={dept.x}
                    y={dept.y + 4}
                    textAnchor="middle"
                    className="fill-stone-900 dark:fill-stone-100 font-mono"
                    style={{ fontSize: 14, fontWeight: 600 }}
                    opacity={dept.opacity}
                  >
                    {dept.name.toUpperCase()}
                  </text>
                </g>
              );
            })}

            {/* Moving ticket */}
            <motion.g
              key={ticket.id}
              initial={{ x: INTAKE.x, y: INTAKE.y }}
              animate={{
                x: ticketPosition.map((p) => p.x),
                y: ticketPosition.map((p) => p.y),
              }}
              transition={{ duration: 3.5, ease: "easeInOut" }}
            >
              <circle r={11} fill="currentColor" className="text-lime-700/20 dark:text-lime-300/20" />
              <circle r={6} fill="currentColor" className="text-lime-700 dark:text-lime-300" />
            </motion.g>
          </svg>
        </div>
      </div>

      {/* Active ticket strip */}
      <AnimatePresence mode="wait">
        <motion.div
          key={ticket.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="border-t border-stone-200 px-5 py-4 dark:border-stone-800"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <Ticket className="h-4 w-4 shrink-0 text-stone-500 dark:text-stone-400" />
              <div className="min-w-0">
                <p className="truncate font-mono text-sm text-stone-900 dark:text-stone-100">
                  {ticket.title}
                </p>
                <p className="mt-0.5 font-mono text-xs uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
                  {ticket.id}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.15em]">
              <span className="hidden text-stone-500 dark:text-stone-400 sm:inline">
                Routing
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-stone-400 dark:text-stone-600" />
              <span className="font-semibold text-lime-700 dark:text-lime-300">
                {department.name.toUpperCase()}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <div className="flex items-center justify-center gap-2 border-t border-stone-200 px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-stone-500 dark:border-stone-800 dark:text-stone-400">
        <CheckCircle2 className="h-3.5 w-3.5 text-lime-700 dark:text-lime-300" />
        Tickets routed and updated in real time
      </div>
    </div>
  );
}