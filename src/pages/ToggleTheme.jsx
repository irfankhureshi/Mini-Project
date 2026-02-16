const ToggleTheme = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-cyan-700 mb-4">
        Theme
      </h2>

      <div className="bg-white p-6 rounded shadow">
        <p>
          This project uses a single consistent theme:
          <strong className="text-cyan-700"> Cyan</strong>
        </p>
      </div>
    </div>
  )
}

export default ToggleTheme
