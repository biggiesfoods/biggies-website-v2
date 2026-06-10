export default function HeaderButton({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <a
      href={href}
      className="select-none 
      transition-all duration-(--duration-animate) 
      relative inline-block 
      
      after:content-[''] after:absolute after:bottom-0 
      after:left-[10%] after:w-[80%] after:h-0.5 after:rounded 
      after:bg-(--brand-color-1-l) black after:transform after:scale-x-0 
      after:origin-center after:transition-transform after:duration-(--duration-animate) 
      
      hover:after:scale-x-100 dark:after:bg-(--brand-color-1-d) pt-1
      tracking-tighter sm:tracking-tight"
    >
      <h1>{children}</h1>
    </a>
  );
};
