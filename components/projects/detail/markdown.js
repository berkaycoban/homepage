function Markdown({ content, className }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} className={className} />
  )
}
export default Markdown
