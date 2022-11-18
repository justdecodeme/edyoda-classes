

function Filter({ categories, actKey, handleKey }) {
  const handleCatClick = (key) => {
    handleKey(key)
  }

  return (
    <div class="categories_container">

      <nav>
        <h1>Trending Posts</h1>

        <div class="filter">
          <i class="fa-solid fa-filter"></i>
          <span> Filter by Category</span>
        </div>
        {Object.keys(categories).map(function (key) {
          return (
            <button className={key === actKey ? 'active' : ''} onClick={() => handleCatClick(key)}>
              {categories[key]}
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export default Filter;