import './SearchResult.css';

export const SearchResult = ({ result }) => {
  return (
    <div
      className='search-result'
      onClick={(e) =>
        alert(`You selected: ${result.name} email:${result.email}!`)
      }>
      1.{result.name}
      <br />
      2.{result.username}
      <br />
      3.{result.email}
      <br />
      4.{result.website}
    </div>
  );
};
