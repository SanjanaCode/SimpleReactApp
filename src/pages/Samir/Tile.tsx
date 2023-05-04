import './Reminder.css'

const Tile = ({ assignments }: { assignments: any[] }) => {
    return (
        <>
            {
                assignments.map((assignment) => {
                    const { id, title, desc, deadline } = assignment;
                    return <article data-testid="assignment-tiles" key={id} className="assignment">
                        <div >
                            <h4>{title}</h4>
                            <p>{desc}</p>
                            <p>{deadline}</p>
                        </div>
                    </article>
                })
            }
        </>
    );
};

export default Tile;