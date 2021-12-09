import React from 'react'

export const Search: React.FC = () => {
  return (
    <div className="search">
      <form>
        <input type="text" placeholder="Pesquise o username do GitHub" />
        <button>Search</button>
      </form>
    </div>
  )
}
