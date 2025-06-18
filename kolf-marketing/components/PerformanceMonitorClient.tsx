"use client";
import { usePerformanceMonitor } from "@/hooks/usePerformanceMonitor";

export default function PerformanceMonitorClient() {
  usePerformanceMonitor();
  return null;
} 