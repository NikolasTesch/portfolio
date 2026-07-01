export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-cabin text-sm font-semibold uppercase tracking-wider text-primary">
      {children}
    </span>
  );
}
