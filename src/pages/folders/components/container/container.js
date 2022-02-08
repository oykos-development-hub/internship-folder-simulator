import React, { useRef } from 'react';

import ContextMenu from '../contextMenu/contextMenu';
import '../FolderComponent/folder.css';

const Container = ({ children, menuItems }) => {
    const containerRef = useRef(null);

    return (
        <div className='folders-wrapper' ref={containerRef}>
            {children}

            <ContextMenu
                parentRef={containerRef}
                items={menuItems}
            />
        </div>
    );
};

export default Container;