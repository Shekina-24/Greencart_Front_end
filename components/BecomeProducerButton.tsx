"use client";

import Link from "next/link";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function BecomeProducerButton({ className, children }: Props) {
  return (
    // ✅ Remplace la pop-in par un lien vers la page dédiée
    <Link href="/devenir-producteur" className={className}>
      {children ?? "Devenir producteur partenaire"}
    </Link>
  );
}