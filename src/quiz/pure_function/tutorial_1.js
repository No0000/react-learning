/* 
  現在の時刻がAM0:00からAM6:00ならnightを、それ以外ならdayを表示する
  (指定したCSSがないので正しいプログラムでもエラーが起きる)
*/
export default function Clock({ time }) {
  const hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = 'night';
  } else {
    className = 'day';
  }
  return (
    <h1 className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}