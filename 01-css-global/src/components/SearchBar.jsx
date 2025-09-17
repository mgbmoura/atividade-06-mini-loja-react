export function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="O que você procura?" 
        value={searchTerm}
        onChange={onSearchChange}
      />
      <button>Buscar</button>
    </div>
  );
}
