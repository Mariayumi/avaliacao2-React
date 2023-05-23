import { ITeam } from "../types/index";
import api from "./api";

class Teams {
    async getTeams(): Promise<ITeam[]> {
        return api.get(`http://localhost:3004/team`).then((res: any) =>

            res.data.sort((a: any, b: any) => {
                const teamA = a.name.toLowerCase();
                const teamB = b.name.toLowerCase();

                return teamA.localeCompare(teamB);
            })
        );
    }
}

const team = new Teams();

export default team;