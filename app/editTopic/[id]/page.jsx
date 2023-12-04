import EditTopicForm from "@/components/EditTopicForm";

const updateTopic = async(id) => {
  try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
          cache: "no-store",
      });
      return res.json()
  }catch (e) {
      console.log(e);
  }
}

export default async function EditTopic({ params}) {

  const {id} = params;
  const {topic} = await updateTopic(id);
  const {title, description} = topic;

  return <EditTopicForm topicId={id} title={title} description={description}/>;
}
