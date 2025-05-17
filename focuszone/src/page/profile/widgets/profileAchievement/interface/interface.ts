export interface Achievements {
    id: number
    userId: string
    cafeId: number
    url: string
    title: string
    description: string
}

export interface useAchievementsInterface {
    achievements: Achievements[]

    setAchievements: (achievements: Achievements[]) => void
}