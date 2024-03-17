export default function Grid({ cols='2', children}) {
  return (
    <div className={`w-full grid grid-cols-${cols} gap-2 divide-y-1`}>{children}</div>
  )
}
