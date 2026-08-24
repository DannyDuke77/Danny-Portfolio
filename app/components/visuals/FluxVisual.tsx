"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Ticket,
  Zap,
} from "lucide-react";

const VIEW_W = 760;
const VIEW_H = 360;

const INTAKE = {
  x: 90,
  y: 180,
};

const ROUTER = {
  x: 300,
  y: 180,
};

const DEPARTMENTS = [
  {
    name: "HR",
    x: 650,
    y: 70,
    color: "#38bdf8",
  },
  {
    name: "IT",
    x: 680,
    y: 180,
    color: "#a78bfa",
  },
  {
    name: "Finance",
    x: 650,
    y: 290,
    color: "#34d399",
  },
] as const;

const TICKETS = [
  {
    id: "FLX-1042",
    title: "Network access request",
    department: 1,
  },
  {
    id: "FLX-1043",
    title: "Payroll discrepancy",
    department: 2,
  },
  {
    id: "FLX-1044",
    title: "Leave request",
    department: 0,
  },
  {
    id: "FLX-1045",
    title: "New employee onboarding",
    department: 0,
  },
];

type Point = {
  x: number;
  y: number;
};

function createPath(target: Point) {
  return {
    p0: ROUTER,
    p1: {
      x: ROUTER.x + 100,
      y: ROUTER.y,
    },
    p2: {
      x: target.x - 130,
      y: target.y,
    },
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

function bezierPoint(
  t: number,
  p0: Point,
  p1: Point,
  p2: Point,
  p3: Point,
): Point {
  const mt = 1 - t;

  return {
    x:
      mt ** 3 * p0.x +
      3 * mt ** 2 * t * p1.x +
      3 * mt * t ** 2 * p2.x +
      t ** 3 * p3.x,

    y:
      mt ** 3 * p0.y +
      3 * mt ** 2 * t * p1.y +
      3 * mt * t ** 2 * p2.y +
      t ** 3 * p3.y,
  };
}

export default function FluxVisual() {
  const paths = useMemo(
    () => DEPARTMENTS.map((department) => createPath(department)),
    [],
  );

  const [activeTicket, setActiveTicket] = useState(0);

  const ticket = TICKETS[activeTicket];
  const department = DEPARTMENTS[ticket.department];

  const activePath = paths[ticket.department];

  const ticketPosition = useMemo(() => {
    return Array.from({ length: 41 }, (_, index) => {
      return bezierPoint(
        index / 40,
        activePath.p0,
        activePath.p1,
        activePath.p2,
        activePath.p3,
      );
    });
  }, [activePath]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTicket((current) => (current + 1) % TICKETS.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-slate-800 bg-[#080c14] p-6 shadow-2xl shadow-blue-950/30 sm:p-8">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/[0.07] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-violet-500/[0.06] blur-3xl" />

      {/* Header */}
      <div className="relative flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-blue-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              FLUX
            </span>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            Real-time ticket routing
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

          <span className="text-[10px] font-medium text-emerald-400">
            WebSocket Connected
          </span>
        </div>
      </div>

      {/* Routing visualization */}
      <div className="relative mt-7">
        <div className="relative aspect-[760/360] w-full">
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              <filter id="flux-glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Incoming line */}
            <path
              d={`M ${INTAKE.x} ${INTAKE.y} C 150 ${INTAKE.y}, 210 ${ROUTER.y}, ${ROUTER.x} ${ROUTER.y}`}
              fill="none"
              stroke="#1e293b"
              strokeWidth="3"
            />

            {/* Animated incoming flow */}
            <motion.path
              d={`M ${INTAKE.x} ${INTAKE.y} C 150 ${INTAKE.y}, 210 ${ROUTER.y}, ${ROUTER.x} ${ROUTER.y}`}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="6 12"
              animate={{
                strokeDashoffset: [0, -36],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Department routes */}
            {paths.map((path, index) => {
              const isActive = ticket.department === index;
              const color = DEPARTMENTS[index].color;

              return (
                <g key={DEPARTMENTS[index].name}>
                  {/* Base route */}
                  <path
                    d={pathToString(path)}
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth={3}
                  />

                  {/* Animated route */}
                  <motion.path
                    d={pathToString(path)}
                    fill="none"
                    stroke={color}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    strokeDasharray="6 12"
                    strokeLinecap="round"
                    opacity={isActive ? 0.85 : 0.22}
                    animate={{
                      strokeDashoffset: [0, -36],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </g>
              );
            })}

            {/* Intake node */}
            <circle
              cx={INTAKE.x}
              cy={INTAKE.y}
              r={34}
              fill="#0f172a"
              stroke="#334155"
              strokeWidth={2}
            />

            <foreignObject
              x={INTAKE.x - 12}
              y={INTAKE.y - 12}
              width={24}
              height={24}
            >
              <div className="flex h-full w-full items-center justify-center">
                <Ticket className="h-6 w-6 text-blue-400" />
              </div>
            </foreignObject>

            {/* Intake label */}
            <text
              x={INTAKE.x}
              y={INTAKE.y + 58}
              textAnchor="middle"
              className="fill-slate-400"
              style={{
                fontSize: 11,
                fontWeight: 600,
              }}
            >
              Incoming
            </text>

            {/* Router node */}
            <motion.circle
              cx={ROUTER.x}
              cy={ROUTER.y}
              r={39}
              fill="#0f172a"
              stroke="#3b82f6"
              strokeWidth={2}
              animate={{
                strokeOpacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            <foreignObject
              x={ROUTER.x - 13}
              y={ROUTER.y - 13}
              width={26}
              height={26}
            >
              <div className="flex h-full w-full items-center justify-center">
                <Zap className="h-6 w-6 text-blue-400" />
              </div>
            </foreignObject>

            <text
              x={ROUTER.x}
              y={ROUTER.y + 62}
              textAnchor="middle"
              className="fill-blue-400"
              style={{
                fontSize: 11,
                fontWeight: 700,
              }}
            >
              FLUX Router
            </text>

            {/* Department nodes */}
            {DEPARTMENTS.map((department, index) => {
              const isActive = ticket.department === index;

              return (
                <g key={department.name}>
                  <motion.circle
                    cx={department.x}
                    cy={department.y}
                    r={30}
                    fill="#0f172a"
                    stroke={department.color}
                    strokeWidth={2}
                    animate={{
                      r: isActive ? [30, 35, 30] : 30,
                      strokeOpacity: isActive
                        ? [0.5, 1, 0.5]
                        : 0.35,
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: isActive ? Infinity : 0,
                    }}
                  />

                  <text
                    x={department.x}
                    y={department.y + 4}
                    textAnchor="middle"
                    fill={department.color}
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    {department.name}
                  </text>
                </g>
              );
            })}

            {/* Moving ticket */}
            <motion.g
              key={ticket.id}
              initial={{
                x: INTAKE.x,
                y: INTAKE.y,
              }}
              animate={{
                x: ticketPosition.map((point) => point.x),
                y: ticketPosition.map((point) => point.y),
              }}
              transition={{
                duration: 3.5,
                ease: "easeInOut",
              }}
            >
              <circle
                r={15}
                fill={department.color}
                opacity={0.18}
                filter="url(#flux-glow)"
              />

              <circle
                r={7}
                fill={department.color}
              />

              <circle
                r={3}
                fill="#ffffff"
                opacity={0.8}
              />
            </motion.g>
          </svg>
        </div>
      </div>

      {/* Active ticket */}
      <AnimatePresence mode="wait">
        <motion.div
          key={ticket.id}
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -8,
          }}
          transition={{
            duration: 0.3,
          }}
          className="relative mt-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: `${department.color}15`,
                  color: department.color,
                }}
              >
                <Ticket className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-white">
                  {ticket.title}
                </p>

                <p className="mt-0.5 font-mono text-[9px] text-slate-600">
                  {ticket.id}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <div className="hidden items-center gap-1.5 sm:flex">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />

                <span className="text-[9px] text-slate-500">
                  Routing
                </span>
              </div>

              <ArrowRight className="h-3.5 w-3.5 text-slate-700" />

              <span
                className="text-[10px] font-semibold"
                style={{
                  color: department.color,
                }}
              >
                {department.name}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <div className="relative mt-5 flex items-center justify-center gap-2 text-[10px] text-slate-600">
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />

        Tickets routed and updated in real time
      </div>
    </div>
  );
}