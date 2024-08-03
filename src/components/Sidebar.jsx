import React from 'react';
import { Drawer, List } from 'antd';

const Sidebar = ({ visible, onClose, messages, onSelectChat }) => {
    return (
        <Drawer
            title="Chat History"
            placement="left"
            closable={false}
            onClose={onClose}
            visible={visible}
            width={300}
            className='bg-white dark:bg-[#0b132b] text-black dark:text-white'
        >
            <List
                dataSource={messages}
                renderItem={(message, index) => (
                    <List.Item
                        className='cursor-pointer bg-white dark:bg-[#1c2541] rounded-xl my-1'
                        onClick={() => onSelectChat(index)}
                    >
                        <div className='flex flex-row justify-between items-center gap-2 px-2'>
                            <div className="text-sm text-gray-600 dark:text-gray-300">{message.timestamp}</div>
                            <div className="text-gray-800 dark:text-white">{message.text}</div>
                        </div>
                    </List.Item>
                )}
            />
        </Drawer>
    );
};

export default Sidebar;
