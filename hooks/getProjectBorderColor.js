const data = [{ color: 'var(--c-borderWeb)', category: 'web' }]

function getBorderColor(category) {
  const item = data.filter((data) => data.category == category)
  return item[0].color
}

export default getBorderColor
