interface Props {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({ title, subtitle, align = "center" }: Props) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-gray-500 text-base md:text-lg leading-relaxed ${
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
