import Difference from "./components/formulas/difference";
import Squares from "./components/formulas/squares";
import Sum from "./components/formulas/sum";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center gap-[20px]">
      <h1 className="text-6xl text-[#02735E]">The Binomial Theorem</h1>
   <Sum />
   <Difference />
   <Squares />
    </div>
  );
}
