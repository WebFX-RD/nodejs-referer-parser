export function Referer(referer_url: any, current_url: any, referers: any): void;
export class Referer {
    constructor(referer_url: any, current_url: any, referers: any);
    known: boolean;
    referer: any;
    medium: any;
    search_parameter: string;
    search_term: any;
    referers: any;
    uri: any;
    _lookup_referer(ref_host: any, ref_path: any, include_path: any): any;
}
export function loadReferers(source: any): {};
export function loadReferersRemote(url: any, convert?: typeof JSON5.parse): Promise<{}>;
import JSON5 = require("json5");
