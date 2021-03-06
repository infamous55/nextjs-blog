export default function YouTube({ id }: { id: string }) {
  return (
    <div className="relative pb-[56.25%] h-0">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
      />
    </div>
  )
}
