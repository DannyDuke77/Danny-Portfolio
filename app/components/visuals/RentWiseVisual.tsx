"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  CircleDollarSign,
  TrendingUp,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

const units = [
  { id: "A-101", tenant: "John Mwangi", status: "Occupied", rent: 28000 },
  { id: "A-102", tenant: "Sarah Wanjiku", status: "Occupied", rent: 32000 },
  { id: "A-103", tenant: "—", status: "Vacant", rent: 30000 },
  { id: "B-201", tenant: "David Otieno", status: "Occupied", rent: 35000 },
  { id: "B-202", tenant: "Mary Njeri", status: "Arrears", rent: 30000 },
  { id: "B-203", tenant: "James Kamau", status: "Occupied", rent: 28000 },
];

const activity = [
  {
    tenant: "Sarah Wanjiku",
    action: "Rent payment received",
    amount: "+ KSh 32,000",
  },
  {
    tenant: "David Otieno",
    action: "Receipt generated",
    amount: "KSh 35,000",
  },
  {
    tenant: "Mary Njeri",
    action: "Payment overdue",
    amount: "KSh 30,000",
  },
];

export default function RentWiseVisual() {
  const [activityIndex, setActivityIndex] = useState(0);

  useEffect(() => {
    const activityTimer = setInterval(() => {
      setActivityIndex((current) => (current + 1) % activity.length);
    }, 3200);
    return () => clearInterval(activityTimer);
  }, []);

  const occupied = units.filter((unit) => unit.status === "Occupied").length;
  const occupancyRate = Math.round((occupied / units.length) * 100);

  return (
    <div className="relative w-full overflow-hidden border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4 dark:border-stone-800">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center border border-stone-200 text-lime-700 dark:border-stone-800 dark:text-lime-300">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-stone-900 dark:text-stone-100">
              RentWise
            </p>
            <p className="font-mono text-sm text-stone-500 dark:text-stone-400">
              Property overview
            </p>
          </div>
        </div>

        <span className="font-mono text-xs uppercase tracking-[0.15em] text-amber-700 dark:text-amber-400">
          Sample data
        </span>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 divide-x divide-stone-200 border-b border-stone-200 dark:divide-stone-800 dark:border-stone-800">
        <Metric
          icon={<Building2 className="h-4 w-4" />}
          label="Occupancy"
          value={`${occupancyRate}%`}
          trend="+4.2%"
        />
        <Metric
          icon={<CircleDollarSign className="h-4 w-4" />}
          label="Collected"
          value="KSh 188K"
          trend="+12.8%"
        />
        <Metric
          icon={<TrendingUp className="h-4 w-4" />}
          label="Expected"
          value="KSh 213K"
          trend="This month"
          neutral
        />
      </div>

      {/* Revenue chart */}
      <div className="border-b border-stone-200 px-5 py-5 dark:border-stone-800">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
              Rent collection
            </p>
            <p className="mt-1 font-mono text-lg font-semibold text-stone-900 dark:text-stone-100">
              KSh 188,000
            </p>
          </div>
          <span className="flex items-center gap-1 font-mono text-xs font-medium text-emerald-700 dark:text-emerald-400">
            <ArrowUpRight className="h-3.5 w-3.5" />
            12.8%
          </span>
        </div>

        <div className="mt-4 flex h-20 items-end gap-1.5">
          {[38, 52, 44, 67, 58, 76, 64, 88, 73, 94, 82, 100].map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.7, delay: index * 0.04 }}
              className="flex-1 bg-lime-700/30 dark:bg-lime-300/25"
            >
              <div className="h-full bg-lime-700 dark:bg-lime-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent activity */}
      <div className="px-5 py-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
            Recent activity
          </p>
          <span className="font-mono text-xs text-stone-500 dark:text-stone-400">
            Updated just now
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activityIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-between border border-stone-200 p-3 dark:border-stone-800"
          >
            <div className="flex min-w-0 items-center gap-3">
              {activityIndex === 2 ? (
                <AlertCircle className="h-4 w-4 shrink-0 text-amber-700 dark:text-amber-400" />
              ) : (
                <CircleDollarSign className="h-4 w-4 shrink-0 text-emerald-700 dark:text-emerald-400" />
              )}

              <div className="min-w-0">
                <p className="truncate font-mono text-sm text-stone-900 dark:text-stone-100">
                  {activity[activityIndex].tenant}
                </p>
                <p className="truncate font-mono text-xs text-stone-500 dark:text-stone-400">
                  {activity[activityIndex].action}
                </p>
              </div>
            </div>

            <span
              className={`ml-3 shrink-0 font-mono text-sm font-semibold ${
                activityIndex === 2
                  ? "text-amber-700 dark:text-amber-400"
                  : "text-emerald-700 dark:text-emerald-400"
              }`}
            >
              {activity[activityIndex].amount}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center gap-2 border-t border-stone-200 px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-stone-500 dark:border-stone-800 dark:text-stone-400">
        <span className="h-1.5 w-1.5 bg-lime-700 dark:bg-lime-300" />
        Centralized property management
      </div>
    </div>
  );
}

function Metric({
  icon,
  label,
  value,
  trend,
  neutral = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  neutral?: boolean;
}) {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <span className="text-stone-500 dark:text-stone-400">{icon}</span>
        <span
          className={`font-mono text-xs font-medium ${
            neutral
              ? "text-stone-500 dark:text-stone-400"
              : "text-emerald-700 dark:text-emerald-400"
          }`}
        >
          {trend}
        </span>
      </div>
      <p className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
        {label}
      </p>
      <p className="mt-1 font-mono text-lg font-semibold text-stone-900 dark:text-stone-100">
        {value}
      </p>
    </div>
  );
}