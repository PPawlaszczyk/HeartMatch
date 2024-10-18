import { Photo } from "./photo"

export interface Member {
  id: number
  username: string
  age: number
  photoUrl: string
  knownAs: string
  created: Date
  lastActive: Date
  gender: string
  intruduction: any
  intererts: any
  lookingFor: string
  city: string
  country: string
  photos: Photo[]
}


