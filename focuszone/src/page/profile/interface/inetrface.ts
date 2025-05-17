
export interface ProfileHeaderProps {
    name: string, 
    surname: string, 
    login: string
}

export interface ProfileDescriptionProps {
    description: string, 
    email?: string
    adress?: string
    phone?: string
}
export interface ProfileAchievementContentProps {
    url: string
    title: string
    description: string
}

