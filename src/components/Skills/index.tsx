interface ISkill {
  url: string;
  title: string;
  description: string;
}

export const Skill = (props: ISkill) => {
  return(
    <div className="flex items-center gap-4 rounded ">
      <div className="bg-indigo-50 dark:bg-gray-700 p-1 rounded">
        <img src={props.url} alt={props.description} height={24} width={24}/>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-400">{props.title}</p>
    </div>
  )
}