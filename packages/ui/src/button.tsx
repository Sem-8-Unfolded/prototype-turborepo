"use client";

export interface ButtonProps {
  onClick: () => void;
  content: string;
  className?: string;
}

export default function Button({ onClick, content, className }: ButtonProps) {
    return (
        <button onClick={onClick} className={className}>
            {content}
        </button>
    );
}