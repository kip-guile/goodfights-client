export interface getReviews {
  id: string
  reviewer_name: string
  fightId: string
  description: string
  rating: number
  posted_at: string
  fight_title: string
  fight_avatar: string
  fight_desc: string
  fight_rating: number
}

export interface reviewerReducerProps {
  reviews: any
  loading: boolean
}

export interface WelcomeProps {
  getReviews(): any
  reviews: reviewerReducerProps
}
