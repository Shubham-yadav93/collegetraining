
import Tableheader from "./Tableheader"
import Tablebody from "./Tablebody"
import "./Table.css"

const Table = () => {
  return (
    <div>
        <table className="one">
            <Tableheader/>
            <Tablebody/>
        </table>
    </div>
  )
}

export default Table