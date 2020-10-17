function Markdown({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

export default Markdown
