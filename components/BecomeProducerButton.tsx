"use client";

import { useState } from "react";
import ProducerBenefitsModal from "./ProducerBenefitsModal";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function BecomeProducerButton({ className, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setOpen(true)}
      >
        {children ?? "Devenir producteur partenaire"}
      </button>

      <ProducerBenefitsModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
