import { GameCharacter } from './gameCharacter';
import { GameCharacterFactory } from './gameCharecterFactory';

export class GameCharacterPool {
    private _warriorsPool: GameCharacter[] = [];
    private _magesPool: GameCharacter[] = [];

    static WARRIORS_POOL_SIZE = 30;
    static MAGES_POOL_SIZE = 20;

    constructor(private _level: number) {
        this.loadWarriorsPool();
        this.loadMagesPool();
    }
    loadMagesPool() {
        for (let i = 0; i < GameCharacterPool.MAGES_POOL_SIZE; i++) {
            this._magesPool.push(GameCharacterFactory.getMage(this._level));
        }
    }
    loadWarriorsPool() {
        for (let i = 0; i < GameCharacterPool.WARRIORS_POOL_SIZE; i++) {
            this._warriorsPool.push(
                GameCharacterFactory.getWarrior(this._level)
            );
        }
    }

    getPoolItem<T>(pool: T[], reloadFn: () => void): T {
        if (!pool.length) {
            reloadFn();
        }
        let item: T = pool.pop() as T;
        return item;
    }

    public getWarrior(): GameCharacter {
        // if (!this._warriorsPool) {
        //     this.level = 7;
        //     this._warriorsPool = [];
        //     this.loadWarriorsPool();
        // }
        return this.getPoolItem(
            this._warriorsPool,
            this.loadWarriorsPool.bind(this)
        );
    }

    public getMage(): GameCharacter {
        // if (!this._magesPool) {
        //     this._magesPool = [];
        //     this.loadMagesPool();

        return this.getPoolItem(this._magesPool, this.loadMagesPool.bind(this));
    }
}
