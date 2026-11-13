"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function ProfileModal({ profile, isOpen, onClose }) {
  // Close on Esc + lock background scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);

  if (!profile) return null;

  const timeline = profile.timeline ?? [];
  // Latest on top, earliest at the bottom -> reads as a climb upwards
  const ordered = [...timeline].reverse();
  const total = ordered.length;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={profile.title}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            className="modern-scroll relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800"
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-5 right-5 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-slate-900 hover:bg-white transition-colors shadow"
            >
              ✕
            </button>

            {/* Header banner */}
            <div className={`relative overflow-hidden bg-linear-to-br ${profile.accent} px-8 md:px-12 py-12`}>
              <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
              {profile.icon && (
                <img
                  src={profile.icon}
                  alt=""
                  className="absolute right-8 bottom-4 h-28 w-28 md:h-36 md:w-36 opacity-90 drop-shadow-lg"
                />
              )}
              <div className="relative z-10 max-w-xl">
                <p className="text-sm font-semibold text-white/80 mb-2">{profile.label}</p>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">{profile.title}</h2>
                {profile.sub && <p className="mt-2 text-white/90 italic">{profile.sub}</p>}
              </div>
            </div>

            <div className="p-8 md:p-12 space-y-12">
              {/* Summary + meta */}
              {(profile.description || profile.meta?.length) && (
                <div className="grid md:grid-cols-3 gap-8">
                  {profile.description && (
                    <p className="md:col-span-2 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                      {profile.description}
                    </p>
                  )}
                  {profile.meta && profile.meta.length > 0 && (
                    <dl className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl space-y-3">
                      {profile.meta.map((m) => (
                        <div key={m.label} className="flex justify-between gap-4 text-sm">
                          <dt className="text-slate-400">{m.label}</dt>
                          <dd className="font-semibold text-right text-slate-800 dark:text-slate-200">{m.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              )}

              {/* Roadmap */}
              {total > 0 && (
                <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
                  <div className="mb-10">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Roadmap</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Start at the bottom and follow the road up to where I am today.
                    </p>
                  </div>

                  <div className="relative">
                    {/* The road: draws itself upward */}
                    <motion.div
                      aria-hidden="true"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.4 + total * 0.25, ease: "easeOut", delay: 0.2 }}
                      style={{ originY: 1 }}
                      className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full bg-linear-to-t ${profile.accent}`}
                    />

                    {/* Top marker */}
                    <div className="relative h-9 mb-6">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + total * 0.25 }}
                        className={`absolute left-4 md:left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white bg-linear-to-r ${profile.accent} shadow-lg whitespace-nowrap`}
                      >
                        Today
                      </motion.span>
                    </div>

                    <ol className="space-y-10">
                      {ordered.map((entry, i) => {
                        const isLeft = i % 2 === 0;
                        // bottom item animates first, top item last
                        const delay = 0.3 + (total - 1 - i) * 0.25;

                        return (
                          <motion.li
                            key={`${entry.title}-${entry.period}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay, duration: 0.45 }}
                            className={`relative pl-12 md:w-1/2 ${
                              isLeft ? "md:pl-0 md:pr-12 md:mr-auto" : "md:pl-12 md:ml-auto"
                            }`}
                          >
                            {/* Node on the road */}
                            <span
                              aria-hidden="true"
                              className={`absolute top-6 left-4 -translate-x-1/2 ${
                                isLeft
                                  ? "md:left-auto md:right-0 md:translate-x-1/2"
                                  : "md:left-0 md:-translate-x-1/2"
                              }`}
                            >
                              <span
                                className={`block rounded-full bg-linear-to-br ${profile.accent} ring-4 ring-white dark:ring-slate-900 ${
                                  entry.highlight ? "h-6 w-6" : "h-5 w-5"
                                }`}
                              />
                            </span>

                            {/* Milestone card */}
                            <div
                              className={`rounded-2xl border p-6 bg-white dark:bg-slate-800/50 ${
                                entry.highlight
                                  ? "border-transparent shadow-xl shadow-blue-500/10 ring-2 ring-blue-500/40"
                                  : "border-slate-200 dark:border-slate-700"
                              }`}
                            >
                              <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                                {entry.period}
                              </span>
                              <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                                {entry.title}
                              </h4>
                              {entry.org && (
                                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                                  {entry.org}
                                </p>
                              )}
                              {entry.description && (
                                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                  {entry.description}
                                </p>
                              )}
                              {entry.points && entry.points.length > 0 && (
                                <ul className="mt-3 space-y-2">
                                  {entry.points.map((p, k) => (
                                    <li
                                      key={k}
                                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                                    >
                                      <span className="text-blue-500 mt-0.5">•</span>
                                      <span>{p}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                              {entry.tags && entry.tags.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                  {entry.tags.map((t) => (
                                    <span
                                      key={t}
                                      className="px-2.5 py-1 text-xs font-mono rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700"
                                    >
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.li>
                        );
                      })}
                    </ol>

                    {/* Start marker */}
                    <div className="relative h-9 mt-6">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="absolute left-4 md:left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg whitespace-nowrap"
                      >
                        Start
                      </motion.span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}