"use client";

import React from "react";

export interface ButtonProps {
  onClick: () => void;
  className?: string;
}

export default function Button({ onClick, className }: ButtonProps) {
    return (
        <button onClick={onClick} className={className}>
            Click me
        </button>
    );
}