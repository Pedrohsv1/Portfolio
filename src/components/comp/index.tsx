interface ILi {
  title: string;
  description: string;
  year: string;
}

interface IH {
  title: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const H1 = (props: IH) => {
  return(
    <h1 className="font-bold text-lg text-gray-700 dark:text-gray-100">{props.title}</h1>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const H2 = (props: IH) => {
  return(
    <h1 className="font-bold text-gray-700 text-base dark:text-gray-100">{props.title}</h1>
  )
}

export const Li = (props: ILi) => {
  return(
    <li>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-700 dark:text-gray-400">{props.title}</p>
        <p className="text-sm text-gray-500">{props.description}<br/>{props.year}</p>
      </div>
    </li>
  )
}