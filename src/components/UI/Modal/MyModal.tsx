import React from 'react';
import { MyModalProps } from '../../../types';
import cl from "./MyModal.module.sass";



const MyModal : React.FC<MyModalProps> = ({active, setActive, children}) => {

    return (
        <div className={ active ? [cl.myModal, cl.active].join(' ') : cl.myModal  } onClick={() => setActive(false)}>
            <div className={cl.myModalContent} onClick={e => e.stopPropagation()} >
                {children}
            </div>
        </div>
    );
};

export default MyModal;