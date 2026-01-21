import { RiRadioButtonFill } from "react-icons/ri";

// generate tech stack element found in project pages
export default function TechStack(props: {
  data: readonly string[];
}): JSX.Element {
  const { data } = props;

  return (
    <div className="col-span-4 md:col-span-1 embossed-card p-6 rounded-4xl">
      <div className="debossed-container p-4 rounded-3xl border-none">
        <p className="text-center font-luxury uppercase tracking-widest text-xs text-white/50 mb-4 border-b border-white/5 pb-2">Tech Stacks</p>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2 text-sm">
          {data.map((e) => (
            <p key={e} className="text-white/80 font-premium py-1 flex items-center gap-2 hover:text-white transition-colors">
              <RiRadioButtonFill className="text-white/40 text-[10px]" />
              {e}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
