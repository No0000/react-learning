/* 
  文章の間だけに線を引く
*/

import { Fragment } from "react/jsx-runtime";

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.',
    'Happy New Year.',
    'How old are you?'
  ]
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) =>
        <Fragment key={index}> {/* <></>はkeyを記述できない。そういった場合にFragmentを使う */}
          {index > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      )}
    </article>
  );
}
