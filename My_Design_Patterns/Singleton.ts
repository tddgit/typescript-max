export class StatsTracker {
    buttonClicker: number = 0;
    facebookShares: number = 0;
    twitterShares: number = 0;
    widgetView: number = 0;

    constructor() {
        if (StatsTracker._instance) {
            throw new Error('Cannot initialize a singleton instance');
        }
        StatsTracker._instance = this;
    }
    private static _instance: StatsTracker = new StatsTracker();

    public static get instance(): StatsTracker {
        return StatsTracker._instance;
    }
}

let tracker = StatsTracker.instance;
tracker.widgetView = 78;
tracker.buttonClicker = 98;
tracker.facebookShares = 65;
tracker.twitterShares = 76;

console.log(
    tracker.widgetView,
    tracker.buttonClicker,
    tracker.facebookShares,
    tracker.twitterShares
);

tracker.twitterShares += 24;
