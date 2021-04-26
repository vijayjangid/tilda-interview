import "./styles.css";
import Meeting from "./modules/meeting";
import Todo from "./modules/todo";

//mock data
function generate_series(step) {
  const dt = new Date(1970, 0, 1);
  const rc = [];
  while (dt.getDate() === 1) {
    rc.push(dt.toLocaleTimeString("en-US"));
    dt.setMinutes(dt.getMinutes() + step);
  }
  return rc;
}

const meetings = [
  {
    title: "interview",
    type: "meeting",
    start: new Date(2021, 3, 26, 17, 30, 30),
    end: new Date(2021, 3, 26, 18, 30, 30)
  },
  {
    title: "client call",
    type: "meeting",
    start: new Date(2021, 3, 26, 11, 30, 30),
    end: new Date(2021, 3, 26, 13, 30, 30)
  },
  {
    title: "scrum",
    type: "meeting",
    start: new Date(2021, 3, 26, 14, 30, 30),
    end: new Date(2021, 3, 26, 15, 30, 30)
  }
];
const todos = [
  {
    title: "todo 1",
    duration: 20,
    created: new Date(2021, 3, 26, 15, 0, 0),
    due: new Date(2021, 3, 27)
  },
  {
    title: "todo 2",
    duration: 40,
    created: new Date(2021, 3, 26, 15, 0, 0),
    due: new Date(2021, 3, 27)
  }
];

const getSortedEvents = () => {
  const allEvents = [...meetings, ...todos];
  return allEvents.sort((a, b) => {
    const aStart = a.start || a.created;
    const bStart = b.start || b.created;
    return aStart - bStart;
  });
};

export default function App() {
  const allEvents = getSortedEvents();
  return (
    <>
      <h1> Smart Scheduler</h1>
      <div className="timestamp-container">
        {generate_series(60).map((timestamp) => (
          <div className="timestamp">{timestamp}</div>
        ))}
      </div>
      <div className="meetings-container">
        {allEvents.map((event) =>
          event.type === "meeting" ? (
            <Meeting title={event.title} start={event.start} end={event.end} />
          ) : (
            <Todo
              title={event.title}
              duration={event.duration}
              due={event.due}
              created={event.created}
            />
          )
        )}
      </div>
    </>
  );
}

// Day's highlight
// cant move meetings
// todos
// filter (todos/meeting)
// search

// 45 min
