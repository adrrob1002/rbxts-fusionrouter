/* eslint-disable @typescript-eslint/no-explicit-any */

import Fusion from "@rbxts/fusion";

export type Routes = {
	Path: string;
	View: (params: { [key: string]: any }) => Instance;
};

declare class Router {
	public Current: { [key: string | number]: any };
	public Routes: Routes[];

	constructor(routes: Routes[]);

	public GetView(lifecycle: (event: string) => void): Frame;
	public Push(path: string, withData: { [key: string | number]: any }): void;
}

export default Router;
