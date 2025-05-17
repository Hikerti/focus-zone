import {create} from "zustand";
import {Achievements, useAchievementsInterface} from "@/page/profile/widgets/profileAchievement/interface/interface.ts";

export const useAchievements = create<useAchievementsInterface>((set) => ({
    achievements: [],
    setAchievements: (achievements: Achievements[]) => {
        set({achievements});
    },
}))