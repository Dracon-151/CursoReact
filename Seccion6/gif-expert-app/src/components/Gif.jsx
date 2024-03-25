export const Gif = ({ title, url }) => {
  return (
    <div className="card mx-1 my-2">
        <iframe src={ url } alt={ title } />
        <div className="card-footer">
            { title }
        </div>
    </div>
  )
}
