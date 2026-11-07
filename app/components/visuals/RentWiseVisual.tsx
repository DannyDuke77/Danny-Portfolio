"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  CircleDollarSign,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
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

    return () => {
      clearInterval(activityTimer);
    };
  }, []);

  const occupied = units.filter((unit) => unit.status === "Occupied").length;
  const occupancyRate = Math.round((occupied / units.length) * 100);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-5 shadow-2xl shadow-blue-500/10 sm:p-7">
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
            <Building2 className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm font-semibold text-white">RentWise</p>
            <p className="text-xs text-slate-500">Property overview</p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/10 px-2.5 py-1.5">
          <span className="text-[11px] font-medium text-amber-400">
            Sample data
          </span>
        </div>
      </div>

      {/* Metrics */}
      <div className="relative mt-6 grid grid-cols-3 gap-3">
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
        />
      </div>

      {/* Revenue chart */}
      <div className="relative mt-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">
              Rent collection
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              KSh 188,000
            </p>
          </div>

          <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400">
            <ArrowUpRight className="h-3 w-3" />
            12.8%
          </span>
        </div>

        {/* Chart */}
        <div className="mt-4 flex h-20 items-end gap-2">
          {[38, 52, 44, 67, 58, 76, 64, 88, 73, 94, 82, 100].map(
            (height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.04,
                }}
                className="flex-1 rounded-t-sm bg-blue-500/30"
              >

                <div className="h-full rounded-t-sm bg-blue-400/70" />
                
              </motion.div>
            ),
          )}
        </div>
      </div>

      {/* Recent activity */}
      <div className="relative mt-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-medium text-slate-400">
            Recent activity
          </p>

          <span className="text-[11px] text-slate-600">
            Updated just now
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activityIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-3"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  activityIndex === 2
                    ? "bg-amber-500/10 text-amber-400"
                    : "bg-emerald-500/10 text-emerald-400"
                }`}
              >
                {activityIndex === 2 ? (
                  <AlertCircle className="h-4 w-4" />
                ) : (
                  <CircleDollarSign className="h-4 w-4" />
                )}
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-white">
                  {activity[activityIndex].tenant}
                </p>

                <p className="truncate text-[10px] text-slate-500">
                  {activity[activityIndex].action}
                </p>
              </div>
            </div>

            <span
              className={`ml-3 shrink-0 text-xs font-semibold ${
                activityIndex === 2
                  ? "text-amber-400"
                  : "text-emerald-400"
              }`}
            >
              {activity[activityIndex].amount}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="relative mt-5 flex items-center justify-center gap-2 text-[10px] text-slate-500">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
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
  warning = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  warning?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
      <div className="flex items-center justify-between">
        <span className="text-slate-500">{icon}</span>

        <span
          className={`text-[10px] font-medium ${
            warning ? "text-amber-400" : "text-emerald-400"
          }`}
        >
          {trend}
        </span>
      </div>

      <p className="mt-3 text-[10px] text-slate-500">{label}</p>

      <p className="mt-0.5 text-lg font-bold text-white">{value}</p>
    </div>
  );
}