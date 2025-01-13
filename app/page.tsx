// import Background from "@/components/Background";
import HeadingSection from "@/components/HeadingSection";

export default function Home() {
  return (
    <>
      <div className="relative w-full">
        {/* <div className="absolute inset-0 z-0"><Background /></div> */}

        <div className="relative z-10">
          <HeadingSection />
        </div>
      </div>
    </>
  );
}
