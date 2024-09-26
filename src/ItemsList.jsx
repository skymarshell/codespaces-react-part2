import { useState, useEffect } from "react";

function Item({ name, isPacked = false }) {
    return (<li>
        {name} {isPacked && "✓"}
    </li>);
}
export default function ItemsList() {
    const [value, setValue] = useState("");
    useEffect(() => {
        console.log("this compoment is loaded!");
        return () => {
            alert("compoment unloaded!")
        }
    }, []);
    const items = [{ name: "Sunglass", isPacked: false },
    { name: "Sunblock", isPacked: true },
    { name: "Powerbank", isPacked: false },
    { name: "Towel", isPacked: true }
    ];
    const filterList = items.filter(i => i.name.toLowerCase().includes(value.toLowerCase()))
    const itemsList = filterList.map(i => <Item key={i} name={i.name} isPacked={i.isPacked} />);
    return (<ui>
        <input
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)} />
        {itemsList}
    </ui>);
}