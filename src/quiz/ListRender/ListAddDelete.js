import { useState } from 'react';

export default function TextList() {
  const [texts, setTexts] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Understand keys" },
    { id: 3, text: "Build something" }
  ]);

  const [newText, setNewText] = useState("");
  const [newId, setNewId] = useState("");

  function handleDelete(id) {
    setTexts([...texts].filter(item => item.id !== id))
  }

  function handelAdd() {
    const idNumber = Number(newId);
    
    // NewTextが空白だったら
    if (!newText.trim()) {
      alert('テキスト欄が空白です');
      return;
    }
    // idが数値ではない、もしくは0以下なら
    if (!Number.isInteger(idNumber) || idNumber <= 0) {
      alert('正しくidを入力してください');
      return;
    }
    // 既に同じidが存在したら
    if (texts.some(item => item.id === idNumber)) {
      alert('id：' + idNumber + 'は既に登録されています');
      return;
    }

    // 新しい配列を作成する
    setTexts([
      ...texts,
      {id: idNumber, text: newText.trim()}
    ]);

    // 入力欄リセット
    setNewText("");
    setNewId("");
  }

  return (
    <>
      <ol>
        {
          texts.map(item =>
            <li key={item.id}>
              {item.text}
              <button onClick={() => handleDelete(item.id)} style={{marginLeft: "20px"}}>Delete</button>（id:{item.id}）
            </li>
          )
        }
      </ol>

      <div>
        <div>
          <label>
            NewText:
            <input
              value={newText}
              onChange={e => setNewText(e.target.value)}
            />
          </label>

          <labe>
            NewID:
            <input
              value={newId}
              onChange={e => setNewId(e.target.value)}
            />
          </labe>
        </div>
        
        <button onClick={handelAdd}>Add</button>
      </div>
    </>
  )

}