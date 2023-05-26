import ThreeWrapper from "@/components/ThreeWrapper";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Suspense fallback={null}>
        <ThreeWrapper />
      </Suspense>
    </div>
  )
}

