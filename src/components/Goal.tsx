// interface GoalProps {
//     title: string;
//     describe: string;
// }

import { type PropsWithChildren } from "react";

type GoalProps = PropsWithChildren<{
    title: string;
    onDeleteGoal: (id: number) => void;
    id: number;
}>;

export default function Goal({ title, children, onDeleteGoal, id }: GoalProps) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDeleteGoal(id)}>Delete</button>
        </article>
    );
}
