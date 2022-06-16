import { proposalSyntaxPlugins } from '@babel/preset-env/data/shipped-proposals';
import React from 'react';

const TaskList = (props) => {
    return (  
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}
 
export {TaskList};