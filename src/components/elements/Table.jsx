import { merge } from "@lib/merge";
import { a } from "motion/react-client";
import { useCallback, useMemo, useState } from "react";

/** Table component
 * @param {{ 
 *   initial: TablePayload
 *   className?: Partial<typeof appearance>
 * }} props
 */
function Table({
  initial,
  className = appearance
}) {
  const a = merge(appearance, className);
  const { data, layout, requestSort } = useTableState(initial);
  
  return (
    <div className={a.container}>
      <div className="grid" style={{ gridTemplateColumns: layout }}>
        { dataToHeadElements(initial.columns, requestSort) }
      </div>
      <div className="grow flex flex-col h-full overflow-y-auto">
        { dataToRows(data, layout) }
      </div>
    </div>
  );
}

/**
 * @param {TableColumns} columns 
 * @param {(id: string) => void} sort 
 */
function dataToHeadElements(columns, sort) {
  return columns.ids.map(id => 
    columns.visible.includes(id) && (
      <Column
        className={appearance.column}
        key={id}
        onClick={() => sort(id)}
      >{columns.names[id]}</Column>
    )
  );
}

function dataToRows(data, gridTemplateColumns) {
  return data.map((cells, i) => {
    return <Row key={i} cells={cells} className="grid" style={{ gridTemplateColumns }} />
  });
}

function Column({
  onClick = () => {},
  className,
  children
}) {
  return <div className={className} onClick={onClick}>{ children }</div>;
}

function Row({
  cells,
  style,
  className
}) {
  const cellElements = cells.map((c, i) => <div key={i}>{ c }</div>)
  return <div className={className} style={style}>{ cellElements }</div>;
}

const appearance = {
  container: "h-full flex flex-col gap-1 p-2",
  row: "grid grid-flow-col grid-cols-3 gap-1",
  cell: "",
  column: ""
};

/** @param {TablePayload} initial  */
function useTableState({columns, data}) {
  const [config, setConfig] = useState({
    key: columns.sortBy, 
    asc: columns.ascending
  });
  
  const sortedData = useMemo(() => {
    const visible = columns.ids.map(id => columns.visible.includes(id));
    let rows = [...data];
    if (config.key !== null) {
      const i = columns.ids.indexOf(config.key);
      rows.sort((a, b) => 
        a[i] < b[i] ? config.asc ? -1 : 1 : 
        a[i] > b[i] ? config.asc ? 1 : -1 : 
        0
      );
    }
    return rows.map(row => row.filter((_, i) => visible[i]));
  }, [config]);

  const layout = useMemo(() => {
    return columns.visible.map(id => columns.sizes[id]).join(' ');
  }, [columns.sizes])

  const requestSort = useCallback(key =>
    setConfig(p => ({ key, asc: p.key === key ? !p.asc : p.asc })), [config])

  return {
    data: sortedData,
    layout,
    requestSort
  };
}

export default Table;