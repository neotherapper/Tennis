import { ComponentInterface } from '../../stencil-public-runtime';
import { TennisTeamI } from './tennis-match-team.model';
export declare class TennisMatchTeam implements ComponentInterface {
    team: TennisTeamI;
    numberOfSets: number;
    render(): any;
}
