
interface Props{
    children:React.ReactNode ;
}

export default function LayoutPublic({children}:Props) {
  return (
    <div>{children}</div>
  )
}
