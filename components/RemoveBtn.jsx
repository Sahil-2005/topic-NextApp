"use client";

import { HiOutlineTrash} from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
    
    const router = useRouter();

    const removeTopic = async () => {
        const confirmed = confirm(`Are you sure you want to remove`);

        if(confirmed) {

            try {
                const res = await fetch('http://localhost:3000/api/topics?id='+id, {
                    method: 'DELETE',
                });

                if(res.ok) {
                    router.refresh();
                } else {
                    throw new Error(`Failed to remove the topic`);
                }

            } catch(e) {
                console.log(e);
            }
        }

        
    }
    return (
        <>
            <button onClick={removeTopic} className="text-red-400">
                <HiOutlineTrash/>
            </button>
        </>
    )
}