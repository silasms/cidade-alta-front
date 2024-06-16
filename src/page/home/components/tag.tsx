interface Tag {
  id: string
  image: string
  slug: string
  name: string
  categoryId: number
  category: { id: string, name: string }
}

interface props {
  tag: Tag;
  blackWhite: boolean | null;
}

const changeColor = (tier: string) => {
  if (tier === 'ouro')
    return '#FFD700'
  else if (tier === 'prata')
    return '#C0C0C0'
  else if (tier === 'bronze')
    return '#CD7F32'
}

export function Tag({ tag, blackWhite = false }: props) {
  return (
    <div className="w-20 h-20 flex flex-col items-center justify-center hover:scale-105 ease-in-out duration-300" key={tag.id} style={{filter: blackWhite ? "" : 'grayscale(1)'}}>
      <img src={tag.image} alt={tag.name} className="w-20 absolute z-10" />
      <div className="p-12 z-9 scale-110 rounded-3xl" style={{backgroundColor: changeColor(tag.category.name)}}/>
    </div>
  )
}