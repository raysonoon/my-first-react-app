function Item({ name, isPacked, importance }) {
    return (
        <li className="item">
            {name} 
            {importance > 0 && " "}
            {importance > 0 && 
                <i>(Importance: {importance})</i>
            } 
            {isPacked ? ' ✅' : ' ❌'}
        </li>
    );
}
// Two separate conditions are used to insert a space between name and importance label

export default function PackingList() {
    return (
        <section>
            <h1>Rayson's Packing List</h1>
            <ul>
                <Item 
                    importance={9}
                    isPacked={true}
                    name="Guitar"
                />
                <Item
                    importance={0}
                    isPacked={true}
                    name="Chou chou"
                />
                <Item
                    importance={6}
                    isPacked={false}
                    name="Photo of doggy"
                />
            </ul>
        </section>
    );
}