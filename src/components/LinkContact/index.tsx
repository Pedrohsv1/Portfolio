interface ILink {
  url: string;
  title: string;
  description: string;
  link: string;
}

export const Link = (props: ILink) => {
  return(
    <a target="_blank" href={props.link} className="dark:hover:bg-gray-950 flex items-center gap-4 bg-indigo-100 dark:bg-gray-800 hover:bg-indigo-200 p-2 rounded-lg transition-all ">
      <img src={props.url} alt={props.description} />
      <p className="text-sm text-gray-700 dark:text-gray-400 ">{props.title}</p>
    </a>
  )
}