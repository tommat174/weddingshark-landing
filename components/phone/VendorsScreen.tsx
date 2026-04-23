import { Eyebrow } from "./Eyebrow";
import { Icon } from "./Icon";
import { VendorCard, type Vendor } from "./VendorCard";

const cats = ["All", "Venues", "Florists", "Photography", "Music"];

const vendors: Vendor[] = [
  {
    name: "Hayfield House",
    cat: "Venue",
    tint: "#c4827a",
    activity: "Available Oct 12 · 6 quotes sent",
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=200&q=80",
  },
  {
    name: "Bloom & Branch",
    cat: "Florist",
    tint: "#b4dbbb",
    activity: "3 palettes waiting for review",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=200&q=80",
  },
  {
    name: "Aria Strings",
    cat: "Music",
    tint: "#333132",
    activity: "Sent demo reel yesterday",
    img: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=200&q=80",
  },
  {
    name: "North Light Photo",
    cat: "Photography",
    tint: "#333132",
    activity: "Quoted 5,800 · Awaiting contract",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=200&q=80",
  },
  {
    name: "Orangery Kitchen",
    cat: "Catering",
    tint: "#c4827a",
    activity: "Tasting scheduled for next Thu",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?w=200&q=80",
  },
];

export function VendorsScreen() {
  const active = "All";
  return (
    <div className="flex-1 overflow-hidden bg-ws-canvas font-sans">
      <div className="px-6 pb-2.5 pt-3">
        <Eyebrow>Matching</Eyebrow>
        <div className="mt-1 font-serif text-[32px] font-bold tracking-[-0.02em] text-ws-fg">
          Your Vendors
        </div>
      </div>

      {/* Search */}
      <div className="mx-5 mb-3 mt-2 flex h-12 items-center gap-2.5 rounded-ws-lg bg-ws-surface px-4 shadow-ws-input">
        <Icon name="search" size={18} color="#7D7975" />
        <div className="text-[14px] text-ws-fg-warm">
          Search vendors or categories…
        </div>
      </div>

      {/* Filter chips */}
      <div className="no-scrollbar flex gap-2 overflow-x-auto px-5 py-1">
        {cats.map((c) => {
          const isActive = c === active;
          return (
            <div
              key={c}
              className={`cursor-pointer whitespace-nowrap rounded-ws-xl px-4 py-2.5 text-[13px] font-semibold ${
                isActive
                  ? "bg-ws-rose text-white"
                  : "bg-ws-surface text-ws-fg-soft"
              }`}
              style={isActive ? undefined : { border: "1px solid #EAE5DB" }}
            >
              {c}
            </div>
          );
        })}
      </div>

      {/* Results */}
      <div className="flex flex-col gap-2.5 px-5 pb-10 pt-3">
        {vendors.map((v) => (
          <VendorCard key={v.name} vendor={v} />
        ))}
      </div>
    </div>
  );
}
