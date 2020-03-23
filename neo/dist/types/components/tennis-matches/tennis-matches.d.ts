import { ComponentInterface } from '../../stencil-public-runtime';
import { TennisMatchI } from '../tennis-match/tennis-match.model';
interface OpponentsI {
    matchA: TennisMatchI;
    matchB: TennisMatchI;
}
export declare class TennisMatches implements ComponentInterface {
    matchesRoundA: TennisMatchI[];
    matchesRoundB: TennisMatchI[];
    matchesRoundC: TennisMatchI[];
    matchesRoundAOpponents: OpponentsI[];
    matchesRoundBOpponents: OpponentsI[];
    matchesRoundCOpponents: OpponentsI[];
    setOpponents(matches: TennisMatchI[]): OpponentsI[];
    componentWillLoad(): void;
    render(): any;
}
export {};
