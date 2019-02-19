import { Artist } from "./artist";

export  class Feed {

    title: string;
    copyright: string;
    country: string;
    private _results: Artist[];
    public get results(): Artist[] {
        return this._results;
    }
    public set results(value: Artist[]) {
        this._results = value;
    }
}
