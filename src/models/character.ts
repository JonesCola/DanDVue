import Stat from './stat';

export default class Character {
    public characterName : string = '';
    public level : number = 1;
    public playerName : string = '';
    public stats: Stat[] = [];
}
