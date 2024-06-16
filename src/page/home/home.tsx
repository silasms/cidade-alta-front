import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/axios";
import { OpenGift } from "./components/openGift";
import { Tag } from "./components/tag";

interface Tag {
  id: string
  image: string
  slug: string
  name: string
  categoryId: number
  category: { id: string, name: string }
}

export function Home() {
  const [ tags, setTags ] = useState<Tag[]>([])
  const [ show, setShow ] = useState<Tag[]>([])
  const [ userTags, setUserTags ] = useState<{tag: { id: string }}[]>([])
  const [ loading, setLoading ] = useState(true)
  const [ rewardTag, setRewardTag ] = useState<Tag>()
  const [ open, setOpen ] = useState(false)
  const { signin, setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const authenticate = async () => {
    const result = await signin()
    if (!result) navigate('/login')
    const id = localStorage.getItem('id')
    const { data } = await api.get('/users/' + id, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    
    localStorage.setItem('user', JSON.stringify(data))
    setUser(data)
    setLoading(false)
    setUserTags(data.tags)
  }

  const getTags = async () => {
    const { data } = await api.get('/tags', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    setTags(data)
  }

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value
    setShow(
      tags.filter(({ category: { name } }) => name.includes(targetValue))
    )
  }

  const reward = async () => {
    const id = localStorage.getItem('id')
    if (!id) return
    const { data } = await api.get('/users/reward/' + id, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
    setRewardTag(data.tag)
    setOpen(true)
    setUserTags([...userTags, data])
  }

  useEffect(() => {
    setShow(tags)
  }, [tags])

  useEffect(() => {
    if (localStorage.getItem('token') === '') navigate('/login')
    authenticate()
    getTags()
  }, [])

  return (
    <main className="px-14">
      {open && <div className="`w-screen h-screen top-0 left-0 flex justify-center items-center absolute z-50" onClick={() => setOpen(false)}>
          <div className="absolute translate-x-10 translate-y-10">
            {rewardTag && <Tag tag={rewardTag}  blackWhite={true} />}
          </div>
          <OpenGift/>
        <div className="w-screen h-screen" style={{backgroundColor: '#00000050'}}>
        </div>
      </div>}
      <div className="mt-10">
        <div className="flex mb-10 items-center justify-between">
          <p className="text-2xl">Emblemas</p>
          <input type="text" name="search" id="search" className="px-3 py-3 rounded-xl" placeholder="Pesquise por categoria" onChange={search} />
        </div>
        <div className="flex gap-20 flex-wrap bg-gray-200 p-10 rounded-xl">
          {!loading && show.map((tag) => {
            return (
              <Tag tag={tag} blackWhite={open ? null : userTags.filter((userTag) => userTag.tag.id === tag.id).length > 0}/>
            )
          })}
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button onClick={reward} className="px-4 py-2 bg-blue-300 rounded-xl hover:scale-105 ease-in-out duration-300">Resgatar um emblema</button>
      </div>
    </main>
  )
}