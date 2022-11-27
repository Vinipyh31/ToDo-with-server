import { observer } from 'mobx-react-lite';
import todo from '../../../store/todo';
import { FilterTypes } from '../../../types';
import cl from "./Filters.module.sass";

const defaultFilters: FilterTypes[] = ["All", "Done", "Undone"]

const Filters = observer(() => {

    const onFilterClick = (filter: FilterTypes) => {
        if (filter !== todo.filter) {
            todo.setFilter(filter)
        }
    }


    return (
        <div className={cl.Filters}>
            {defaultFilters.map((filter, i) =>
                <li 
                    key={i}
                    className={todo.filter === filter ? cl.active : ""}
                    onClick={(e) => { onFilterClick(filter) }}>
                    {filter}
                </li>)}

        </div>

    );
})

export default Filters;