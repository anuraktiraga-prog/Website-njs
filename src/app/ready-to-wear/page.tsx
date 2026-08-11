import { ReadyToWearReveal } from "@/components/ready-to-wear-reveal";
import { SiteHeader } from "@/components/site-header";

export default function ReadyToWearPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ReadyToWearReveal />
      </main>
    </>
  );
}
