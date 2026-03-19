'use client';

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

type ToastType = 'success' | 'warning' | 'info' | 'error';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  timeoutMs: number;
}

interface ToastContextValue {
  showToast: (message: string, type?: ToastType, timeoutMs?: number) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

const TOAST_STYLES: Record<ToastType, React.CSSProperties> = {
  success: {
    background: '#166534',
    color: '#ffffff',
    border: '1px solid #15803d',
  },
  warning: {
    background: '#92400e',
    color: '#ffffff',
    border: '1px solid #b45309',
  },
  error: {
    background: '#991b1b',
    color: '#ffffff',
    border: '1px solid #b91c1c',
  },
  info: {
    background: '#1e40af',
    color: '#ffffff',
    border: '1px solid #2563eb',
  },
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'info', timeoutMs = 3500) => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((cur) => [...cur, { id, message, type, timeoutMs }]);
    window.setTimeout(() => {
      setToasts((cur) => cur.filter((t) => t.id !== id));
    }, timeoutMs);
  }, []);

  const value = useMemo<ToastContextValue>(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}

      {/* ✅ Conteneur centré en haut de l'écran, bien visible */}
      <div
        aria-live="polite"
        aria-atomic
        style={{
          position: 'fixed',
          top: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'grid',
          gap: '10px',
          zIndex: 9999,
          width: 'max-content',
          maxWidth: 'min(520px, 90vw)',
        }}
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="status"
            style={{
              ...TOAST_STYLES[toast.type],
              padding: '14px 24px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 600,
              boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              animation: 'toast-in 0.25s ease',
            }}
          >
            {toast.message}
          </div>
        ))}
      </div>

      {/* Animation d'entrée */}
      <style>{`
        @keyframes toast-in {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}