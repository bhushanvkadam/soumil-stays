interface Props {
  label: string;
  variant?: "default" | "pool" | "featured";
}

const variants = {
  default: "bg-white/90 text-foreground",
  pool: "bg-forest/90 text-white",
  featured: "bg-[#1B4332] text-white",
};

export default function Badge({ label, variant = "default" }: Props) {
  return (
    <span
      className={`inline-block text-xs font-sans font-medium px-2.5 py-1 rounded-full ${variants[variant]}`}
    >
      {label}
    </span>
  );
}
