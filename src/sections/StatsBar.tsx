// sections/StatsBar.tsx
export default function StatsBar() {
  const stats = [
    "7-14 Days To Launch",
    "12.4K Push Notifications/Day",
    "+22% Revenue Uplift",
    "60-Day Guarantee",
    "+32% AOV Increase",
  ];

  return (
    <div className="bg-purple-700 text-white text-xs py-3 flex justify-center flex-wrap gap-6">
      {stats.map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </div>
  );
}