import React from 'react'
import { formatDateString } from '../../utils/DateUtil';
import { IconEmptyCalendar, IconSelectBoxBlankCircle, IconSelectBoxCircleFill } from '../../utils/SvgUtil';
import { generateRandomId } from '../../utils/MathUtil';

export interface TodoItem {
    title: string;
    content: string;
    date: string;
    tags: Array<string>;
    isChecked: boolean;
}
export interface TodoListItemProps {
    item: TodoItem;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ item }) => {
    return (
        <div className='flex gap-[10px] cursor-pointer'>
            <div>
                {item.isChecked ? <IconSelectBoxCircleFill size={24} /> : <IconSelectBoxBlankCircle size={24} />}
            </div>
            <div className='w-full'>
                <div className="text-sm font-medium">
                    {item.title}
                </div>
                <div className="text-sm text-[#525866]">
                    {item.content}
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        {
                            item.tags.map((tag, index) => (
                                <span className='text-sm px-2 py-[2px] rounded-full bg-[#FFF1EB] text-[#FF8447] font-normal' key={generateRandomId()}>{tag}</span>
                            ))
                        }
                    </div>
                    <div className='flex items-center text-xs text-[#99A0AE] gap-[4px]'>
                        <IconEmptyCalendar color="#99A0AE" size={14} />
                        {formatDateString(item.date, "MMM DD")}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoListItem;