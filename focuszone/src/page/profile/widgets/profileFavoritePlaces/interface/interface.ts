import {FullDataPlace} from "@/helpers/interface/interface";

export interface FavoritePlace extends FullDataPlace {
}

export interface ResolveDataFavoritePlace {
    data: FavoritePlace[]
}