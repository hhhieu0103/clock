import "./App.css";

function App() {
  const time = new Date();

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const secondNeedleDeg = (seconds * 6 + 90) % 360;
  const minuteNeedleDeg =
    (minutes * 6 + 90 + Math.round((6 * seconds) / 60)) % 360;
  const hourNeedleDeg =
    (hours * 30 + 90 + Math.round((30 * minutes) / 60)) % 360;

  const numbers = Array(12)
    .fill()
    .map((_, i) => {
      const deg = ((i + 1) * 360) / 12;
      return (
        <div
          key={i}
          className={
            "absolute h-9/10 translate-y-1/18 left-1/2 -translate-x-1/2 rotate-" +
            deg
          }
        >
          <p className={"text-5xl -rotate-" + deg}>{i + 1}</p>
        </div>
      );
    });

  const ticks = Array(60)
    .fill()
    .map((_, i) => {
      const deg = ((i + 1) * 360) / 60;
      return (
        <div key={i} className={"absolute h-full left-1/2 rotate-" + deg}>
          {(i + 1) % 5 === 0 ? <p className="font-black">|</p> : <p>|</p>}
        </div>
      );
    });

  return (
    <div className="h-screen w-screen">
      <div className="flex h-full w-full justify-center items-center">
        <div className="relative border-12 w-128 h-128 rounded-full">
          {numbers}
          {ticks}

          <div className="absolute top-1/2 left-0 w-full">
            <div className="flex justify-center">
              <div
                className={
                  "flex basis-6/10 animate-hour rotate-" + hourNeedleDeg
                }
              >
                <div className="basis-1/2 border-4 rounded-full"></div>
                <div className="basis-1/2"></div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-0 w-full">
            <div className="flex justify-center">
              <div
                className={
                  "flex basis-9/10 animate-minute rotate-" + minuteNeedleDeg
                }
              >
                <div className="basis-1/2 border-4 rounded-full"></div>
                <div className="basis-1/2"></div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-0 w-full">
            <div className="flex justify-center">
              <div
                className={
                  "flex basis-9/10 animate-second rotate-" + secondNeedleDeg
                }
              >
                <div className="basis-1/2 border-3 rounded-full border-red-500"></div>
                <div className="basis-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
