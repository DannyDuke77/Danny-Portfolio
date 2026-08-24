"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Terminal, Code2, Layers, Radio, Database } from "lucide-react";

const snippets = [
  {
    file: "realtime.ts",
    language: "typescript",
    icon: Code2,
    code: [
      <>
        <span className="text-purple-400">const</span>{" "}
        <span className="text-blue-300">socket</span> ={" "}
        <span className="text-purple-400">new</span>{" "}
        <span className="text-yellow-300">WebSocket</span>(
        <span className="text-emerald-300">"/ws/tickets/"</span>);
      </>,
      <>
        <span className="text-blue-300">socket</span>.
        <span className="text-yellow-300">onmessage</span> ={" "}
        <span className="text-purple-400">(event)</span> =&gt; {"{"}
      </>,
      <>
        <span className="ml-4 text-purple-400">const</span>{" "}
        <span className="text-blue-300">ticket</span> ={" "}
        <span className="text-blue-300">JSON</span>.
        <span className="text-yellow-300">parse</span>(event.data);
      </>,
      <>
        <span className="ml-4 text-blue-300">updateTicket</span>(
        <span className="text-blue-300">ticket</span>);
      </>,
      <>
        {"};"}
      </>,
    ],
  },

  {
    file: "views.py",
    language: "python",
    icon: Terminal,
    code: [
      <>
        <span className="text-purple-400">class</span>{" "}
        <span className="text-yellow-300 font-medium">TicketViewSet</span>(
        <span className="text-blue-300">ModelViewSet</span>):
      </>,
      <>
        <span className="ml-4 text-sky-300">queryset</span> ={" "}
        <span className="text-yellow-300">Ticket</span>.
        <span className="text-yellow-300">objects</span>.
        <span className="text-yellow-300">select_related</span>(
        <span className="text-emerald-300">"department"</span>)
      </>,
      <>
        <span className="ml-4 text-sky-300">serializer_class</span> ={" "}
        <span className="text-yellow-300">TicketSerializer</span>
      </>,
      <>
        <span className="ml-4 text-purple-400">def</span>{" "}
        <span className="text-yellow-300">perform_create</span>(
        <span className="text-blue-300">self</span>, <span className="text-blue-300">serializer</span>):
      </>,
      <>
        <span className="ml-8 text-blue-300">serializer</span>.
        <span className="text-yellow-300">save</span>(
        <span className="text-sky-300">created_by</span>=
        <span className="text-blue-300">self</span>.
        <span className="text-sky-300">request</span>.
        <span className="text-sky-300">user</span>)
      </>,
    ],
  },

  {
    file: "docker-compose.yml",
    language: "yaml",
    icon: Layers,
    code: [
      <>
        <span className="text-sky-300 font-semibold">services:</span>
      </>,
      <>
        <span className="text-blue-300">web</span>:
      </>,
      <>
        <span className="ml-4 text-sky-300">build:</span> .
      </>,
      <>
        <span className="ml-4 text-sky-300">depends_on:</span>
      </>,
      <>
        <span className="ml-8 text-emerald-300">- postgres</span>
      </>,
      <>
        <span className="ml-8 text-emerald-300">- redis</span>
      </>,
      <>
        <span className="ml-4 text-sky-300">environment:</span>
      </>,
      <>
        <span className="ml-8 text-blue-300">DATABASE_URL</span>:{" "}
        <span className="text-emerald-300">postgres://db/app</span>
      </>,
      <>
        <span className="ml-8 text-blue-300">REDIS_URL</span>:{" "}
        <span className="text-emerald-300">redis://redis:6379</span>
      </>,
    ],
  },

  {
    file: "queries.py",
    language: "python",
    icon: Database,
    code: [
      <>
        <span className="text-purple-400">from</span>{" "}
        <span className="text-blue-300">django.db.models</span>{" "}
        <span className="text-purple-400">import</span>{" "}
        <span className="text-yellow-300">Count</span>
      </>,
      <>
        <span className="text-purple-400">from</span>{" "}
        <span className="text-blue-300">tickets.models</span>{" "}
        <span className="text-purple-400">import</span>{" "}
        <span className="text-yellow-300">Ticket</span>
      </>,
      <></>,
      <>
        <span className="text-blue-300">tickets</span> ={" "}
        <span className="text-yellow-300">Ticket</span>.
        <span className="text-yellow-300">objects</span>.
        <span className="text-yellow-300">values</span>(
        <span className="text-emerald-300">"department"</span>)
      </>,
      <>
        <span className="ml-4">.</span>
        <span className="text-yellow-300">annotate</span>(
        <span className="text-sky-300">total</span>=
        <span className="text-yellow-300">Count</span>(
        <span className="text-emerald-300">"id"</span>))
      </>,
      <>
        <span className="ml-4">.</span>
        <span className="text-yellow-300">order_by</span>(
        <span className="text-emerald-300">"-total"</span>)
      </>,
    ],
  },

  {
    file: "consumer.py",
    language: "python",
    icon: Radio,
    code: [
      <>
        <span className="text-purple-400">class</span>{" "}
        <span className="text-yellow-300 font-medium">TicketConsumer</span>(
        <span className="text-blue-300">AsyncWebsocketConsumer</span>):
      </>,
      <>
        <span className="ml-4 text-purple-400">async def</span>{" "}
        <span className="text-yellow-300">connect</span>(
        <span className="text-blue-300">self</span>):
      </>,
      <>
        <span className="ml-8 text-purple-400">await</span>{" "}
        <span className="text-blue-300">self</span>.
        <span className="text-yellow-300">channel_layer</span>.
        <span className="text-yellow-300">group_add</span>(
      </>,
      <>
        <span className="ml-12 text-emerald-300">"tickets"</span>,
      </>,
      <>
        <span className="ml-12 text-blue-300">self</span>.
        <span className="text-sky-300">channel_name</span>,
      </>,
      <>
        <span className="ml-8">)</span>
      </>,
      <>
        <span className="ml-8 text-purple-400">await</span>{" "}
        <span className="text-blue-300">self</span>.
        <span className="text-yellow-300">accept</span>()
      </>,
    ],
  },
];

const CodeShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % snippets.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const snippet = snippets[activeIndex];
  const Icon = snippet.icon;

  return (
    <div className="relative w-full max-w-3xl">
      {/* Background Gradient Glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/20 via-sky-500/20 to-purple-600/20 blur-2xl opacity-70" />

      {/* Main Container */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/90 shadow-2xl backdrop-blur-xl">
        
        {/* Title Bar & Tabs */}
        <div className="flex flex-wrap items-center justify-between border-b border-slate-800/80 bg-slate-900/80 px-4 pt-3 backdrop-blur-md">
          
          {/* Mac-style Window Controls */}
          <div className="mb-3 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" />
          </div>

          {/* IDE Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto custom-scrollbar">
            {snippets.map((item, index) => {
              const isActive = index === activeIndex;
              const TabIcon = item.icon;
              return (
                <button
                  key={item.file}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex items-center gap-2 rounded-t-lg px-3.5 py-2 text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? "bg-slate-950 text-slate-100 shadow-sm border-t-2 border-t-blue-500 border-x border-x-slate-800/60"
                      : "bg-slate-900/40 text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                  }`}
                >
                  <TabIcon className={`h-3.5 w-3.5 ${isActive ? "text-blue-400" : "text-slate-500 group-hover:text-slate-300"}`} />
                  <span>{item.file}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden sm:block w-12" />
        </div>

        {/* Code Viewport */}
        <div className="relative min-h-[500px] p-6 font-mono text-xs sm:text-sm leading-6 selection:bg-blue-500/30 selection:text-blue-200">
          <AnimatePresence mode="wait">
            <motion.div
              key={snippet.file}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="space-y-1"
            >
              {snippet.code.map((line, index) => (
                <div key={index} className="flex items-center group">
                  {/* Line Numbers */}
                  <span className="mr-6 w-6 select-none text-right font-mono text-xs text-slate-600 group-hover:text-slate-400 transition-colors">
                    {index + 1}
                  </span>

                  {/* Line Content */}
                  <code className="text-slate-200 tracking-wide">{line}</code>
                </div>
              ))}

              {/* Terminal Cursor Line */}
              <div className="flex items-center pt-1">
                <span className="mr-6 w-6 select-none text-right font-mono text-xs text-slate-600">
                  {snippet.code.length + 1}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block h-4 w-2 rounded-sm bg-blue-400/90 shadow-[0_0_8px_rgba(96,165,250,0.6)]"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between border-t border-slate-800/80 bg-slate-900/90 px-4 py-1.5 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-300 font-medium uppercase tracking-wider">{snippet.language}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-200 transition-colors">UTF-8</span>
            <span className="hidden sm:inline hover:text-slate-200 transition-colors">Prettier</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeShowcase;