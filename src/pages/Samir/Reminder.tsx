import { useState } from "react";
import data from "./data.constants";
import Tile from "./Tile";
import './Reminder.css';

const Reminder = () => {
    const [assignments, setAssignments] = useState(data);
    return (
        <main>
            <section className='container'>
                <h3 data-testid="assignments-length">{assignments.length} Assignments for next month</h3>
                <Tile assignments={assignments}></Tile>
                <button data-testid="clear-button" onClick={() => setAssignments([])} > Clear All</button>
            </section>
        </main>
    )
}

export default Reminder;