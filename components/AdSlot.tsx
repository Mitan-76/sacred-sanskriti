// Off by default — set NEXT_PUBLIC_ADS_ENABLED=true (after AdSense approval
// and ads.txt holds a real publisher ID, not the current placeholder) to
// turn these on with no other code changes. When off, this renders nothing
// at all rather than an empty reserved box — there's no CLS risk either
// way, since CLS is measured within a single page load, not across
// deployments, and every visitor after the flag flips on sees the reserved
// space from their very first paint.
const ADS_ENABLED = process.env.NEXT_PUBLIC_ADS_ENABLED === "true";

interface AdSlotProps {
  position: "after-intro" | "mid-article" | "before-sources";
}

export default function AdSlot({ position }: AdSlotProps) {
  if (!ADS_ENABLED) return null;

  return (
    <div
      data-ad-slot={position}
      className="my-8 flex min-h-[250px] w-full items-center justify-center rounded-md border border-dashed border-ink-100 bg-sage-50 text-sm text-ink-500"
    >
      Advertisement
    </div>
  );
}
