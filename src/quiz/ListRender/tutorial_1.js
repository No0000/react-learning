/* 
  リストを科学者とそれ以外の2つに分ける
*/
import { people } from './tutorial_data/scientists_data.js';
import { getImageUrl } from './tutorial_data/utils.js';

function ListSection({ title, people }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
    </>
  );
}

export default function List() {
  // 条件式を二つに分けてレンダーさせる
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const everyoneElse = people.filter(person =>
    person.profession !== 'chemist'
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ListSection
        title="Chemists"
        people={chemists} // 表示するリストの切り替え(科学者のみ)
      />
      <ListSection
        title="Everyone Else"
        people={everyoneElse} // 表示するリストの切り替え(科学者以外)
      />
    </article>
  );
}
