import Goal from "./Goal";
import { type goal } from "../App";
type goalListProps = {
    goals: goal[];
    onDeleteGoal: (id: number) => void;
};

export default function GoalList({
    goals,
    onDeleteGoal,
}: Readonly<goalListProps>) {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <Goal
                        id={goal.id}
                        title={goal.title}
                        onDeleteGoal={onDeleteGoal}
                    >
                        <p>{goal.describe}</p>
                    </Goal>
                </li>
            ))}
        </ul>
    );
}
