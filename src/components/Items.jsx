import Item from './Item'

export default function Items({items, reloadItems}) {

    function mapItems(item) {
        return <Item key={item.id} item={item} reloadItems={reloadItems}/>;
    }

    function ItemsFormatted() {
        return items.map(mapItems);
    }

    return (
        <>
            <h1 style={{color:"gray"}}>Items</h1>
            <ItemsFormatted/>
        </>
    );
}