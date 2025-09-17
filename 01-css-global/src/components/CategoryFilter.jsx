export function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <aside className="category-filter">
      <h3>Categorias</h3>
      <ul>
        {
          categories.map(category => (
            <li key={category}>
              <button
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => onSelectCategory(category)}
              >
                {category}
              </button>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}
