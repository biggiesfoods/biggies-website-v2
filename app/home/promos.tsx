import Background from "@/components/background/background";
import Marquee2 from "@/components/marqee/marqee";

export default function Promos() {
  return (
    <div className="relative w-full">
      <Background defaultColors />
      <div className="h-12 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <Marquee2
          autoFill
          pauseOnHover
          className="w-full transition-colors duration-(--duration-animate)"
        >
          {/* <p className="mx-1">Demo build</p> 
          <p className="mx-1"> | </p> 
          <p className="mx-1">Insert promos here</p>
          <p className="mx-1"> | </p>  */}
        </Marquee2>
      </div>
    </div>
  );
}
