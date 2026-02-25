export default function FilterButton({ filter, setFilter }) {
  return (
      <div style={{ margin: "20px 0" }}>
        <button onClick={() => setFilter("all")} disabled={filter === "all"}>
          All
        </button>
        <button onClick={() => setFilter("active")} disabled={filter === "active"}>
          Active
        </button>
        <button onClick={() => setFilter("done")} disabled={filter === "done"}>
          Done
        </button>
      </div>
  )
}