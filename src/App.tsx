import GoalList from "./components/GoalList.tsx";
import goalImage from "./assets/goal.png";
import Header from "./components/Header.tsx";
import AddGoalForm from "./components/AddGoalForm.tsx";
import { useState } from "react";

export type goal = {
    id: number;
    title: string;
    describe: string;
};

export default function App() {
    const [goals, setGoals] = useState<goal[]>([]);

    function handleDeleteGoal(id: number) {
        setGoals((prevState) => prevState.filter((goal) => goal.id !== id));
    }

    function handleAddGoal(goal: string, summary: string) {
        const newGoal: goal = {
            id: Math.random(),
            title: goal,
            describe: summary,
        };
        setGoals((prevState) => {
            return [...prevState, newGoal];
        });
    }
    return (
        <main>
            <Header image={{ src: goalImage, alt: "A list of goals" }}>
                <h1>Your Goals</h1>
            </Header>
            <AddGoalForm onAddGoal={handleAddGoal} />
            <GoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
        </main>
    );
}
