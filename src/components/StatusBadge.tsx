import React from 'react';
import type { DataStatus } from '@/config/site';

const styles: Record<DataStatus, string> = {
  'à confirmer': 'bg-warning/20 text-foreground border-warning/50',
  communiqué: 'bg-secondary text-secondary-foreground border-border',
  vérifié: 'bg-success/15 text-success border-success/40',
};

export default function StatusBadge({ status }: { status: DataStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${styles[status]}`}
    >
      {status}
    </span>
  );
}