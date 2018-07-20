import Stat from '@/models/stat';
import Attack from '@/models/attack';

export default class Character {
    public characterName : string = '';
    public exp : number = 0;
    public playerName : string = '';
    public stats: Stat[] = [];
    public attacks: Attack[] = [];
    public proficiencyBonus : number = 2; // always defaults to 2
    public personalityTraits: string = '';
    public ideals: string = '';
    public bonds: string = '';
    public flaws: string = '';
    public notes: string = '';
    public class: string = '';
    public race: string = '';
    public alignment: string = '';
    public background: string = '';
}
