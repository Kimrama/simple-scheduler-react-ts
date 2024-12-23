import { FormEvent, useRef } from "react";

type addGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
};

export default function AddGoalForm({ onAddGoal }: Readonly<addGoalProps>) {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function handleAddGoal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        event.currentTarget.reset();
        onAddGoal(enteredGoal, enteredSummary);
    }
    return (
        <form onSubmit={handleAddGoal}>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input id="goal" type="text" ref={goal} />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input id="summary" type="text" ref={summary} />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    );
}
