// Полифилл для react-native-reanimated useWorkletCallback
import { useCallback } from 'react';

// Временное решение для проблемы с useWorkletCallback
declare global {
  var useWorkletCallback: typeof useCallback;
}

if (typeof global !== 'undefined') {
  (global as any).useWorkletCallback = (global as any).useWorkletCallback || useCallback;
}

export {};