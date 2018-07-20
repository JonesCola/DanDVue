import { statType } from '@/models/statType';

export default class Stat {
    public type : statType = statType.Strength;
    public value : number = 0;
    public isProficient: boolean = false;
}
