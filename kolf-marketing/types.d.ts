/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />

declare module '@testing-library/jest-dom'
declare module '@testing-library/user-event'
declare module '@testing-library/react'

interface Window {
  IntersectionObserver: any;
  ResizeObserver: any;
  performance: Performance;
} 