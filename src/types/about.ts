export interface AboutSegment {
  type: 'text' | 'link'
  content: string
  url?: string
}

export interface AboutData {
  numberedHeading: string
  title: string
  paragraphs: AboutSegment[][]
  skills: string[]
  image: string
}
