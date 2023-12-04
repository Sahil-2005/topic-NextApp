"use client";

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function EditTopicForm({ topicId, title, description }) {

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/topics/${topicId}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newDescription })
            });

            if(!res.ok) {
                throw new Error("failed to update")
            } else {
                console.log("topic updated");
            }
            router.push("/");
            router.refresh();
            
        } catch(e) {
            console.error(e);
            if (e instanceof Error) {
                console.error(e.message);
            }
        }
    }
    // const { topic } = await updateTopic();
    return (<form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <input
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Topic Title"
                    onChange={(e) => {setNewTitle(e.target.value)}}
                    value={newTitle}
                />
                <input
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Topic Description"
                    onChange={(e) => {setNewDescription(e.target.value)}}
                    value={newDescription}
                />
                <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Add Topic</button>
            </form>
        )
}