

function SectionBox({children,className}) {
  return (
    <section className={`bg-white p-4 w-100  rounded-md ${className}`}>{children}</section>
  )
}

export default SectionBox