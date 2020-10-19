const data = [
  { color: 'var(--c-primary)', category: 'web' },
  { color: 'var(--c-secondary)', category: 'design' }
]

function getBorderColor(category) {
  const item = data.filter((data) => data.category == category)
  return item[0].color
}

export default getBorderColor
