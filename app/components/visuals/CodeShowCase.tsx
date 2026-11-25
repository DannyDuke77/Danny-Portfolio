"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const snippets = [
  {
    file: "consumer.py",
    language: "python",
    code: [
      <>
        <span className="text-lime-700 dark:text-lime-300">class</span>{" "}
        <span className="text-stone-900 dark:text-stone-100 font-medium">TicketConsumer</span>(
        <span className="text-stone-700 dark:text-stone-300">AsyncWebsocketConsumer</span>):
      </>,
      <>
        <span className="ml-4 text-lime-700 dark:text-lime-300">async def</span>{" "}
        <span className="text-stone-900 dark:text-stone-100">connect</span>(
        <span className="text-stone-700 dark:text-stone-300">self</span>):
      </>,
      <>
        <span className="ml-8 text-lime-700 dark:text-lime-300">await</span>{" "}
        <span className="text-stone-700 dark:text-stone-300">self</span>.
        <span className="text-stone-900 dark:text-stone-100">channel_layer</span>.
        <span className="text-stone-900 dark:text-stone-100">group_add</span>(
      </>,
      <>
        <span className="ml-12 text-stone-500 dark:text-stone-400">"tickets"</span>,
      </>,
      <>
        <span className="ml-12 text-stone-700 dark:text-stone-300">self</span>.
        <span className="text-stone-900 dark:text-stone-100">channel_name</span>,
      </>,
      <>
        <span className="ml-8">)</span>
      </>,
      <>
        <span className="ml-8 text-lime-700 dark:text-lime-300">await</span>{" "}
        <span className="text-stone-700 dark:text-stone-300">self</span>.
        <span className="text-stone-900 dark:text-stone-100">accept</span>()
      </>,
    ],
  },
  {
    file: "views.py",
    language: "python",
    code: [
      <>
        <span className="text-lime-700 dark:text-lime-300">class</span>{" "}
        <span className="text-stone-900 dark:text-stone-100 font-medium">TicketViewSet</span>(
        <span className="text-stone-700 dark:text-stone-300">ModelViewSet</span>):
      </>,
      <>
        <span className="ml-4 text-stone-500 dark:text-stone-400">queryset</span> ={" "}
        <span className="text-stone-900 dark:text-stone-100">Ticket</span>.
        <span className="text-stone-900 dark:text-stone-100">objects</span>.
        <span className="text-stone-900 dark:text-stone-100">select_related</span>(
        <span className="text-stone-500 dark:text-stone-400">"department"</span>)
      </>,
      <>
        <span className="ml-4 text-stone-500 dark:text-stone-400">serializer_class</span> ={" "}
        <span className="text-stone-900 dark:text-stone-100">TicketSerializer</span>
      </>,
      <>
        <span className="ml-4 text-lime-700 dark:text-lime-300">def</span>{" "}
        <span className="text-stone-900 dark:text-stone-100">perform_create</span>(
        <span className="text-stone-700 dark:text-stone-300">self</span>,{" "}
        <span className="text-stone-700 dark:text-stone-300">serializer</span>):
      </>,
      <>
        <span className="ml-8 text-stone-700 dark:text-stone-300">serializer</span>.
        <span className="text-stone-900 dark:text-stone-100">save</span>(
        <span className="text-stone-500 dark:text-stone-400">created_by</span>=
        <span className="text-stone-700 dark:text-stone-300">self</span>.
        <span className="text-stone-700 dark:text-stone-300">request</span>.
        <span className="text-stone-700 dark:text-stone-300">user</span>)
      </>,
    ],
  },
  {
    file: "queries.py",
    language: "python",
    code: [
      <>
        <span className="text-lime-700 dark:text-lime-300">from</span>{" "}
        <span className="text-stone-700 dark:text-stone-300">django.db.models</span>{" "}
        <span className="text-lime-700 dark:text-lime-300">import</span>{" "}
        <span className="text-stone-900 dark:text-stone-100">Count</span>
      </>,
      <>
        <span className="text-lime-700 dark:text-lime-300">from</span>{" "}
        <span className="text-stone-700 dark:text-stone-300">tickets.models</span>{" "}
        <span className="text-lime-700 dark:text-lime-300">import</span>{" "}
        <span className="text-stone-900 dark:text-stone-100">Ticket</span>
      </>,
      <></>,
      <>
        <span className="text-stone-700 dark:text-stone-300">tickets</span> ={" "}
        <span className="text-stone-900 dark:text-stone-100">Ticket</span>.
        <span className="text-stone-900 dark:text-stone-100">objects</span>.
        <span className="text-stone-900 dark:text-stone-100">values</span>(
        <span className="text-stone-500 dark:text-stone-400">"department"</span>)
      </>,
      <>
        <span className="ml-4">.</span>
        <span className="text-stone-900 dark:text-stone-100">annotate</span>(
        <span className="text-stone-500 dark:text-stone-400">total</span>=
        <span className="text-stone-900 dark:text-stone-100">Count</span>(
        <span className="text-stone-500 dark:text-stone-400">"id"</span>))
      </>,
      <>
        <span className="ml-4">.</span>
        <span className="text-stone-900 dark:text-stone-100">order_by</span>(
        <span className="text-stone-500 dark:text-stone-400">"-total"</span>)
      </>,
    ],
  },
  {
    file: "realtime.ts",
    language: "typescript",
    code: [
      <>
        <span className="text-lime-700 dark:text-lime-300">const</span>{" "}
        <span className="text-stone-700 dark:text-stone-300">socket</span> ={" "}
        <span className="text-lime-700 dark:text-lime-300">new</span>{" "}
        <span className="text-stone-900 dark:text-stone-100">WebSocket</span>(
        <span className="text-stone-500 dark:text-stone-400">"/ws/tickets/"</span>);
      </>,
      <>
        <span className="text-stone-700 dark:text-stone-300">socket</span>.
        <span className="text-stone-900 dark:text-stone-100">onmessage</span> ={" "}
        <span className="text-stone-700 dark:text-stone-300">(event)</span> =&gt; {"{"}
      </>,
      <>
        <span className="ml-4 text-lime-700 dark:text-lime-300">const</span>{" "}
        <span className="text-stone-700 dark:text-stone-300">ticket</span> ={" "}
        <span className="text-stone-900 dark:text-stone-100">JSON</span>.
        <span className="text-stone-900 dark:text-stone-100">parse</span>(event.data);
      </>,
      <>
        <span className="ml-4 text-stone-900 dark:text-stone-100">updateTicket</span>(
        <span className="text-stone-700 dark:text-stone-300">ticket</span>);
      </>,
      <>
        {"};"}
      </>,
    ],
  },
  {
    file: "docker-compose.yml",
    language: "yaml",
    code: [
      <>
        <span className="text-stone-500 dark:text-stone-400">services:</span>
      </>,
      <>
        <span className="text-stone-900 dark:text-stone-100">web</span>:
      </>,
      <>
        <span className="ml-4 text-stone-500 dark:text-stone-400">build:</span> .
      </>,
      <>
        <span className="ml-4 text-stone-500 dark:text-stone-400">depends_on:</span>
      </>,
      <>
        <span className="ml-8 text-stone-500 dark:text-stone-400">- postgres</span>
      </>,
      <>
        <span className="ml-8 text-stone-500 dark:text-stone-400">- redis</span>
      </>,
      <>
        <span className="ml-4 text-stone-500 dark:text-stone-400">environment:</span>
      </>,
      <>
        <span className="ml-8 text-stone-900 dark:text-stone-100">DATABASE_URL</span>:{" "}
        <span className="text-stone-500 dark:text-stone-400">postgres://db/app</span>
      </>,
      <>
        <span className="ml-8 text-stone-900 dark:text-stone-100">REDIS_URL</span>:{" "}
        <span className="text-stone-500 dark:text-stone-400">redis://redis:6379</span>
      </>,
    ],
  },
];

const CodeShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const snippet = snippets[activeIndex];

  return (
    <div className="w-full max-w-3xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-950">
      {/* Tab bar */}
      <div className="flex overflow-x-auto border-b border-stone-200 dark:border-stone-800">
        {snippets.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.file}
              onClick={() => setActiveIndex(index)}
              className={`shrink-0 border-r border-stone-200 px-4 py-2.5 text-[11px] font-mono transition-colors last:border-r-0 dark:border-stone-800 ${
                isActive
                  ? "bg-stone-100 text-stone-900 dark:bg-stone-900 dark:text-stone-100"
                  : "text-stone-500 hover:text-stone-900 dark:text-stone-500 dark:hover:text-stone-200"
              }`}
            >
              {item.file}
            </button>
          );
        })}
      </div>

      {/* Code viewport */}
      <div className="min-h-[380px] p-6 font-mono text-xs leading-6 sm:text-sm selection:bg-lime-700/20 selection:text-stone-900 dark:selection:bg-lime-300/20 dark:selection:text-stone-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={snippet.file}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="space-y-1"
          >
            {snippet.code.map((line, index) => (
              <div key={index} className="flex items-start">
                <span className="mr-6 w-6 shrink-0 select-none text-right text-[11px] text-stone-400 dark:text-stone-600">
                  {index + 1}
                </span>
                <code className="whitespace-pre-wrap break-words text-stone-700 dark:text-stone-300">{line}</code>
              </div>
            ))}
            <div className="flex items-center pt-1">
              <span className="mr-6 w-6 shrink-0 select-none text-right text-[11px] text-stone-400 dark:text-stone-600">
                {snippet.code.length + 1}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block h-3.5 w-1.5 bg-stone-700 dark:bg-stone-300"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between border-t border-stone-200 px-4 py-1.5 text-[11px] font-mono text-stone-500 dark:border-stone-800 dark:text-stone-500">
        <span className="uppercase tracking-[0.15em]">{snippet.language}</span>
        <span className="uppercase tracking-[0.15em]">utf-8</span>
      </div>
    </div>
  );
};

export default CodeShowcase;