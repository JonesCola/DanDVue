import Stat from './stat';

export default class Character {
    public characterName : string = '';
    public exp : number = 0;
    public playerName : string = '';
    public stats: Stat[] = [];
    public personalityTraits: string = '';
    public ideals: string = '';
    public bonds: string = '';
    public flaws: string = '';
    public features: string = '';
}
