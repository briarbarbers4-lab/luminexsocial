export function SkeletonCard() {
  return (
    <div
      className="rounded-2xl p-6 border skeleton-shimmer"
      style={{
        background: 'rgba(13, 33, 161, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(247, 248, 252, 0.08)',
        minHeight: '200px',
      }}
    >
      <div className="h-8 bg-royal-blue/20 rounded mb-4 w-3/4 skeleton-shimmer" />
      <div className="space-y-3">
        <div className="h-4 bg-royal-blue/15 rounded w-full skeleton-shimmer" />
        <div className="h-4 bg-royal-blue/15 rounded w-5/6 skeleton-shimmer" />
        <div className="h-4 bg-royal-blue/15 rounded w-4/5 skeleton-shimmer" />
      </div>
    </div>
  );
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-royal-blue/15 rounded skeleton-shimmer"
          style={{ width: `${90 - i * 10}%` }}
        />
      ))}
    </div>
  );
}

export function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export function SkeletonImage() {
  return (
    <div
      className="rounded-2xl skeleton-shimmer"
      style={{
        background: 'rgba(13, 33, 161, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(247, 248, 252, 0.08)',
        paddingBottom: '66.66%',
        position: 'relative',
      }}
    />
  );
}

export function SkeletonAvatar() {
  return (
    <div
      className="w-16 h-16 rounded-full skeleton-shimmer"
      style={{
        background: 'rgba(13, 33, 161, 0.1)',
        backdropFilter: 'blur(10px)',
      }}
    />
  );
}
