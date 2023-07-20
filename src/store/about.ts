import { Store } from "../core/benelling";

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_1280.png',
  name: 'BENELLING / Mo HyeIn',
  email: 'smbt246@naver.com',
  blog: 'https://blog.naver.com/smbt246',
  github: 'https://github.com/benelling',
  repository: 'https://github.com/benelling/vanillajs-movie-app'
})